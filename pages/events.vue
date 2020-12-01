<template>
  <div class="flex flex-col">
    <h1>{{ color }}</h1>
    <input
      v-on:keydown.enter="enterColor"
      placeholder="enter favorite color"
      type="text"
      class="border border-gray-50 m-2 w-80"
    />

    <button
      v-on:click="showAlert"
      class="bg-blue-600 text-white text-2xl p-1 m-2 w-40"
    >
      Show Alert
    </button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            color: '',

        }
    },
    methods: {
        enterColor(event) {
            this.color = event.target.value;
        },
        showAlert() {
            alert(this.color)
        }
    }
}

</script>