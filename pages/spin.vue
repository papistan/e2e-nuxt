<template>
  <section>
      <!-- v-html allows referenced code to compile to hmtl -->
    <span v-html="spinResult()"></span>
    <button
      v-on:click="spin"
      class="bg-blue-600 text-white text-2xl p-1 m-2 w-40"
    >
      YES or No
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      yes: '👍',
      no: '👎',
      status: 1,
    }
  },
  methods: {
    spinResult() {
      if (this.status > 0.5) {
        return `<h1 class="p-1 m-2 w-40 text-5xl"> ${this.yes}</h1>`
      } else {
        return `<h1 class="p-1 m-2 w-40 text-5xl"> ${this.no}</h1>`
      }
    },
    spin() {
      this.status = Math.random()
    },
  },
}
</script>