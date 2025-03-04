<template>
  <p v-if="age >= 25">You are 25!!</p>
  <p v-else>Your age is {{ age }} years old</p>
</template>

<script>
export default {
  name: "Greeting",
  data() {
    return {
      msg: "Hello World!",
    };
  },
  props: ["age"],
};
</script>

<style scoped lang="scss">
@use "sass:color";
p:hover {
  color: color.scale(#c44, $lightness: 40%);
}
</style>
