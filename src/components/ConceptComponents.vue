<template>
    <div>
      <h1>10. Components</h1>
  
      <!-- 10a: Props -->
      <child-component :message="parentMessage"></child-component>
  
      <!-- 10b: Events [$emit] -->
      <child-component @child-event="handleChildEvent"></child-component>
  
      <!-- 10c: Slots -->
      <child-component>
        <template #log-messages>
            <ul>
            <li v-for="(log, index) in logMessages" :key="index">{{ log }}</li>
            </ul>
        </template>
        </child-component>
    </div>
  </template>
  
  <script>
  import ChildComponent from '@/components/ConceptChildComponents.vue';
  
  export default {
    components: {
      ChildComponent,
    },
    data() {
      return {
        parentMessage: 'Hello from Parent!',
        logMessages: [], // Array to store log messages
      };
    },
    methods: {
      handleChildEvent(childEventData) {
        console.log('Received event from child:', childEventData);
        this.logMessages.push(childEventData);
      },
    },
  };
  </script>
  