<template>
  <div class="mdui-container">

    <div class="mdui-fab-wrapper" id="fab" mdui-fab="{trigger: 'click'}">
      <button @click="scrollTo(0)" class="mdui-fab mdui-ripple mdui-color-grey-900">
        <i class="mdui-icon material-icons">keyboard_arrow_up</i>
      </button>
    </div>

    <div class="mg-loading" v-if="$store.state.galleries === null">
      <!--    <div class="mg-loading" v-if="loading">-->
      <div class="mdui-card mg-rotate-circle">
        <div class="mdui-spinner"></div>
      </div>
      <p>少女祈祷中...</p>
    </div>

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
      <div>
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

    Vue.use(Viewer, {
        defaultOptions: {
            toolbar: {
                zoomIn: true,
                zoomOut: true,
                oneToOne: true,
                reset: true,
                prev: false,
                play: false,
                next: false,
                rotateLeft: true,
                rotateRight: true,
                flipHorizontal: true,
                flipVertical: true,
            },
            navbar: false,
        },
    });

    export default {
        name: "index",
        components: {MgPanel, MgImage},
        layout: 'default',
        middleware: ['userAuth'],
        data() {
            return {
                // loading: false,
            }
        },
        mounted() {
            mdui.mutation();
            let debounce = null;
            let fabInst = new mdui.Fab('#fab');
            fabInst.hide();
            window.addEventListener('scroll', function () {
                if (debounce) {
                    clearTimeout(debounce);
                }
                debounce = setTimeout(function () {
                    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    if (scrollTop >= 100) {
                        fabInst.show();
                    } else {
                        fabInst.hide();
                    }
                }, 100);
            });
            let self = this;
            // self.$axios.onRequest(() => {
            //     this.loading = true;
            // });
            // self.$axios.onResponse(() => {
            //     this.loading = false;
            // });
            if (!this.$store.state.galleries) {
                this.$axios.post(this.$store.state.API.getGalleries)
                    .then((response) => {
                        self.$store.commit('updateGalleries', response.data);
                    });
            }
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
            },
            scrollTo(px) {
                document.documentElement.scrollTop = px;
                document.body.scrollTop = px;
            },
        },
    }
</script>

<style>
  .mg-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    height: 250px;
  }

  .mg-loading p {
    font-size: 20px;
    margin-top: 15px;
  }

  .mg-rotate-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50px;
  }

  .mdui-typo blockquote {
    margin: 0;
    border-left: 4px solid rgba(255, 255, 255, .20);
  }

  .mdui-typo blockquote kbd {
    background-color: #393939;
    margin-right: 0.5em;
  }
</style>
