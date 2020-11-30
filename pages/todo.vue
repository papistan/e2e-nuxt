<template>
  <div class="flex flex-col">
    <label for="goal">Goal</label>
      <input
        class="border border-gray-50 m-2"
        type="text"
        placeholder="Add Goal"
        v-model="enteredValue"
      />
    <button
      class="bg-purple-600 text-white text-2xl p-1 w-40"
      v-on:click="addGoal"
    >
      Add Goal
    </button>
    <div>
      <ul>
        <li v-for="goal in goals" v-bind:key="goal">{{ goal }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goals: [],
      enteredValue: '',
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue)
      this.enteredValue = ''
    },
  },
}
</script>