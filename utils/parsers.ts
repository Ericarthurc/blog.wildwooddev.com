import marked from "marked";
import { promises as fs } from "fs";

// v2 Parser
export const getBlogIndexArray = async () => {
  interface IBlog {
    fileName: string;
    blogTitle: string;
    blogDate: any;
  }
  const blogsArray = [];
  const data = await fs.readdir("./blog/");
  for (const file of data) {
    const blog = <IBlog>{};
    blog.fileName = <string>file.substr(0, file.indexOf(".markdown"));
    const fileData = await fs.readFile(`./blog/${file}`);

    const meParsed = fileData.toString().substr(0, fileData.toString().indexOf("#")).replace(/---|  - |\r/g, "").split("\n").filter((x: any) => x != "").filter((x: any) => x != "tags:").map((x: any) => x.split(":").pop()?.trim());
    blog.blogTitle = <string>meParsed[0];
    blog.blogDate = new Date(<string>meParsed[1]);
    blogsArray.push(blog);
  }
  return blogsArray.sort((a, b) => b.blogDate - a.blogDate);
};


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
