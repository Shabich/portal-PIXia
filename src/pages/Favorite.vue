<template>
  <q-page>
    <div class="group-card" v-if="(appDataStore.cards.length > 0)">
      <NewCard />
      <CardComponent
        v-for="(card, index) in appDataStore.cards"
        :key="index"
        :imageLink="card.image_link"
        :libelle="card.libelle"
        :description="card.description"
        @action="handleCardAction(index)"
        :menu="card.menu"
        :isFavorite="card.isFavorite"
        @button-fav="toggleFavorite(card.menu, card.isFavorite, index)"
        
      />
    </div>
    <div v-else class="q-pt-xl text-grey row justify-center items-center text-h4">Aucun résultat</div>
  </q-page>
  
</template>

<script>
import CardComponent from 'src/components/CardComponent.vue';
import NewCard from 'src/components/NewCard.vue';
import { useCounterStore } from 'src/stores/example-store';
import { defineComponent} from 'vue';
import { api } from 'src/boot/axios';
export default defineComponent({
  name: 'HomePage',
  components: {
    CardComponent,
  },
  data() {
    return {
      appDataStore: useCounterStore(),
    };
  },
  mounted() {
    this.appDataStore.getFavorite();
  },

  methods: {
    async toggleFavorite(menu, isFavorite, index) {
        try {
          if (isFavorite) {
            await api.delete(`/favorites/${menu}`);
          }else{
            console.log(menu)
            await api.post('/favorites', {menu: menu}
            )
          }
          this.appDataStore.cards[index].isFavorite = !this.appDataStore.cards[index].isFavorite
          //à faire passer dans example-store.ts
          this.appDataStore.getFavorite();
          
        } catch (error){
          console.error('Une erreur est parvenue sur le toggleFavorite', error)
        }
      }
    
  },
  components: { CardComponent, NewCard },

});
</script>

<style>
.group-card {
  display: flex;
  flex-wrap: wrap;

  padding-top: 20px;

  width: 63vw;
  margin-left: 18.5vw;
}
</style>
