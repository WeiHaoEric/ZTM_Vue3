const lastName = "Doe";

const vm = Vue.createApp({
  data() {
    return {
      firstName: "John", //<-- 建立在createApp()內物件的data()，其回傳的key值會對應到HTML中的雙花括號的key，同時渲染出他的值。
      lastName: "OK",
      url: "https://www.google.com",
      raw_url: '<a href="www.google.com">Google</a>',
      age: 18,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName}, ${this.lastName.toUpperCase()}`;
    },

    onLastName(event, msg) {
      //   event.preventDefault();
      //   ^^^ 防止event bubble的發生，但vue提供更簡單的寫法

      console.log(`msg:${msg}`);
      this.lastName = event.target.value;
    },

    increase(event) {
      console.log("methods: increase");
      return this.age++;
    },
    decrease(event) {
      console.log("methods: decrease");
      return this.age--;
    },
  },
  computed: {
    myAge() {
      console.log("computed");
      return this.age;
    },
  },
}).mount("#app");

setTimeout(() => {
  vm.url = "https://tw.yahoo.com/";
}, 5000);
