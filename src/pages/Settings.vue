<template>
  <q-page>
    <q-page-container>
      <q-page class="q-pa-md">
        <!-- Section du Profil Utilisateur -->
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h5">Profil Utilisateur</div>
            <q-input filled label="Nom" class="q-mb-md" />
            <q-input
              filled
              label="Adresse Email"
              type="email"
              class="q-mb-md"
            />
            <q-input
              filled
              label="Numéro de Téléphone"
              type="tel"
              class="q-mb-md"
            />
            <q-select
              filled
              label="Genre"
              :options="[
                { label: 'Homme', value: 'male' },
                { label: 'Femme', value: 'female' },
                { label: 'Autre', value: 'other' },
              ]"
              class="q-mb-md"
            />
            <q-input filled label="Adresse" type="text" class="q-mb-md" />
            <q-btn color="primary">Enregistrer les Modifications</q-btn>
          </q-card-section>
        </q-card>

        <!-- Section de Sécurité -->
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h5">Sécurité</div>
            <q-input
              filled
              label="Mot de passe actuel"
              type="password"
              class="q-mb-md"
            />
            <q-input
              filled
              label="Nouveau mot de passe"
              type="password"
              class="q-mb-md"
            />
            <q-input
              filled
              label="Confirmer le nouveau mot de passe"
              type="password"
              class="q-mb-md"
            />
            <q-btn color="primary">Changer le mot de passe</q-btn>
          </q-card-section>
        </q-card>

        <!-- Section des Préférences Générales -->
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h5">Préférences Générales</div>
            <q-select
              v-model="lang"
              :options="langOptions"
              label="Quasar Language"
              dense
              borderless
              emit-value
              map-options
              options-dense
              style="min-width: 150px"
            />
            <q-toggle
              class="toggle q-mb-md"
              v-model="isDark"
              label="Mode Nuit"
            />
            
            <q-toggle label="Mode Haute Contraste" class="q-mb-md" />
            <q-toggle
              label="Augmenter la Taille de la Police"
              class="q-mb-md"
            />
          </q-card-section>
        </q-card>

        <!-- Section de Confidentialité -->
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h5">Confidentialité</div>
            <q-toggle label="Rendre le profil public" class="q-mb-md" />
            <q-toggle
              label="Partage de données avec des tiers"
              class="q-mb-md"
            />
            <q-toggle label="Accepter les cookies" class="q-mb-md" />
            <q-btn color="primary"
              >Enregistrer les Paramètres de Confidentialité</q-btn
            >
          </q-card-section>
        </q-card>

        <!-- Section des Préférences Avancées -->
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h5">Préférences Avancées</div>
            <q-input
              filled
              label="URL de redirection après connexion"
              type="url"
              class="q-mb-md"
            />
            <q-input
              filled
              label="Clé API personnalisée"
              type="text"
              class="q-mb-md"
            />
            <q-input
              filled
              label="Intervalle de mise à jour automatique (minutes)"
              type="number"
              class="q-mb-md"
            />
            <q-btn color="primary">Enregistrer les Préférences Avancées</q-btn>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-page>
</template>

<script>
// import { useQuasar } from 'quasar'
// import languages from 'quasar/lang/index.json'
// import { ref, watch } from 'vue'

// // Importer les modules de langue nécessaires
// const modules = import.meta.glob('../../node_modules/quasar/lang/(de|en-US|es|fr).js')

// // Filtrer les langues disponibles pour inclure uniquement l'anglais et le français
// const appLanguages = languages.filter(lang =>
//   ['en-US', 'fr'].includes(lang.isoName)
// )

// const langOptions = appLanguages.map(lang => ({
//   label: lang.nativeName, value: lang.isoName
// }))

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingsPage',

  computed: {
    isDark: {
      get() {
        return this.$q.dark.isActive;
      },
      set(v) {
        this.$q.dark.set(v);
        this.$q.localStorage.set('isDark', v);
      },
    },
  },

  // setup () {
  //   const $q = useQuasar()
  //   const lang = ref($q.lang.isoName)

  //   // Surveiller les changements de langue et charger le module correspondant
  //   watch(lang, val => {
  //     modules[`../../node_modules/quasar/lang/${val}.js`]().then(lang => {
  //       $q.lang.set(lang.default)
  //     })
  //   })

  //   return {
  //     lang,
  //     langOptions
  //   }
  // }
});
</script>
