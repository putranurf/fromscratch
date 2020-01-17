<template>
  <!-- <q-layout view="lHh Lpr lFf"> -->
  <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-2">
    <q-list>
      <!-- <q-item-label header>Essential Links</q-item-label> -->
      <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
        <q-item-section avatar>
          <q-icon name="school" />
        </q-item-section>
        <q-item-section>
          <q-item-label>CRUD</q-item-label>
          <!-- <q-item-label caption>quasar.dev</q-item-label> -->
        </q-item-section>
      </q-item>
      <q-item clickable tag="a" target="_blank" href="https://github.com/quasarframework/">
        <q-item-section avatar>
          <q-icon name="code" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Email</q-item-label>
          <!-- <q-item-label caption>github.com/quasarframework</q-item-label> -->
        </q-item-section>
      </q-item>
      <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
        <q-item-section avatar>
          <q-icon name="chat" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Upload File</q-item-label>
          <!-- <q-item-label caption>chat.quasar.dev</q-item-label> -->
        </q-item-section>
      </q-item>
      <!-- <router-link :to="{ name: 'pdfdoc'}"> -->
        <q-item clickable tag="a" href="/pdf">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>PDF Document</q-item-label>
            <!-- <q-item-label caption>chat.quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>
      <!-- </router-link> -->
      <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
        <q-item-section avatar>
          <q-icon name="chat" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Logout</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
  <!-- </q-layout> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "Sidebar",

  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>

<style>
</style>
