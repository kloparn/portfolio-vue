<template>
  <div id="layout">
    <div v-for="item in repos" :key="item.id">
      {{ item.id }} {{ item.title }}
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Projects",
  data() {
    return {
      repos: null,
    };
  },
  mounted() {
    axios
      .get("https://dotnet-core-backend.herokuapp.com/api/Github")
      .then((Response) => (this.repos = Response.data));
  },
};
</script>

<style scoped>
#layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;
  min-height: 100vh;
  text-shadow: 2px 2px black;
}
</style>
