<template>
  <div>
    <div class="mg-image-container mdui-col-xs-12 mdui-col-sm-6 mdui-col-md-3">
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
  @-webkit-keyframes imgFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .mdui-col-xs-12,
  .mdui-col-sm-6,
  .mdui-col-md-3 {
    margin: 0;
    padding: 0;
    cursor: zoom-in;
  }

  .mg-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 250px;
    height: 250px;
    overflow: hidden;
  }

  .mg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: imgFadeIn 1s;
    transition: all .5s ease-in-out;
  }

  .mg-image:hover {
    transform: scale(1.1);
  }

  .mg-image[lazy=loading] {
    animation: unset;
    width: unset !important;
    height: unset !important;
  }
</style>
