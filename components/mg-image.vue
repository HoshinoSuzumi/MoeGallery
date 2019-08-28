<template>
  <div>
    <div class="mdui-col-xs-12 mdui-col-sm-6 mdui-col-md-3">
      <img class="mg-image" alt="" v-lazy="src">
    </div>
  </div>
</template>

<script>
    import VueLazyload from 'vue-lazyload';
    import Vue from 'vue';

    Vue.use(VueLazyload, {
        loading: require('~/static/icon/loading.gif')
    });

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
    transition: all .3s ease;
  }

  .mg-image:hover {
    background-color: orangered;
  }

  /*.mg-image[lazy=loading] {*/
  /*  width: 50%;*/
  /*  height: 50%;*/
  /*}*/
</style>
