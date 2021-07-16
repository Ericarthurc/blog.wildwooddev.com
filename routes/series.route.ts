import { Context, DefaultState, Next } from "koa";
import Router from "@koa/router";

import { getSeriesIndex, getSeries } from "../controllers/series.controller";

const seriesRouter = new Router<DefaultState, Context>({ prefix: "/series" });
seriesRouter.get("/", getSeriesIndex);
seriesRouter.get("/:series", getSeries);

export default seriesRouter;
