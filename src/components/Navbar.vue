<template>
  <div id="navbar">
    <div id="logo">Adam Håkansson</div>
    <div id="links">
      <router-link to="/home"></router-link>
      <router-link to="/contact"></router-link>
    </div>
    <div id="mode">sda</div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  components: {},
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

#logo {
  font-size: 2.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  align-items: left;
  padding-left: 1rem;
  @media (max-width: 600) {
    font-size: 1.5rem;
  }
}

#links {
}

#mode {
  display: flex;
  align-items: center;
  padding-right: 2vh;
  padding-left: 10vh;
}
</style>
