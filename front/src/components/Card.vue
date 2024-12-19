<script setup>
const props = defineProps({
  agent: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white shadow-lg rounded-lg p-4">
    <h2 class="text-xl font-semibold">{{ props.agent.name }}</h2>
    <p class="text-gray-500">{{ props.agent.role }}</p>
  </div>
</template>
