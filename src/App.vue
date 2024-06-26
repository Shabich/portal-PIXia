<template>
  <router-view />
</template>

<script setup lang="ts">


defineOptions({
  name: 'App',
  beforeMount() {{
    const value:boolean|null = this.$q.localStorage.getItem('isDark');
    if (value) {
      this.$q.dark.set(value);
    }else {
      this.$q.localStorage.set('isDark', this.$q.dark.isActive);
    }}}});
</script>
