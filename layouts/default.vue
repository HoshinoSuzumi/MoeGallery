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
        <a class="mdui-typo-title">Moe Gallery</a>
        <div class="mdui-toolbar-spacer"></div>
        <button @click="isFullScreen ? exitFullscreen() : enterFullscreen()" class="mdui-btn mdui-btn-icon">
          <i class="mdui-icon material-icons">{{ isFullScreen ? 'fullscreen_exit' : 'fullscreen' }}</i>
        </button>
        <button class="mdui-btn mdui-btn-icon" mdui-menu="{target: '#main-menu'}">
          <i class="mdui-icon material-icons">more_vert</i>
        </button>
        <ul class="mdui-menu" id="main-menu">
          <li class="mdui-menu-item">
            <a href="javascript:;" class="mdui-ripple">
              <i class="mdui-menu-item-icon mdui-icon material-icons">lock_outline</i>管理
            </a>
          </li>
          <li class="mdui-divider"></li>
          <li class="mdui-menu-item">
            <a href="javascript:;" class="mdui-ripple">
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
