<template>
  <div>
    <q-layout>
      <q-page-container>
        <!-- <Auth /> -->
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import Auth from "./components/Auth/Auth.vue";

export default {
  name: "LayoutDefault",

  components: {
    Auth
  }
};
</script>