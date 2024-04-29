<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Akun</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Akun</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="ion-activatable ripple-parent head">
        <ion-avatar class="text-center mx-auto">
          <img src="https://ionicframework.com/docts/img/demos/avatar.svg" alt="avatar"/>
        </ion-avatar>

        <div class="text-center mx-auto">
          <ion-label color="light">
            <h2>STAR</h2>
            <h2>ytvalennz@gmail.com</h2>
          </ion-label>
        </div>

        <ion-ripple-effect></ion-ripple-effect>
      </div>

      <div class="menu">
        <ion-item lines="full" class="ion-activatable ripple-parent">
          <ion-icon :icon="personCircleOutline" slot="end"></ion-icon>
          <ion-label>
            <h2>Lihat Akun</h2>
            <p>Buka Halaman Akun Lebih Detail</p>
          </ion-label>
          <ion-ripplr-effect></ion-ripplr-effect>
        </ion-item>

        <ion-item @click="logout" lines="full" class="ion-activatable ripple-parent">
          <ion-icon :icon="logOut" slot="end"></ion-icon>
          <ion-label>
            <h2>Keluar Akun</h2>
            <p>Keluar Dari Akun Yang Sekarang</p>
          </ion-label>
          <ion-ripple-effect></ion-ripple-effect>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { logOut, personCircleOutline } from 'ionicons/icons';
import { token, user } from "../services/user";
import { useRouter } from "vue-router";

const router = useRouter()

const logout = () => {
  user.value = null
  token.value = ''

  router.replace('/login')
}
</script>

<style>
.head {
  padding: 40px 10px;
  background-color: red;
}

ion-avatar {
  width: 120px;
  height: 120px;
}
</style>