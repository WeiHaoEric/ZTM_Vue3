<template>
  <p>I'm App</p> 
  <!-- 新增I'm App -->
  <Greeting></Greeting>
</template>

<script>
import Greeting from "@/components/Greeting.vue";

export default {
  name: "App",
  components: { Greeting },
};
</script>
