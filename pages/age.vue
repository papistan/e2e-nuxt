<template>
  <section class="p-3">
    <h1>My name is {{ name }}</h1>
    <p>I'm {{ age }} years old</p>
    <p id="age-text">In 5 years I'll be {{ calculatedage }}</p>
    <p>Here's a random number: {{ createrandomnum }}</p>
    <img :src="image" :alt="altText" />
    <input
      class="border border-gray-50 m-2 w-80"
      type="text"
      placeholder="Add Name"
      v-model="name"
    />
    <input
      class="border border-gray-50 m-2 w-80"
      type="text"
      placeholder="Add Age"
      v-model="age"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: undefined,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBPjQNmGX1dc9znLR1ImhKbGB9xMeGDSGoQ&usqp=CAU',
      altText: 'old guy',
    }
  },
  computed: {
    calculatedage() {
      return parseInt(this.age) + 5
    },
    createrandomnum() {
      return Math.random()
    },
  },
  methods: {},
}
</script>