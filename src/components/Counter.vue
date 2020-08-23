<template>
  <div class="hello">
    <button v-on:click="this.count++">+1 ({{count}})</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      count: 0,
    };
  },
};
</script>