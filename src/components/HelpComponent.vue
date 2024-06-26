<template>
<q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h5">
        Bienvenue sur la Page d'Aide de la Gendarmerie
      </div>
      <p>
        Cette section est destinée à vous fournir des informations et des
        conseils pour utiliser notre portail.
      </p>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <div class="text-h6">Connexion</div>
      <p>
        Pour vous connecter, cliquez sur le bouton de connexion en haut à
        droite de la page d'accueil. Entre vos identifiants de connexion
        et appuyez sur "Se Connecter". Si vous avez oublié votre mot de
        passe, utilisez le lien "Mot de passe oublié" pour le
        réinitialiser.
      </p>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">Navigation</div>
      <p>
        Utilisez le menu de navigation situé à gauche pour accéder aux
        différentes sections du portail. Vous trouverez des sections comme
        "Accueil", "Actualités", "Contacts" et "Services".
      </p>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">Support Utilisateur</div>
      <p>
        Si vous avez besoin d'aide supplémentaire, vous pouvez contacter
        notre support utilisateur via l'onglet "Support" dans le menu de
        navigation. Vous pouvez également envoyer un mail à
        support@gendarmerie.fr.
      </p>
    </q-card-section>
  </q-card>
  </template>

<script>
import { defineComponent } from 'vue';


export default   defineComponent({

  name: 'HelpComponent',

});</script>