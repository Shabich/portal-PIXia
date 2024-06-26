<template>
  <q-card
    class="my-card"
    :style="$q.screen.gt.sm ? 'width:20vw;' : 'width:62vw; margin-top:1.5vh'"
  >
    <!-- @click="handleAction" -->
    <img :src="imageLink" />

    <q-card-section>
      <div class="text-h6">{{ libelle }}</div>
      <div class="text-subtitle2">{{ description }}</div>
      <q-btn
        round
        icon="favorite"
        @click="emitClick()"
        :color="isFavorite ? 'pink' : 'primary'"
        
      />
      <q-btn round icon="create" @click="modify" />
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'CardComponent',
  emits: ['button-fav'],
  props: {
    menu:{
      type: String,
      required: true,
    },
    libelle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageLink: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean
    }
  },
  methods: {
    emitClick(){
      this.$emit('button-fav')},
  
    modify() {
      this.$emit('action');
    },
    
  },
});
</script>

<style scoped>
.my-card {
  transition: transform 0.3s;
  margin: 0.5vw;
}
img {
  height: 20vh;
  object-fit: cover;
}
.my-card:hover {
  transform: scale(1.05);
}
</style>
