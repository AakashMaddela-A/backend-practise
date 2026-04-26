let express = require("express");
let productRouter = express.Router();

const products = [
    {
        id: 1,
        product_name: "Girls top",
        category: "Fashion",
        category_id: 1,
        Price: 1000,
        Size: "Small",
        Color: "Marron",
        Brand: "Gucci",
    },
    {
        id: 2,
        product_name: "Girls top",
        category: "Fashion",
        category_id: 1,
        Price: 2000,
        Size: "Small",
        Color: "Marron",
        Brand: "Gucci",
    },
    {
        id: 3,
        product_name: "Girls top",
        category: "Fashion",
        category_id: 1,
        Price: 3000,
        Size: "Small",
        Color: "Marron",
        Brand: "Gucci",
    },
    {
        id: 4,
        product_name: "Girls top",
        category: "Fashion",
        category_id: 1,
        Price: 4000,
        Size: "Small",
        Color: "Marron",
        Brand: "Gucci",
    },
];

productRouter.route("/").get((req, res) => {
    res.send(products);
});

productRouter.route("/details").get((req, res) => {
    res.send("Product Details");
});

module.exports = productRouter;
