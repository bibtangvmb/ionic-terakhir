<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon style="color: #ff2265;" aria-hidden="true" :icon="homeOutline" />
          <ion-label style="font-weight: 900; font-family: rockwell;">Beranda</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon style="color: #2a6921;" aria-hidden="true" :icon="bagOutline" />
          <ion-label style="font-weight: 900; font-family: rockwell;">Barang</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon style="color: #ff933b;" aria-hidden="true" :icon="personCircleOutline" />
          <ion-label style="font-weight: 900; font-family: rockwell;">Akun</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { homeOutline, bagOutline, personCircleOutline } from 'ionicons/icons';
</script>

<style>
ion-tab-button.tab-selected {
  color: #789e4c;
  --ripple-color: rgb(216, 72, 115);
}

ion-tab-button:hover ion-icon,
ion-tab-button:hover ion-label {
  color: rgb(216, 72, 115);
}

ion-tab-button {
  color: #704f2f;
}

ion-tab-bar {
  --background: #ffeedd;
}
</style>
