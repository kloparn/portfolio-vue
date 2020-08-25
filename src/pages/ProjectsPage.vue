<template>
  <div id="layout">
    <div v-if="repos === null">Loading from api....</div>
    <div v-else v-for="item in repos" :key="item.id">
      <b-card
        class="customEffect"
        v-bind:title="item.title"
        img-src="http://assets.stickpng.com/images/5847f98fcef1014c0b5e48c0.png"
        img-alt="Github-logo"
        img-top
        style="background-color: transparent; border: 1px solid black; padding: 1rem; margin: 1rem; width: 18rem;"
      ></b-card>
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
  components() {},
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
  padding-top: 10vh;
  transition: all 0.2s linear;
  text-shadow: 2px 2px black;
}
.customEffect:hover {
  transform: scale(1.07);
  transition: all 0.2s linear;
  border-color: white !important;
}
</style>
