<template>
  <li :key="goal.title" @click="removeGoal(goal.index)">
    {{ goal.title }}
  </li>
</template>

<script>
export default {
  props: ['goal'],
}
</script>