<template>
    <div>
      <h1>4. Computed Properties</h1>
  
      <!-- Input for the base value -->
      <label>Base Value: <input v-model="baseValue" type="number" /></label>
  
      <!-- Display the base value and the computed result -->
      <p>Base Value: {{ baseValue }}</p>
      <p>Computed Square: {{ computedSquare }}</p>
  
      <!-- Display the computed message -->
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        baseValue: 0,
      };
    },
    computed: {
      // Define a computed property to compute the square of the base value
      computedSquare() {
        return this.baseValue * this.baseValue;
      },
      // Define a computed property with a getter and setter
      message: {
        get() {
          return `The square of ${this.baseValue} is ${this.computedSquare}.`;
        },
        set(newValue) {
          // setter logic here cuz standards says to have this jic
          console.log('Setter called with:', newValue);
        },
      },
    },
  };
  </script>
  