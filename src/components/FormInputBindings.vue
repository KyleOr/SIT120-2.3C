<template>
    <div>
      <h1>8. Form Input Bindings</h1>
  
      <!-- 8a: v-model with various form inputs -->
      <label for="text-input">Text Input:</label>
      <input type="text" id="text-input" v-model="textInput" />
  
      <label for="checkbox">Checkbox:</label>
      <input type="checkbox" id="checkbox" v-model="checkboxValue" />
  
      <label for="radio">Radio Buttons:</label>
      <div>
        <input type="radio" id="radio1" value="Option 1" v-model="radioValue" />
        <label for="radio1">Option 1</label>
      </div>
      <div>
        <input type="radio" id="radio2" value="Option 2" v-model="radioValue" />
        <label for="radio2">Option 2</label>
      </div>
  
      <label for="select">Select:</label>
      <select id="select" v-model="selectedOption">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
      </select>
  
      <label for="textarea">Textarea:</label>
      <textarea id="textarea" v-model="textareaValue"></textarea>
  
      <!-- 8b: v-model modifiers -->
      <label for="lazy-input">Lazy Modifier:</label>
      <input type="text" id="lazy-input" v-model.lazy="lazyInput" />
  
      <label for="number-input">Number Modifier:</label>
      <input type="text" id="number-input" v-model.number="numberInput" />
  
      <label for="trim-input">Trim Modifier:</label>
      <input type="text" id="trim-input" v-model.trim="trimInput" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // 8a: v-model with various form inputs
        textInput: '',
        checkboxValue: false,
        radioValue: '',
        selectedOption: 'Option 1',
        textareaValue: '',
  
        // 8b: v-model modifiers
        lazyInput: '',
        numberInput: 0,
        trimInput: '',
      };
    },
  };
  </script>
  