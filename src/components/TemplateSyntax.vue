<template>
    <div>
        <h1>1. Template Syntax</h1>
            <!-- 1a: Text Interpolation -->
            <p>{{ message }}</p>
            <!-- renders the message variable inside the template-->
        
            <!-- 1b: Raw HTML [v-html] -->
            <div v-html="rawHTML"></div>
            <!-- renders HTML stored in the rawHTML var with v-html directive -->

            <!-- 1c: Attribute Bindings [v-bind:id] -->
            <input :id="inputId" type="text" />
            <!-- binds the id  of the input element to inputID through ':id' -->
        
            <!-- 1d: JavaScript expressions inside syntax i.e.{{ }} -->
            <p>{{ 'here is a ' + adjective + ' sentence.' }}</p>
            <!-- combines string and variable for dynamic message -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'yo',
        rawHTML: '<em>Rendered as HTML</em>',
        inputId: 'unique-id',
        adjective: 'dynamic',
      };
    },
  };
  </script>
  