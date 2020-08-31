<template>
  <div id="navbar">
    <div id="logo">Adam Håkansson</div>
    <div id="links">
      <router-link to="/" id="custom-link">Home</router-link>
      <router-link to="/about" id="custom-link">About</router-link>
      <router-link to="/projects" id="custom-link">Projects</router-link>
      <router-link to="/contact" id="custom-link">Contact</router-link>
      <a id="react" href="https://adamhakansson.com" target="_blank">React</a>
    </div>
    <div></div>
  </div>
</template>

<script>
//import Switches from "vue-switches";
//<switches id="mode" v-model="enabled" type-bold="true" theme="bootstrap" color="primary"></switches>

export default {
  name: "Navbar",
  props: {},
  components: {
    /*Switches*/
  },
  data() {
    return {
      enabled: false,
    };
  },
  methods: {
    warn: () => {},
  },
};
</script>

<style scoped>
#navbar {
  z-index: 3;
  background-color: #343a40;
  height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: wrap;
  color: white;
  overflow: hidden;
  position: fixed;
  width: 100%;
}

@media (max-width: 1040px) {
  #navbar {
    height: 15vh;
    justify-content: center;
  }
  #links {
    padding: 0 0 0 0 !important;
  }
}
@media (max-width: 700px) {
  #navbar {
    justify-content: center;
    position: relative !important;
  }
  #links {
    display: flex;
    justify-content: center;
    align-self: center;
    margin: 0;
  }
  #custom-link {
    font-size: 1.5rem !important;
  }
}
@media (max-width: 600px) {
  #navbar {
    height: 30vh;
  }
  #logo {
    padding: 0 0 0 0 !important;
  }
  #links {
    display: flex;
    justify-content: center;

    flex-flow: wrap;
  }
}

#react {
  font-size: 1.7rem;
  border: 2px solid #ccc;
  border-radius: 100%;
  padding: 0.2rem;
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
