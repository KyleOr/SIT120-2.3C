<template>
    <div>
      <h1>Concept: Reactivity Fundamentals</h1>
  
      <!-- Displaying reactive data -->
      <p>Count: {{ count }}</p>
  
      <!-- Increment and Decrement buttons -->
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define a reactive ref property
  const count = ref(0);
  
  // Define a method to increment the count
  const increment = () => {
    count.value += 1;
  };
  
  // Define a method to decrement the count
  const decrement = () => {
    count.value -= 1;
  };
  </script>
  