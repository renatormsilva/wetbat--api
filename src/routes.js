const express = require("express");
const { PrismaClient } = require("@prisma/client");
const routes = express.Router();

const prisma = new PrismaClient();

routes.post("/quotes", async (request, response) => {
  const {
    name,
    destination,
    from,
    departDate,
    returnDate,
    people,
    transportation,
  } = request.body;
  const quote = await prisma.quote.create({
    data: {
      name,
      destination,
      from,
      departDate,
      returnDate,
      people,
      transportation,
    },
  });
  return response.status(201).json(quote);
});

routes.get("/quotes", async (request, response) => {
  const quotes = await prisma.quote.findMany();
  return response.status(200).json(quotes);
});

routes.put("/quotes", async (request, response) => {
  const {
    name,
    id,
    destination,
    from,
    departDate,
    returnDate,
    people,
    transportation,
  } = request.body;

  if (!id) {
    return response.status(400).json("Id is mandatory");
  }

  const quoteAlreadyExist = await prisma.quote.findUnique({ where: { id } });

  if (!quoteAlreadyExist) {
    return response.status(404).json("Quote not exist");
  }
  const quote = await prisma.quote.update({
    where: {
      id,
    },
    data: {
      name,
      destination,
      from,
      departDate,
      returnDate,
      people,
      transportation,
    },
  });
  return response.status(200).json(quote);
});

routes.delete("/quotes/:id", async (request, response) => {
  const { id } = request.params;

  const intId = parseInt(id);
  if (!intId) {
    return response.status(400).json("Id is mandatory");
  }

  const quoteAlreadyExist = await prisma.quote.findUnique({
    where: { id: intId },
  });

  if (!quoteAlreadyExist) {
    return response.status(404).json("Quote not exist");
  }

  await prisma.quote.delete({ where: { id: intId } });
  return response.status(200).send();
});

module.exports = routes;
