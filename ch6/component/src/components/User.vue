<template>
  <br />
  <h2>=== User Component ===</h2>
  <p>The User is {{ age }} years old</p>
  <ul>
    <li>
      use <span style="color: yellowgreen">this.$emit</span> to send a event to
      parent component
    </li>
  </ul>
  <button type="button" @click="onAddAge">User adds age</button>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
  methods: {
    onAddAge() {
      this.$emit("updateAge");
    },
  },
};
</script>

<style lang="scss" scoped></style>
