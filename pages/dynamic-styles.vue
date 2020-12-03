<template>
  <div class="p-1 m-2 flex flex-col">
      <div class="p-1 m-2 w-40 h-40" :style="{ backgroundColor: selectedColor }"></div>
    <div>
      <button
        class="bg-purple-600 text-white text-2xl p-1 m-2 w-40"
        @click="updateColor('purple')"
      >
        Purple
      </button>
       <button
        class="bg-blue-500 text-white text-2xl p-1 m-2 w-40"
        @click="updateColor('blue')"
      >
        Blue
      </button>
       <button
        class="bg-green-500 text-white text-2xl p-1 m-2 w-40"
        @click="updateColor('green')"
      >
        Green
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedColor: 'green',
    }
  },
  methods: {
      updateColor(color) {
          this.selectedColor = color
      }
  }
}
</script>