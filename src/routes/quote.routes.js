const express = require("express");

const quoteController = require("../controllers/quote.controller");

const routes = express.Router();

routes.post("/quotes", quoteController.createQuote);

routes.get("/quotes", quoteController.listAllQuotes);

routes.put("/quotes", quoteController.updateQuoteById);

routes.delete("/quotes/:id", quoteController.deleteQuoteById);

module.exports = routes;
