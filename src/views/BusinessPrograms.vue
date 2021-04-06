<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title><img height="50" src="https://www.southhills.edu/wp-content/uploads/2015/07/SouthHillsWeb.jpg" alt="South Hills"/></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Business Programs</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <Menu /> <!--Menu Component--> 
      <ExploreContainer name="Business Programs" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Menu from "@/components/Menu.vue";

export default  {
  name: 'businessPrograms',
  components: { Menu, ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>