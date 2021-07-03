import koa, { Context, DefaultState, Next } from "koa";
import serve from "koa-static";
import views from "koa-views";
import dotenv from "dotenv";

import blogRouter from "./routes/blog.route";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = new koa();

// ejs template engine
const render = views("./views", {
  extension: "ejs",
});
app.use(render);

// serve static files
app.use(serve("./public"));

app.use(blogRouter.allowedMethods()).use(blogRouter.routes());

app.use(async (ctx: Context) => {
  await ctx.redirect("/blog");
});

app.use(async (ctx: Context) => {
  await ctx.render("404", { url: ctx.url, ip: ctx.ip });
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
