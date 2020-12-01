<template>
  <section class="p-3">
    <h1>My name is {{ name }}</h1>
    <p>I'm {{ age }} years old</p>
    <p>In 5 years I'll be {{ calculateAge() }}</p>
    <p>Here's a random number: {{ createRandomNum() }}</p>
    <img v-bind:src="image" v-bind:alt="altText"/>
    <input class="border border-gray-50 m-2 w-80" type="text" placeholder="Add Name" v-model="name" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: 100,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBPjQNmGX1dc9znLR1ImhKbGB9xMeGDSGoQ&usqp=CAU",
      altText: "old guy"
    }
  },
  methods: {
    calculateAge() {
      return this.age + 5
    },
    createRandomNum() {
      return Math.random()
    },
  },
}
</script>