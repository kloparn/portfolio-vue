<template>
  <div id="navbar">
    <div id="logo">Adam Håkansson</div>
    <div id="links">
      <router-link to="/" id="custom-link">Home</router-link>
      <router-link to="/about" id="custom-link">About</router-link>
      <router-link to="/projects" id="custom-link">Projects</router-link>
      <router-link to="/contact" id="custom-link">Contact</router-link>
    </div>
    <switches
      id="mode"
      v-model="enabled"
      type-bold="true"
      theme="bootstrap"
      color="primary"
    ></switches>
  </div>
</template>

<script>
import Switches from "vue-switches";

export default {
  name: "Navbar",
  props: {},
  components: { Switches },
  data() {
    return {
      enabled: false,
    };
  },
};
</script>

<style scoped>
#navbar {
  background-color: #343a40;
  height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

@media (max-width: 1150px) {
  #logo {
    font-size: 2rem;
  }
  #links {
    font-size: 1.5rem;
  }
}
@media (max-width: 1100px) {
  #navbar {
    font-size: 1.3rem;
  }
}
@media (max-width: 1000px) {
  #navbar {
    padding-left: 0;
    padding-right: 0;
  }
}

#logo {
  font-size: 2.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  align-items: left;
  padding-left: 1rem;
  @media (max-width: 600) {
    font-size: 1.5rem;
  }
}

#switch-wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 1rem;
  cursor: auto;
}

#links {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  padding-right: 2rem;
}

#custom-link {
  text-decoration: none;
  padding: 1rem;
  font-size: 2rem;
  color: white;
  text-shadow: 2px 2px black;
  padding-right: 2rem;
}
#custom-link:active {
  color: black !important;
}
#custom-link:hover {
  color: rgb(14, 90, 116);
  text-decoration: underline;
  opacity: 0.7;
}

#mode {
  display: flex;
  align-items: center;
  padding-right: 2vh;
}
</style>
