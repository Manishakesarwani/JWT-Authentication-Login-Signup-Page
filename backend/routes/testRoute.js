const express = require("express");
const RequireAuth = require("../middleware/RequireAuth");
const testRouter = express.Router();


testRouter.use(RequireAuth);

testRouter.get("/", async (req, res) => {
    return res.status(200).json({msg: "Test Page"});
});

module.exports = testRouter;