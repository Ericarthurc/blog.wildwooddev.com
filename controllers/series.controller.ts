import { Context, Next } from "koa";

import { getSeriesIndexArray, getSeriesPosts } from "../utils/parsers";

/**
 * @desc Get series array for index page
 * @format /series
 * @method GET
 * @access Public
 */
export const getSeriesIndex = async (ctx: Context, next: Next) => {
  try {
    const seriesArray = await getSeriesIndexArray();
    await ctx.render("seriesindex", { seriesArray });
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
    const blogLinks = await getSeriesPosts(series);
    await ctx.render("series", { series, blogLinks });
  } catch (error) {
    await next();
  }
};
