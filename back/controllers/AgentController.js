import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getAgents = (req, res) => {
  prisma.agent
    .findMany()
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.json({ error: error.message })
    })
}

const getAgent = (req, res) => {
  let id = Number(req.params.id)

  prisma.agent
    .findUnique({
      where: {
        id: id,
      },
    })
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.json({ error: error.message })
    })
}

const createAgent = (req, res) => {
  let agent = req.body

  prisma.agent
    .create({
      data: agent,
    })
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.json({ error: error.message })
    })
}

const updateAgent = (req, res) => {
  let id = Number(req.params.id)
  let agent = req.body

  prisma.agent
    .update({
      where: {
        id: id,
      },
      data: agent,
    })
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.json({ error: error.message })
    })
}

const deleteAgent = (req, res) => {
  let id = Number(req.params.id)

  prisma.agent
    .delete({
      where: {
        id: id,
      },
    })
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.json({ error: error.message })
    })
}

export { createAgent, deleteAgent, getAgent, getAgents, updateAgent }
