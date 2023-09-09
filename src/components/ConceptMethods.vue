<template>
    <div>
      <h1>2. Concept Methods</h1>
  
      <!-- Calling a method on a button click -->
      <button @click="sayHello">Click me to say hello</button>
  
      <!-- Displaying a message from a method -->
      <p>{{ greeting }}</p>
  
      <!-- Passing parameters to a method -->
      <button @click="greet('Good morning')">Say Good Morning</button>
      <button @click="greet('Good evening')">Say Good Evening</button>
  
      <!-- Using computed properties in a method -->
      <p>{{ reversedMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        greeting: '',
        message: 'yo im backward!',
      };
    },
    methods: {
      sayHello() {
        this.greeting = 'Hello there!';
      },
      greet(timeOfDay) {
        this.greeting = `${timeOfDay}`;
      },
    },
    computed: {
      reversedMessage() {
        return this.message.split('').reverse().join('');
      },
    },
  };
  </script>
  