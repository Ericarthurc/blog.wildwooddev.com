import { Context, DefaultState, Next } from "koa";
import Router from "@koa/router";

const homeRouter = new Router<DefaultState, Context>({ prefix: "/" });
homeRouter.get("/", async (ctx: Context, next: Next) => {
  try {
    await ctx.render("home");
  } catch (error) {
    await next();
  }
});

export default homeRouter;
