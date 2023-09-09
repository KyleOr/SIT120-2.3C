<template>
    <div>
      <h1>7. Event Handling</h1>
  
      <!-- 7a: Inline Handlers -->
      <button @click="inlineClick">Click me (Inline Handler)</button>
  
      <!-- 7b: Method Handlers -->
      <button @click="methodClick">Click me (Method Handler)</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      // 7a: Inline Handlers
      inlineClick() {
        alert('Button clicked (Inline Handler)');
      },
  
      // 7b: Method Handlers
      methodClick() {
        this.handleButtonClick();
      },
  
      handleButtonClick() {
        alert('Button clicked (Method Handler)');
      },
    },
  };
  </script>
  