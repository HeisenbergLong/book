<template>
  <div id="app">
    <span class="icon-bookmark"></span>
    <span class="icon-clock"></span>
    <span class="texs">abcdef</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const getadata = {
  a: () => 444,
  b: () => 555
};
function geta(keys) {
  const data = {};
  keys.forEach(key => {
    if (getadata.hasOwnProperty(key)) {
      data[key] = getadata[key]
    }
  });
  return data;
}
export default {
  computed: {
    ...mapGetters(["test"]),
    ...geta(["a", "b"])
  },
  mounted() {
    //钩子函数
    // this.$store.dispatch来调用vuex actions里面的setTest
    this.$store.dispatch("setTest", 15).then(() => {
      //then是promise链式异步方法调用
      console.log(this.test);
    });

    console.log(this.a, this.b);
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/styles/global.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: "Days One";
}
.icon-bookmark {
  color: red;
}
.texs {
  font-size: px2rem(25);
  color: orange;
}
</style>
