<template>
  <section class="p-3 flex flex-col">
    <label class="m-2" for="goal">Goal</label>
    <input
      class="border border-gray-50 m-2 w-80"
      type="text"
      placeholder="Add Goal"
      v-model="enteredGoal"
    />
    <input
      class="border border-gray-50 m-2 w-80"
      type="text"
      placeholder="Estimated Time"
      v-model="enteredValue"
    />
    <input
      class="border border-gray-50 m-2 w-80"
      type="text"
      placeholder="Due Date"
      v-model="dueDate"
    />
    <button
      class="bg-purple-600 text-white text-2xl p-1 m-2 w-40"
      @click="addGoal"
    >
      Add Goal
    </button>
    <div class="m-5">
      <h4 v-show="goals.length > 0">CURRENT GOALS</h4>
      <p v-if="goals.length === 0">Add some goals above</p>
      <!-- <ul v-else v-for="(goal, index) in goals" class="list-disc m-2">
        <li :key="goal" @click="removeGoal(index)">
          {{ goal }}
        </li>
        <Goal :goal="goal" />
      </ul> -->
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
      enteredGoal: '',
      enteredTime: '',
      dueDate: '',
      home: '/',
    }
  },
  methods: {
    addGoal() {
      this.goals.push({
        title: this.enteredGoal,
        time: this.enteredTime,
        date: this.dueDate,
      })
      this.enteredValue = ''
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    },
  },
}
</script>