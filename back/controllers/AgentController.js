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
  res.send("Jett")
}

const createAgent = (req, res) => {
  res.send("Agent created")
}

const updateAgent = (req, res) => {
  res.send("Agent updated")
}

const deleteAgent = (req, res) => {
  res.send("Agent deleted")
}

export { createAgent, deleteAgent, getAgent, getAgents, updateAgent }
