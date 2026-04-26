let express = require("express");

let categoryRouter = express.Router();

const category = [
    {
        id: 1,
        category: "Fashion",
    },
    {
        id: 2,
        category: "Electronics",
    },
    {
        id: 3,
        category: "Essentials",
    },
    {
        id: 4,
        category: "Footwear",
    },
];

categoryRouter.route("/").get((req, res) => {
    res.send(category);
});

categoryRouter.route("/details").get((req, res) => {
    res.send("Category Details");
});

module.exports = categoryRouter;
