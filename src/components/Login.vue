<template>
  <div id="loginpage">
    <h2 class="pb-4 ">Log IN</h2>
    <form @submit.prevent="logInUser">
      <v-text-field
        v-model="username"
        :counter="10"
        :error-messages="errors"
        label="UserName"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :counter="10"
        :error-messages="errors"
        label="Password"
        required
      ></v-text-field>
      <div class="btns mt-8">
        <v-btn class="mr-4" type="submit" :disabled="invalid" > LogIn </v-btn>
        <router-link to="/register">
          <v-btn class="mr-4"> Register </v-btn>
        </router-link>
        <v-btn @click="clear"> clear </v-btn>
      </div>
    </form>
  </div>
</template>

<script>
import urls from '../urls'
import axios from 'axios'
export default {
  name: "LogIn",
  methods:{
    logInUser(){
      axios
        .post(urls().login, {
          username: this.username,
          password: this.password
        }).then((response) => {
          console.log(response.data);
          localStorage.setItem('auth', response.data.userName);
          this.$router.push("/");
        }).catch(function (error) {
          // handle error
          console.log(error);    
        });
        
      this.$router.push("/");
    }
  }
};
</script>

<style>
#loginpage {
  position: relative;
  width: 40rem;
  margin: auto;
  padding: 4rem;
  box-shadow: 0px 5px 10px black;
}
.btns{
  display: flex;
  text-decoration: none;
}
a{
  text-decoration: none;
  color: black;
}
</style>