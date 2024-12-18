const getAgents = (req, res) => {
  res.json([
    "Brimstone",
    "Phoenix",
    "Sage",
    "Sova",
    "Viper",
    "Cypher",
    "Reyna",
    "Killjoy",
    "Breach",
    "Omen",
    "Jett",
    "Raze",
    "Skye",
    "Yoru",
    "Astra",
    "KAY/O",
    "Chamber",
    "Neon",
    "Fade",
    "Harbor",
    "Gekko",
    "Deadlock",
    "Iso",
    "Clove",
    "Vyse",
  ])
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
