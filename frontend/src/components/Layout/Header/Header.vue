<template>
  <!-- <q-layout view="lHh Lpr lFf"> -->
  <q-header bordered class="bg-primary text-white">
    <q-toolbar>
      <!-- <q-btn
        flat
        dense
        round
        @click="leftDrawerOpen = true"
        aria-label="Menu"
        icon="menu"
      /> -->

      <q-toolbar-title>Aplikasi From Scracth</q-toolbar-title>

      <div>{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
  <!-- </q-layout> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "Header",
  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>

<style>
</style>
