<template>
  <div>
    <!--    <div class="mg-no-permission">-->
    <!--      <h1>-->
    <!--        <i style="font-size: 5em;" class="mdui-icon material-icons">lock</i>-->
    <!--        <br/>-->
    <!--        全屏幕覆盖提示-->
    <!--      </h1>-->
    <!--    </div>-->
    <div class="mdui-appbar mdui-appbar-fixed mg-appbar">
      <div class="mdui-toolbar mdui-color-theme">
        <nuxt-link to="/" class="mdui-typo-title">Moe Gallery <sup>dev</sup></nuxt-link>
        <div class="mdui-toolbar-spacer"></div>
        <button @click="foldAll" mdui-tooltip="{content: '折叠全部图集'}"
                v-if="$route.path === '/'"
                class="mdui-btn mdui-btn-icon">
          <i class="mdui-icon material-icons">unfold_less</i>
        </button>
        <button @click="isFullScreen ? exitFullscreen() : enterFullscreen()" mdui-tooltip="{content: '切换全屏浏览'}"
                class="mdui-btn mdui-btn-icon mdui-hidden-xs-down">
          <i class="mdui-icon material-icons">{{ isFullScreen ? 'fullscreen_exit' : 'fullscreen' }}</i>
        </button>
        <button class="mdui-btn mdui-btn-icon" mdui-menu="{target: '#main-menu'}">
          <i class="mdui-icon material-icons">more_vert</i>
        </button>
        <ul class="mdui-menu" id="main-menu">
          <li class="mdui-menu-item">
            <nuxt-link to="/management" class="mdui-ripple">
              <i class="mdui-menu-item-icon mdui-icon material-icons">lock_outline</i>管理
            </nuxt-link>
          </li>
          <li class="mdui-divider"></li>
          <li class="mdui-menu-item">
            <a @click="messageBox('关于 Moe Gallery', '由 RED NENO 开发的图床应用')" class="mdui-ripple">
              <i class="mdui-menu-item-icon mdui-icon material-icons">info_outline</i>关于
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="mg-content">
      <nuxt/>
    </div>

  </div>
</template>

<script>
    import mdui from 'mdui';

    export default {
        name: "default",
        data() {
            return {
                isFullScreen: false,
            }
        },
        mounted() {
            let self = this;
            window.onresize = function () {
                self.isFullScreen = !!(document.webkitIsFullScreen || document.mozFullScreen ||
                    document.msFullscreenElement || document.fullscreenElement
                );
            };
        },
        methods: {
            enterFullscreen() {
                let element = document.documentElement;
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen();
                }
            },
            exitFullscreen() {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            },
            messageBox(title, msg) {
                mdui.alert(msg, title);
            },
            switchPage(path) {
                this.$router.push(path);
            },
            foldAll() {
                let panels = mdui.JQ('.mdui-panel');
                for (let i = 0; i < panels.length; i++) {
                    (new mdui.Panel(panels[i])).closeAll();
                }
            },
        },
    }
</script>

<style>
  body {
    background-color: #505050 !important;
    color: #FFFFFF;
    padding-top: 60px;
  }

  .mg-appbar {
    background-color: #393939;
    color: #FFFFFF;
    box-shadow: none;
  }

  .mg-content {
    width: 100%;
    height: 100%;
  }

  .mg-no-permission {
    display: flex;
    position: fixed;
    justify-content: center;
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .3);
  }

  .mg-no-permission h1 {
    position: absolute;
    text-align: center;
    margin-top: 300px;
    z-index: 101;
    color: orangered;
  }
</style>
