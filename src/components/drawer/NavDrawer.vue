<template>
  <v-card class="d-flex" style="height: 75vh">
    <div class="nav-panel">
      <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
        <v-list-item class="px-2">
            <v-btn class="pa-0 px-2" style="min-width:10px;" text>
              <v-icon>mdi-menu</v-icon>
            </v-btn>

          <v-spacer></v-spacer>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="isNav(item.id)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>

    <div class="drawer-content pa-2" style="width: 100%">
        <DummyData v-if="nav=='home'" />
        <DummyTable1 v-else-if="nav == 'table'"/>
        <DummyTable2 v-else-if="nav == 'products'"/>
    </div>
  </v-card>
</template>


<script>
import DummyData from "./DummyData.vue"
import DummyTable1 from "./DummyTable1.vue";
import DummyTable2 from "./DummyTable2.vue";

export default {
  name: "NavDrawer",
  data() {
    return {
      drawer: true,
      auth: JSON.parse(localStorage.getItem("auth")),
      items: [
        { title: "Home", icon: "mdi-home-city", id: 1 },
        { title: "My Table", icon: "mdi-account", id: 2 },
        { title: "Products", icon: "mdi-account-group-outline", id: 3 },
      ],
      mini: true,
      nav: "",
    };
  },
  components: {
    DummyData,
    DummyTable1,
    DummyTable2,
  },
  methods: {
    isNav(value) {
      switch (value) {
        case 1:
          this.nav = "home";
          break;
        case 2:
          this.nav = "table";
          break;
        case 3:
          this.nav = "products";
          break;
        default:
          this.nav = null;
      }
    },
  },
};
</script>