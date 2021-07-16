import { Context, Next } from "koa";

import { getBlogIndexArray, parseMarkdown } from "../utils/parsers";

/**
 * @desc Get series array for index page
 * @format /series
 * @method GET
 * @access Public
 */
export const getSeriesIndex = async (ctx: Context, next: Next) => {
    try {
        await ctx.render("seriesindex");
    } catch (error) {
        await next();
    }
};

/**
 * @desc Get blgo posts for specific series
 * @format /series/:series
 * @method GET
 * @access Public
 */
export const getSeries = async (ctx: Context, next: Next) => {
    const series = ctx.params.series;

    try {
        // await ctx.render("");
    } catch (error) {
        await next();
    }
}