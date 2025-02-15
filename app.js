const lastName = "Doe";

const vm = Vue.createApp({
  data() {
    return {
      firstName: "John", //<-- 建立在createApp()內物件的data()，其回傳的key值會對應到HTML中的雙花括號的key，同時渲染出他的值。
      lastName: "OK",
    };
  },
  methods: {
    fullName() {
      return `${this.firstName}, ${this.lastName.toUpperCase()}`;
    },
  },
}).mount("#app");
