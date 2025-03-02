<template>
  <p>I'm App</p>
  <!-- 新增I'm App -->
  <greeting></greeting>
  <user :age="age"></user>
</template>

<script>
import Greeting from "@/components/Greeting.vue";
import User from "./components/User.vue";

export default {
  name: "App",
  components: { Greeting, User },
  data() {
    return {
      age: 20,
    };
  },
};
</script>
