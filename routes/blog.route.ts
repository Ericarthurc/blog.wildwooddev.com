import { Context, DefaultState, Next } from "koa";
import Router from "@koa/router";

import { getBlogIndexArray, parseMarkdown } from "../utils/parsers";

const blogRouter = new Router<DefaultState, Context>({ prefix: "/blog" });
blogRouter.get("/", async (ctx: Context, next: Next) => {
  try {
    const blogsArray = await getBlogIndexArray();
    await ctx.render("blogindex", { blogs: blogsArray });
  } catch (error) {
    await next();
  }
});
blogRouter.get("/:id", async (ctx: Context, next: Next) => {
  const blogId = ctx.params.id;

  try {
    const parsedObj = await parseMarkdown(blogId);
    await ctx.render("blogpost", {
      body: parsedObj.body,
      title: parsedObj.header.title,
      date: parsedObj.header.date,
      tags: parsedObj.header.tags,
    });
  } catch (error) {
    await next();
  }
});

export default blogRouter;
