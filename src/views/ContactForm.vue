<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title><img src="public\assets\icon\SouthHillsWebDark.png" /></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Contact Forms</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <Menu /> <!--Menu Component--> 
      <ExploreContainer name="Contact Form" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Menu from "@/components/Menu.vue";

export default  {
  name: '',
  components: { Menu, ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>