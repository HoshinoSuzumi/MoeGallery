<template>
  <div>
    <div class="mg-install">
      <h1>👋 欢迎使用 MoeGallery</h1>
      <p>请填写以下信息，完成 MoeGallery 的安装</p>
      <hr/>

      <h1 class="subtitle">🌏 站点信息</h1>
      <label>
        <input class="mg-input" type="text" placeholder="站点标题" spellcheck="false" v-model="installInfo.site.title"/>
      </label>

      <h1 class="subtitle">🔐 连接信息</h1>
      <label>
        <input class="mg-input" type="text" placeholder="数据库主机" spellcheck="false"
               v-model="installInfo.connection.db_host"/>
      </label>
      <label>
        <input class="mg-input" type="text" placeholder="数据库名称" spellcheck="false"
               v-model="installInfo.connection.db_name"/>
      </label>
      <label>
        <input class="mg-input" type="text" placeholder="数据库密码" spellcheck="false"
               v-model="installInfo.connection.db_pwd"/>
      </label>

    </div>
  </div>
</template>

<script>
    export default {
        name: "install",
        layout: 'default',
        data() {
            return {
                installInfo: {
                    site: {
                        title: ''
                    },
                    connection: {
                        db_host: '',
                        db_name: '',
                        db_pwd: '',
                    },
                }
            }
        }
    }
</script>

<style scoped>
  .mg-install {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    min-height: 200px;
  }

  .mg-install h1 {
    color: #FFFFFF;
  }

  .mg-install hr {
    width: 80%;
  }

  .mg-install .subtitle {
    font-size: 1.8em;
  }
</style>
