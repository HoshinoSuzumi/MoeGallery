<template>
  <div class="mdui-container">

    <mg-panel v-for="(gallery, k1) in galleries" :key="k1" :title="gallery.title" :count="gallery.images.length">
      <div class="mdui-typo">
        <blockquote>
          <p>
            {{ gallery.description }}
          </p>
          <p>
            <kbd>{{ formatDate(new Date(gallery.time), 'yyyy / MM / dd') }}</kbd><kbd v-for="(tag, k2) in gallery.tags"
                                                                                      :key="k2">{{ tag }}</kbd>
          </p>
        </blockquote>
      </div>
      <div v-viewer>
        <mg-image v-for="(src, index) in gallery.images" :key="index" :src="src"
                  alt=""></mg-image>
      </div>
    </mg-panel>

  </div>
</template>

<script>
    import mdui from 'mdui';
    import Viewer from 'v-viewer'
    import Vue from 'vue'
    import MgImage from "../components/mg-image";
    import MgPanel from "../components/mg-panel";

    Vue.use(Viewer);

    export default {
        name: "index",
        components: {MgPanel, MgImage},
        layout: 'default',
        mounted() {
            mdui.mutation();
        },
        computed: {
            galleries: function () {
                return this.$store.state.galleries;
            },
        },
        methods: {
            formatDate(date, fmt) {
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
                }
                let o = {
                    'M+': date.getMonth() + 1,
                    'd+': date.getDate(),
                    'h+': date.getHours(),
                    'm+': date.getMinutes(),
                    's+': date.getSeconds()
                };
                for (let k in o) {
                    if (new RegExp(`(${k})`).test(fmt)) {
                        let str = o[k] + '';
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
                    }
                }
                return fmt;
            },

            padLeftZero(str) {
                return ('00' + str).substr(str.length);
            }
        },
    }
</script>

<style>

  .mdui-typo blockquote {
    margin: 0;
    border-left: 4px solid rgba(255, 255, 255, .20);
  }

  .mdui-typo blockquote kbd {
    background-color: #393939;
    margin-right: 0.5em;
  }
</style>
