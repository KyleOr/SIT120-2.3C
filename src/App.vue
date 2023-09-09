<template>
  <div class="navigation-menu">
    <div class="nav-links-container" v-for="(row, index) in linkRows" :key="index">
      <router-link
        v-for="(link, linkIndex) in row"
        :to="link.to"
        :key="linkIndex"
        class="nav-link"
      >
        {{ link.text }}
      </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { to: '/templatesyntax', text: 'Template Syntax' },
        { to: '/conceptmethods', text: 'Concept Methods' },
        { to: '/reactivityfundamentals', text: 'Reactivity Fundamentals' },
        { to: '/computedproperties', text: 'Computed Properties' },
        { to: '/classandstylebindings', text: 'Class and Style Bindings' },
        { to: '/listrendering', text: 'List Rendering' },
        { to: '/eventhandling', text: 'Event Handling' },
        { to: '/forminputbindings', text: 'Form Input Bindings' },
        { to: '/conceptwatchers', text: 'Concept Watchers' },
        { to: '/conceptcomponents', text: 'Concept Components' },
        { to: '/conceptchildcomponents', text: 'Concept Child Components' },
      ],
    };
  },
  computed: {
    linkRows() {
      const rows = [];
      for (let i = 0; i < this.links.length; i += 3) {
        rows.push(this.links.slice(i, i + 3));
      }
      return rows;
    },
  },
};
</script>

<style>
.navigation-menu {
  background-color: #333; 
  color: #fff; 
  padding: 10px; 
}

.nav-links-container {
  display: flex;
  justify-content: center;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #555; 
}
</style>
