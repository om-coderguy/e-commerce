<template>
  <v-app id="e-commerce">
      <v-app-bar
        absolute
        color="Blue"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-toolbar-title>
          <router-link to="/" class="appbar-title">
            <v-img
              :src="require('../assets/ecommerce.png')"
              height="25"
              width="25"
              class="mr-4"
            ></v-img>
            e-commerce
          </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <router-link to="/login" class="appbar-title mr-5">
        <v-btn target="_blank" text > Log IN </v-btn>
        </router-link>
        <router-link to="/register" class="appbar-title mr-5">
        <v-btn  target="_blank" text>
          <span class="mr-2">SIGN UP</span>
        </v-btn>
        </router-link>
      </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>


    <v-footer class="footer pa-6">
      <ul class="flex-container">
        <li class="links">
          About
          <ol>
            <li class="about">About Us</li>
            <li class="about">Carrers</li>
          </ol>
        </li>

        <li class="links">
          Connect with Us
          <ol>
            <li class="connect">Facebook</li>
            <li class="connect">Twitter</li>
            <li class="connect">Instagram</li>
          </ol>
        </li>

        <li class="links">
          Support
          <ol>
            <li class="support">Account</li>
            <li class="support">Orders</li>
          </ol>
        </li>

        <li class="links">
          Make money with Us
          <ol>
            <li class="money">Register seller</li>
            <li class="money">Add product in seller</li>
          </ol>
        </li>
      </ul>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "HeaderComponent",
  data: () => ({ drawer: null }),
  props: {},
};
</script>

<style>
.footer{
      flex: none;
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.appbar-title {
  display: flex;
}

.flex-container {
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.v-responsive {
  flex: none;
}

a{
  text-decoration: none;
  color: black;
}
</style>