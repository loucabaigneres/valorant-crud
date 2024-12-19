<script setup>
import { ref } from "vue"
import Card from "../components/Card.vue"

const agents = ref([])

const fetchAgents = async () => {
  const response = await fetch("http://localhost:3000/agents")
  agents.value = await response.json()
}

fetchAgents()
</script>

<template>
  <main>
    <h1>Home</h1>
    <div class="grid grid-cols-4 gap-4">
      <Card v-for="agent in agents" :key="agent.id" :agent="agent" />
    </div>
  </main>
</template>
