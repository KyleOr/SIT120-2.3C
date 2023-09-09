<template>
    <div>
      <h1>5. Class and Style Bindings</h1>
  
      <!-- Toggle class and apply inline style -->
      <div
        :class="randomClass"
        :style="{ color: randomTextColor, fontSize: randomTextSize + 'px' }"
      >
        Dynamic Content
      </div>
  
      <!-- Buttons to randomize class and style -->
      <button @click="randomizeClass">Randomize Class</button>
      <button @click="randomizeStyle">Randomize Style</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        randomClass: '',
        randomTextColor: 'black',
        randomTextSize: 16,
      };
    },
    methods: {
      randomizeClass() {
        // Generate a random class name to select 1-5 
        const randomClassNumber = Math.floor(Math.random() * 5) + 1;
        this.randomClass = 'class' + randomClassNumber;
      },
      randomizeStyle() {
        // Generate random text color (not really random hahaha)
        const colors = ['black', 'red', 'green', 'blue'];
        this.randomTextColor = colors[Math.floor(Math.random() * colors.length)];
  
        // Generate random font size between 12 and 36
        this.randomTextSize = Math.floor(Math.random() * 25) + 12;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Define a CSS class 'active' for class binding */
  .class1 {
    background-color: yellow;
  }
  
  .class2 {
    background-color: lightblue;
  }
  
  .class3 {
    background-color: lightgreen;
  }
  
  .class4 {
    background-color: lightpink;
  }
  
  .class5 {
    background-color: lightcoral;
  }
  
  </style>
  