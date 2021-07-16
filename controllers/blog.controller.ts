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
        // v3 of metadata parser
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

        // could use refactoring of object but function may change
        await ctx.render("blogpost", {
            body: parsedObj.body,
            title: parsedObj.header.title,
            date: parsedObj.header.date,
            tags: parsedObj.header.tags,
        });
    } catch (error) {
        await next();
    }
};