<template>
  <p>I'm App</p>

  <button type="button" @click="age++">Increase age</button>
  <greeting :age="age"></greeting>
  <user :age="age" @updateAge="age++"></user>
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
