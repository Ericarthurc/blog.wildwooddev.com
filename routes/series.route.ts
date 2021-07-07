import { Context, DefaultState, Next } from "koa";
import Router from "@koa/router";

const seriesRouter = new Router<DefaultState, Context>({ prefix: "/series" });
seriesRouter.get("/", async (ctx: Context, next: Next) => {
  try {
    await ctx.render("series");
  } catch (error) {
    await next();
  }
});

export default seriesRouter;
