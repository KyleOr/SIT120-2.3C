<template>
    <div>
      <h1>9. Watchers</h1>
  
      <p>Current Value: {{ watchedValue }}</p>
  
      <input type="text" v-model="inputValue" />
  
      <button @click="updateWatchedValue">Update Watched Value</button>
  
      <div>
        <h2>Console Log Messages:</h2>
        <ul>
          <li v-for="(log, index) in logMessages" :key="index">{{ log }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputValue: '',
        watchedValue: '',
        logMessages: [], // Array to store log messages
      };
    },
    watch: {
      // Watch the 'inputValue' data property for changes
      inputValue(newValue, oldValue) {
        // This function will be called when 'inputValue' changes
        const logMessage = `Input Value Changed from '${oldValue}' to '${newValue}'`;
  
        // Update the 'watchedValue' based on the new 'inputValue'
        this.watchedValue = newValue;
  
        // Push the log message to the array
        this.logMessages.push(logMessage);
      },
    },
    methods: {
      updateWatchedValue() {
        // Manually update 'watchedValue' to demonstrate the watcher
        this.watchedValue = this.inputValue;
      },
    },
  };
  </script>
  