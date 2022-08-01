<template>
  <div id="registerform">
    <v-alert v-if="alert" text type="success">Registered successfully</v-alert>
    <h2 class="pb-4">Register</h2>
    <form v-on:submit.prevent="registerUser">
      <v-text-field
        v-model="name"
        :counter="20"
        :error-messages="errors"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="username"
        :counter="10"
        :error-messages="errors"
        label="UserName"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :counter="8"
        :error-messages="errors"
        label="Password"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :error-messages="errors"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="phoneNumber"
        :counter="10"
        :error-messages="errors"
        label="Mobile Number"
        required
      ></v-text-field>

      <div class="btns mt-8">
        <v-btn class="mr-4" type="submit" :disabled="invalid" >  submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </div>
    </form>
  </div>
</template>

<script>
import urls from '../urls'
import axios from 'axios'

export default {
  name: "RegisterForm",
  data: () => ({
    //
    alert:false
  }),
  methods:{
    registerUser(){
      axios
        .post(urls().register, {
          name:this.name,
          userName: this.username,
          password: this.password,
          email:this.email,
          mobileNo:this.mobileNo
        }).then((response) => {
          console.log(response.data);
          this.alert=true;
        }).catch(function (error) {
          // handle error
          console.log(error);    
        });
          // this.$router.push("/");
    }
  }
};
</script>

<style>
#registerform {
  position: relative;
  width: 40rem;
  margin: auto;
  padding: 4rem;
  box-shadow: 0px 5px 8px black;
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