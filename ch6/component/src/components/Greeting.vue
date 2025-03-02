<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: "Greeting",
  data() {
    return {
      msg: "Hello World!",
    };
  },
};
</script>

<style scoped lang="scss">
@use "sass:color";
p:hover {
  color: color.scale(#c44, $lightness: 40%);
}
</style>
