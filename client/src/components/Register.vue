<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form
          id="register-form"
          name="tab-tracker-form"
          autocomplete="off"
          @submit="setUserInStore">
          <v-text-field
            id="email-input"
            name="email"
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            id="password-input"
            name="password"
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div id="register-error-message" class="danger-alert" v-html="error" />
        <br>
        <v-btn
          id="register-btn"
          name="register"
          dark
          class="cyan"
          @click="register">
          Register
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.email = response.data.user.email
        this.password = response.data.user.password
        // this.$store.dispatch('setUser', response.data.user)
        // this.$store.dispatch('setToken', response.data.token)
        // this.$router.push({
        //   name: 'songs'
        // })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    setUserInStore () {
      if (this.email && this.password) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('setUser', user)
        }  
      }
   }
}
</script>

<style scoped>
</style>
