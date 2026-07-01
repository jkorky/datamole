const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
    }
    next();
});

server.patch("/items/:id/done", (req, res) => {
    const db = router.db;
    const id = Number(req.params.id);
    const item = db.get("items").find({ id }).value();
    if (!item) {
        return res.status(404).json({ message: "Item not found" });
    }
    const updatedItem = {
        ...item,
        isDone: true,
        finishedAt: Date.now(),
    };
    db.get("items").find({ id }).assign(updatedItem).write();
    res.json(updatedItem);
});

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
