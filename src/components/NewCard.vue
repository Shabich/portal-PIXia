<template>
  <div class="top">
    <q-btn
      round
      outlined
      icon="add"
      class="my-new-card"
      @click="create, handleAction"
      style="display: flex; margin: auto"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'NewCard',

  methods: {
    handleAction() {
      this.$emit('action');
    },
  },
});
</script>

<style scoped>
.top {
  width: 62vw;
  height: 41px;
  margin-bottom: 10px;
}
.my-new-card {
  transition: transform 0.3s;
  margin: 0.5vw;
}

.my-new-card:hover {
  transform: scale(0.98);
}
</style>
