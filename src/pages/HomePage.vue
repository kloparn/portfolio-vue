<template>
  <main>
    <section id="layout">
      <h1 id="logo">Adam Håkansson</h1>
      <p id="description">
        I'm a newly swedish graduate fullstack developer
        <br />Available for hire and or available for a full time job
      </p>
      <section id="button-wrapper">
        <router-link to="/projects" id="custom-button">To my projects</router-link>
        <router-link to="/contact" id="custom-button">Contact me</router-link>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
#layout {
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.88)
    ),
    url("~@/assets/background-exp.png");
  background-size: cover;
  color: white;
  min-height: 100vh;
  text-shadow: 2px 2px black;
}

#logo {
  padding-top: 10vh;
  font-size: 3rem;
}

#description {
  font-size: 2rem;
}

#button-wrapper {
  justify-content: space-evenly;
  display: flex;
}

#custom-button {
  text-decoration: none;
  font-size: 1.5rem;
  border: 1px solid #fff;
  padding: 10px 20px;
  margin: 3rem;
  border-radius: 20px;
  text-align: center;
  color: white;
  background-color: darkblue;
  text-shadow: 2px 2px black;
  transition: all 0.25s linear;
}

#custom-button:hover {
  opacity: 0.6;
  cursor: pointer;
}
</style>
