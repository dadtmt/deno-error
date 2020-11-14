import { Application, Router } from "./deps.ts";

const app = new Application();

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "hello deno";
});

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen(({ port: 8080 }));
