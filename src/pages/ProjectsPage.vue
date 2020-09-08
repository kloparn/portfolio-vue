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
        style="background-color: transparent; border: 1px solid black; padding: 1rem; margin: 1rem; width: 18rem; min-height: 85vh;"
      >
        <b-card-text>{{ item.description }}</b-card-text>
        <b-card-footer>Language: {{ item.language }}</b-card-footer>
        <b-card-text>
          Github:
          <br />
          <a v-bind:href="item.url" target="blank">
            <b-button variant="outline-primary">GitHub</b-button>
          </a>
        </b-card-text>
        <b-card-text v-if="item.homepage === 'null'"></b-card-text>
        <b-card-text v-else>
          <p>
            <a :href="item.homepage">
              <b-button variant="outline-primary">HomePage</b-button>
            </a>
          </p>
        </b-card-text>
        <b-card-footer>Last updated: {{ toLocalTimeString(item.updated) }}</b-card-footer>
      </b-card>
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
  methods: {
    toLocalTimeString: (date) => {
      return new Date(date).toLocaleDateString();
    },
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
  padding-top: 10vh;
  transition: all 0.2s linear;
  text-shadow: 2px 2px black;
}

.customEffect {
  transform: scale(0.95);
  transition: all 0.2s linear;
}

.customEffect:hover {
  transform: scale(1.02);
  transition: all 0.2s linear;
  border-color: white !important;
}
</style>
