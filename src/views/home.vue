<template>
    <div class="home">
        <div id="read"></div>
    </div>
</template>

<script>
import Epub from "epubjs";
global.ePub = Epub;
export default {
  name: "home",
  mounted() {
      this.book = new Epub('')
  }
};
</script>

<style>
</style>