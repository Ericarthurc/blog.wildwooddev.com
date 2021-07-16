import { Context, Next } from "koa";

import { getBlogIndexArray, parseMarkdown } from "../utils/parsers";

/**
 * @desc Get blog post array for index page
 * @format /blog
 * @method GET
 * @access Public
 */
export const getBlogIndex = async (ctx: Context, next: Next) => {
  try {
    const blogsArray = await getBlogIndexArray();
    await ctx.render("blogindex", { blogs: blogsArray });
  } catch (error) {
    await next();
  }
};

/**
 * @desc Get blog by id
 * @format /blog/:id
 * @method GET
 * @access Public
 */
export const getBlog = async (ctx: Context, next: Next) => {
  const blogId = ctx.params.id;

  try {
    const parsedObj = await parseMarkdown(blogId);
    await ctx.render("blogpost", { blog: parsedObj });
  } catch (error) {
    await next();
  }
};
