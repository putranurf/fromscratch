<template>
  <div class="q-pa-md row items-start q-gutter-md center">
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">LOGIN</div>
      </q-card-section>

      <q-separator />
      <q-card-section>
        <q-form @submit.prevent="onSubmit" class="q-gutter-md">
          <q-input
            filled
            v-model="form.username"
            label="Username"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Username wajib diisi']"
          />

          <q-input
            filled
            v-model="form.password"
            label="Password"
            type="password"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Password wajid diisi']"
          />

          <div>
            <q-btn label="Submit" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>

import Cookies from 'js-cookie'

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      // accept: false
    };
  },

  methods: {
    onSubmit() {
      // if (this.accept !== true) {

      Cookies.set('auth', this.form)
      // alert(this.form.username)
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Login Berhasil"
      });
      // }
      this.$router.push('/auth/home')
    }
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>