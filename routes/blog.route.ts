import { Context, DefaultState } from "koa";
import Router from "@koa/router";

import { getBlogIndex, getBlog } from "../controllers/blog.controller";

const blogRouter = new Router<DefaultState, Context>({ prefix: "/blog" });
blogRouter.get("/", getBlogIndex);
blogRouter.get("/:id", getBlog);

export default blogRouter;
