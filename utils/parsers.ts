import marked from "marked";
import { promises as fs } from "fs";
import { load } from "js-yaml";

/**
 * @desc v3 metadata parser
 * @returns parsed and sorted by date array of metadata
 */
export const getBlogIndexArray = async () => {
  const blogsArray = [];
  const data = await fs.readdir("./blog/");
  for (const file of data) {
    const fileData = await fs.readFile(`./blog/${file}`);
    const blog = {
      fileName: file.substr(0, file.indexOf(".markdown")),
      ...parseMD(fileData.toString()),
    };
    blog.date = new Date(blog.date);
    blogsArray.push(blog);
  }

  return blogsArray.sort((a, b) => b.date - a.date);
};

/**
 * @desc v1 series parser
 * @returns parsed and sorted series by alphabetical order
 */
export const getSeriesIndexArray = async () => {
  const seriesArray = [];
  const data = await fs.readdir("./blog/");
  for (const file of data) {
    const fileData = await fs.readFile(`./blog/${file}`);
    const meta = parseMD(fileData.toString());
    if (meta.series === undefined) {
      continue;
    }
    seriesArray.push(meta.series);
  }

  return seriesArray.sort((a, b) => a.localeCompare(b));
};

// @ts-ignore
const findMetadataIndices = (mem, item, i) => {
  if (/^---/.test(item)) {
    mem.push(i);
  }
  return mem;
};

// @ts-ignore
const parseMetadata = ({ lines, metadataIndices }) => {
  if (metadataIndices.length > 0) {
    let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
    return load(metadata.join("\n"));
  }
  return {};
};

// @ts-ignore
const parseMD = (contents): any => {
  const lines = contents.split("\n");
  const metadataIndices = lines.reduce(findMetadataIndices, []);
  const metadata = parseMetadata({ lines, metadataIndices });
  return metadata;
};

/**
 * @desc v1 markdown parser
 * @param filename takes markdown filename
 * @returns parsed object
 */
export const parseMarkdown = async (fileName: string) => {
  const data = await fs.readFile(`./blog/${fileName}.markdown`);
  const parsed = marked(data.toString());
  const body = parsed.substr(parsed.indexOf("<h1"));

  const headers = parsed
    .substr(0, parsed.indexOf("<h1"))
    .replace(/(<([^>]+)>)/gi, "")
    .split("\n")
    .filter((x) => x != "")
    .filter((x) => x != "tags:")
    .map((x) => x.split(": ").pop());

  const head = headers.slice(0, 2);
  const tags = headers.slice(2);

  return { body, header: { title: head[0], date: head[1], tags } };
};
