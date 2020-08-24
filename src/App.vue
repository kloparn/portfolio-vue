<template>
  <div id="wrapper">
    <div id="app">
      <Navbar />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  data() {
    return {
      counter: 0,
    };
  },
  components: { Footer, Navbar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -0px !important;
  overflow: hidden;
  background-color: #162447;
  color: white;
}
body {
  margin: 0;
}

#nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
}
</style>
