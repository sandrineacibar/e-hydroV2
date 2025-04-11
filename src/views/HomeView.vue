<template>
  <v-container fluid class="bg-image">
    <v-row>
      <v-col cols="12 pt-16">
        <h1></h1>
        <p></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.bg-image {
  background-image: url("@/assets/img/bg-home.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

</style>
