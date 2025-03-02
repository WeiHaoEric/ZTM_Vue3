<template>
  <p>The User is {{ age }} years old</p>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
};
</script>

<style lang="scss" scoped></style>
