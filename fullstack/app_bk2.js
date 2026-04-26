let express = require("express");
let app = express();
let dotenv = require("dotenv");
dotenv.config();
let port = process.env.PORT || 6700;
let categoryRouter = express.Router();
let productRouter = express.Router();

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

//default
app.get("/", (req, res) => {
    res.send("hi from server");
});

categoryRouter.route("/").get((req, res) => {
    res.send(category);
});

categoryRouter.route("/details").get((req, res) => {
    res.send("Category Details");
});

productRouter.route("/").get((req, res) => {
    res.send(products);
});

productRouter.route("/details").get((req, res) => {
    res.send("Product Details");
});

app.use("/category", categoryRouter);
app.use("/products", productRouter);

app.listen(port, (err) => {
    if (err) throw err;
    else {
        console.log(`Server is running on ${port}`);
    }
});
