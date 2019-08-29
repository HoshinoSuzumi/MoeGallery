<template>
  <div>
    <div class="mdui-panel mdui-panel-gapless" mdui-panel>
      <div class="mdui-panel-item mdui-panel-item-open">
        <div class="mdui-panel-item-header">
          <div class="mdui-panel-item-title">
            {{ title }}<span v-if="count > 0"> / <b>{{ count }}图</b></span>
          </div>
          <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
        </div>
        <div class="mdui-panel-item-body">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import mdui from 'mdui';

    export default {
        name: "mg-panel",
        props: ['title', 'count'],
        mounted() {
            mdui.mutation();
        }
    }
</script>

<style scoped>
  .mdui-panel {
    border-radius: 0;
    box-shadow: none;
    animation: elFadeIn 1s;
  }

  .mdui-panel-item {
    color: #FFFFFF;
    background-color: #505050 !important;
  }

  .mdui-panel-item-title,
  .mdui-panel-item-header i {
    color: #FFFFFF !important;
    font-size: 1.2em;
  }

  .mdui-panel-item-title {
    width: 100%;
    font-family: "Microsoft JhengHei", sans-serif !important;
  }

  .mdui-panel-item-header:active {
    background-color: #505050 !important;
  }
</style>
