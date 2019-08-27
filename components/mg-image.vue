<template>
  <div>
    <div class="mdui-col-xs-12 mdui-col-sm-6 mdui-col-md-3">
      <img class="mg-image" :src="src" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "mg-image",
        props: ['src']
    }
</script>

<style scoped>
  .mdui-col-xs-12,
  .mdui-col-sm-6,
  .mdui-col-md-3 {
    margin: 0;
    padding: 0;
    cursor: zoom-in;
  }

  .mg-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
</style>
