<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">South Hills School of Business and Technology</ion-title>
        </ion-toolbar>
      </ion-header>

      <Menu /> <!--Menu Component--> 
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import {  IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import Menu from '@/components/Menu.vue';

export default  {
  name: 'home',
  components: { Menu, IonHeader, IonToolbar, IonTitle, IonContent, IonPage},
  data () {
  return {
    publicPath: process.env.BASE_URL
  }
}
}
</script>

<style scoped>
.title-image {
    margin-top: 8px;
    height: 27px;
}
</style>