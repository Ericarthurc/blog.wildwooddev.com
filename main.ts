import koa, { Context, DefaultState, Next } from "koa";
import serve from "koa-static";
import views from "koa-views";
import dotenv from "dotenv";

import homeRouter from "./routes/home.route";
import blogRouter from "./routes/blog.route";
import seriesRouter from "./routes/series.route";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = new koa({proxy: true});

// ejs template engine
const render = views("./views", {
  extension: "ejs",
});
app.use(render);

// serve static files
app.use(serve("./public"));

app.use(homeRouter.allowedMethods()).use(homeRouter.routes());
app.use(blogRouter.allowedMethods()).use(blogRouter.routes());
app.use(seriesRouter.allowedMethods()).use(seriesRouter.routes());

// Redirect all
// app.use(async (ctx: Context) => {
//   ctx.redirect("/blog");
// });

app.use(async (ctx: Context) => {
  await ctx.render("404", { url: ctx.url, ip: ctx.ip });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
