const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/products', (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred');
            return;
        }
        const products = JSON.parse(data);
        res.status(200).json(products);
    });
});

router.get('/products/:id', (req, res) => {
    const productID = req.params.id;
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred');
            return;
        }
        const products = JSON.parse(data);
        const product = products.filter((product) => {
            return product.id == productID
        });
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).send('Product not found');
        }
    });
});

router.post('/products', (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred');
            return;
        }
        const products = JSON.parse(data);
        console.log(req.body)
        const newProduct = {
            id: Date.now(),
            name: req.body.name
        };
        console.log(newProduct);
        products.push(newProduct);
        fs.writeFile('products.json', JSON.stringify(products), (err) => {
            if (err) {
                res.status(500).send('An error occurred');
                return;
            }
            res.status(201).json(products);
        });
    });
});

router.put('/products/:id', (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred');
            return;
        }
        const products = JSON.parse(data);
        const productID = req.params.id;
        const newName = req.body.name;
        const product = products.find((product) => {
            return product.id == productID
        });
        if (product) {
            product.name = newName;
            fs.writeFile('products.json', JSON.stringify(products), (err) => {
                if (err) {
                    res.status(500).send('An error occurred');
                    return;
                }
                res.status(200).json(products);
            });
        } else {
            res.status(404).send('Product not found');
        }
    });
});

router.delete('/products/:id', (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred');
            return;
        }
        const products = JSON.parse(data);
        const productID = req.params.id;
        const new_products = products.filter((product) => {
            return product.id != productID
        });
        if (new_products) {
            fs.writeFile('products.json', JSON.stringify(new_products), (err) => {
                if (err) {
                    res.status(500).send('An error occurred');
                    return;
                }
                res.status(200).json(new_products);
            });
        } else {
            res.status(404).send('Product not found');
        }
    });
});

module.exports = router;