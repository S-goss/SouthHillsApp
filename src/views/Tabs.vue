<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar >
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: {IonTabs, IonPage },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
}
</script>