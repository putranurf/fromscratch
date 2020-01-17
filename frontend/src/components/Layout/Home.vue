<template>
  <q-layout view="lHh Lpr lFf">
    <Header/>

    <Sidebar/>
    <q-page-container>
      <!-- <HelloWorld /> -->
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

export default {
  components: {
    Header,
    Sidebar
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
