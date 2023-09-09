<template>
    <div>
      <h1>6. List Rendering</h1>
  
      <!-- Subtask 6a: v-for with an Object -->
      <div v-for="(value, key) in objectData" :key="key">
        {{ key }}: {{ value }}
      </div>
  
      <!-- Subtask 6b: v-for with a Range -->
      <div v-for="num in range" :key="num">
        Item {{ num }}
      </div>
  
      <!-- Subtask 6c: v-for on <template> -->
      <template v-for="item in items" :key="item.id">
        <div>{{ item.text }}</div>
        <div>More details: {{ item.details }}</div>
      </template>
  
      <!-- Subtask 6d: v-for with a computed property -->
      <div v-for="item in filteredItems" :key="item.id">
        {{ item.text }}
      </div>
  
      <!-- Subtask 6e: v-for with a Component -->
      <div>
        <custom-item
          v-for="item in customItems"
          :key="item.id"
          :item="item"
        ></custom-item>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        objectData: {
          key1: 'Value 1',
          key2: 'Value 2',
          key3: 'Value 3',
        },
        range: 5,
        items: [
          { id: 1, text: 'Item 1', details: 'Details 1' },
          { id: 2, text: 'Item 2', details: 'Details 2' },
          { id: 3, text: 'Item 3', details: 'Details 3' },
        ],
        conditionalItems: [
          { id: 1, text: 'Item A', display: true },
          { id: 2, text: 'Item B', display: false },
          { id: 3, text: 'Item C', display: true },
        ],
        customItems: [
          { id: 1, text: 'Custom Item 1' },
          { id: 2, text: 'Custom Item 2' },
          { id: 3, text: 'Custom Item 3' },
        ],
      };
    },
        computed: {
        filteredItems() {
      // Use a computed property to filter conditionalItems
      return this.conditionalItems.filter(item => item.display);
      }
    }
}
  </script>
  