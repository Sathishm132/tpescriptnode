"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({
        todos: todos
    });
});
router.post("/post", (req, res, next) => {
    const newtodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
});
exports.default = router;
