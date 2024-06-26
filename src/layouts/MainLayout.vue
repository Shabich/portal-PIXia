<template>
  <q-layout view="lHh lpR fFf">
    <q-header class="bg-primary text-white">
      <div class="q-gutter-y-md column">
        <q-toolbar
          class="bg-primary text-white rounded-borders row justify-between"
        >
          <q-btn
            round
            dense
            flat
            icon="menu"
            class="q-mr-xs"
            @click="toggleLeftDrawer"
          />
          <q-input
            placeholder="rechercher"
            dark
            dense
            standout
            @keyup.enter="submitSearch"
            v-model="query"
            class="col-4"
          >
            <template v-slot:append>
              <q-icon v-if="query === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="query = ''"
              />
            </template>
          </q-input>
          <div class="q-pa-md q-gutter-sm navprofile">
            <q-btn icon="help" round color="primary" @click="layout = true" />

            <q-dialog v-model="layout">
              <q-layout view="Lhh lpR fff" container class="bg-white text-dark">
                <q-header class="bg-primary">
                  <q-toolbar>
                    <q-btn flat v-close-popup round dense icon="close" />
                  </q-toolbar>
                </q-header>

                <q-page-container><HelpComponent></HelpComponent> </q-page-container>
              </q-layout>
            </q-dialog>
            <q-btn round icon="logout" />
          </div>
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      elevated
      style="height: 10px"
    >
      <q-list padding class="text-primary">
        <q-item
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
          to="/"
        >
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section>Dashboard</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'favorite'"
          @click="link = 'favorite'"
          to="/Favorite"
          active-class="my-menu-link"
          v-model="query"
        >
          <q-item-section avatar>
            <q-icon name="favorite" />
          </q-item-section>

          <q-item-section>My Favorites</q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item
          clickable
          v-ripple
          :active="link === 'settings'"
          @click="link = 'settings'"
          to="/Settings"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section>Settings</q-item-section>
        </q-item>

      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useCounterStore } from 'src/stores/example-store';
import { defineComponent, ref } from 'vue';
import HelpComponent from 'src/components/HelpComponent.vue'
export default defineComponent({
    name: 'MainLayout',
    data() {
        const leftDrawerOpen = ref(false);
        return {
            layout: ref(false),
            contextStore: useCounterStore(),
            query: ref(''),
            leftDrawerOpen,
            link: ref('inbox'),
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
        };
    },
    methods: {
        async submitSearch() {
            this.contextStore.getSearch(this.query);
        },
        async getFavorite() {
            this.contextStore.getSearch(this.query);
        },
    },
    components: { HelpComponent }
});
</script>

<style>
.navprofile {
  z-index: 1;
}
.btn-drawer {
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  display: flex;
  justify-content: none;
}

.q-btn-dropdown__arrow {
  right: 0px;
}

.search-bar {
  position: absolute;

  padding-left: 18vw;
}
.move-right {
  transform: translateX(300px);
  transition: 0.1s ease-in;
}
</style>
