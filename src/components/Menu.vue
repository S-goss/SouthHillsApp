<template>
  <div>
    <ion-menu side="start" menu-id="custom" content-id="main">
      <ion-header>
        <ion-toolbar color="tertiary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item><a href="/tabs/home">Home</a></ion-item>
          <ion-item><a href="/tabs/businessprograms">Business Programs</a></ion-item>
          <ion-item><a href="/tabs/healthcarePrograms">Healthcare Programs</a></ion-item>
          <ion-item><a href="/tabs/technologyPrograms">Technology Programs</a></ion-item>
          <ion-item><a href="/tabs/contactForm">Contact Us</a></ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="main"></ion-router-outlet>
  </div>
</template>

<style>
.my-custom-menu {
  --width: 500px;
}
a:link, a:visited {
  color: white;
  text-decoration: none;
  cursor: auto;
}

a:link:active, a:visited:active {
  color: (internal value);
}
</style>

<script>
import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonRouterOutlet,
  IonTitle, 
  IonToolbar,
  menuController
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent, 
    IonHeader, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonRouterOutlet,
    IonTitle, 
    IonToolbar
  },
  methods: {
    openFirst() {
      menuController.enable(true, 'first');
      menuController.open('first');
    },
    openEnd() {
      menuController.open('end');
    },
    openCustom() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    }
  }
});
</script>