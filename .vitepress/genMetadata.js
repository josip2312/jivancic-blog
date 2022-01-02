const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const cache = new Map();

function getPost(file, postDir) {
  const fullPath = path.join(postDir, file);
  const timestamp = fs.statSync(fullPath).mtimeMs;

  const cached = cache.get(fullPath);
  if (cached && timestamp === cached.timestamp) {
    return cached.post;
  }

  const src = fs.readFileSync(fullPath, "utf-8");
  const { data } = matter(src);

  const post = {
    title: data.title,
    href: `/posts/${file.replace(/\.md$/, ".html")}`,
    description: data.description,
    date: formatDate(data.date),
    tags: data.tags,
    category: data.category,
  };

  cache.set(fullPath, {
    timestamp,
    post,
  });
  return post;
}

function getPosts() {
  const postDir = path.resolve(__dirname, "../posts");
  return fs
    .readdirSync(postDir)
    .map((file) => getPost(file, postDir))
    .sort((a, b) => b.date.time - a.date.time);
}

function formatDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

function genMetadata() {
  fs.writeFileSync(
    path.resolve(__dirname, "metadata.json"),
    JSON.stringify(getPosts())
  );
}

let hasWatched = false;

async function watchPosts() {
  console.log("watch");
  genMetadata();

  if (hasWatched || process.env.NODE_ENV === "production") {
    return;
  }

  const CheapWatch = require("cheap-watch");
  const watcher = new CheapWatch({
    dir: path.resolve(__dirname, "../posts"),
    filter: ({ path }) => path.endsWith(".md"),
    debounce: 50,
  });
  await watcher.init();
  watcher.on("+", genMetadata);
  watcher.on("-", genMetadata);
}

exports.getPosts = getPosts;
exports.watchPosts = watchPosts;
