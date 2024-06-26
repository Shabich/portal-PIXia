import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
export interface Icards { menu: string, libelle: string, image_link: string, isFavorite: boolean, description: string, rionumber: number | null | undefined }

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    cards: ref<Array<Icards>>([])
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    async getApps() {
      const { data } = await api.get('/');
      this.cards = data;
    },
    async getSearch(text: string) {
      if (text.trim().length > 0) {
        const  resultat = await api.post('/search', { q: text });
        console.log(resultat)
        this.cards = resultat.data;
     
      } else {
        await this.getApps()
      }
    },
    async getFavorite() {
      const { data } = await api.get<Array<Icards>>('/');
      this.cards = data.filter(item => item.isFavorite);
    },
  }
});
