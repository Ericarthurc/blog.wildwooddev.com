import { Context, Next } from "koa";

import { getSeriesIndexArray } from "../utils/parsers";

/**
 * @desc Get series array for index page
 * @format /series
 * @method GET
 * @access Public
 */
export const getSeriesIndex = async (ctx: Context, next: Next) => {
  try {
    const seriesArray = await getSeriesIndexArray();
    console.log(seriesArray);

    await ctx.render("seriesindex", { seriesArray });
  } catch (error) {
    console.log(error);

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

  // this route will always be hit even if series is not an actual series
  // needs to flow to catch { next() } if the series isn't found
  // so the filter method next will need to throw an error if the series isn't found/empty

  try {
    await ctx.render("series", { series });
  } catch (error) {
    console.log(error);

    await next();
  }
};
