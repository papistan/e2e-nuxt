<template>
  <section class="p-3 flex flex-col">
    <label class="m-2" for="goal">Goal</label>
    <input
      class="border border-gray-50 m-2 w-80"
      type="text"
      placeholder="Add Goal"
      v-model="enteredValue"
    />
    <button
      class="bg-purple-600 text-white text-2xl p-1 m-2 w-40"
      v-on:click="addGoal"
    >
      Add Goal
    </button>
    <div class="m-5">
      <ul class="list-disc m-2">
        <li v-for="goal in goals" v-bind:key="goal">{{ goal }}</li>
      </ul>
    </div>
    <h3 class="m-5">
      Take me <a class="underline" v-bind:href="home">home</a>
    </h3>
  </section>
</template>

<script>
export default {
  data() {
    return {
      goals: [],
      enteredValue: '',
      home: '/',
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