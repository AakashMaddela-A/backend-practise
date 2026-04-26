let express = require("express");
let app = express();
let dotenv = require("dotenv");
dotenv.config();
let port = process.env.PORT || 6700;

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

app.get("/category", (req, res) => {
    res.send(category);
});

app.get("/details", (req, res) => {
    res.send("Category Details");
});

app.get("/products", (req, res) => {
    res.send(products);
});

app.get("/details", (req, res) => {
    res.send("Product Dtails");
});

app.listen(port, (err) => {
    if (err) throw err;
    else {
        console.log(`Server is running on ${port}`);
    }
});
