import express from "express"
import {
  createAgent,
  deleteAgent,
  getAgent,
  getAgents,
  updateAgent,
} from "../controllers/AgentController.js"

const router = express.Router()

router.get("/", getAgents)
router.get("/:id", getAgent)
router.post("/", createAgent)
router.put("/:id", updateAgent)
router.delete("/:id", deleteAgent)

export default router
