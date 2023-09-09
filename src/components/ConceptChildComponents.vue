<template>
    <div>
      <!-- 10a: Props -->
      <p>Message from Parent: {{ message }}</p>
  
      <!-- 10b: Events [$emit] -->
      <button @click="emitEvent">Emit Event to Parent</button>
  
      <!-- 10c: Slots -->
      <div class="child-slot">
        <!-- Slot for log messages -->
        <slot name="log-messages"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      // 10a: Props
      message: String,
    },
    methods: {
      // 10b: Events [$emit]
      emitEvent() {
        this.$emit('child-event', 'Hello from Child!');
      },
    },
  };
  </script>
  
  <style scoped>
  .child-slot {
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 10px;
  }
  </style>
  