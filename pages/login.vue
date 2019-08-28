<template>
  <div>
    <div class="mdui-container">
      <div class="mdui-typo mdui-text-center mdui-p-t-3 mdui-p-b-4">
        <h1>Management Area</h1>
      </div>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <div class="mdui-col-xs-12 mdui-col-md-6">
          <a-form-item>
            <a-input
              v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
              placeholder="Username"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0,0,0,.5)"
              />
            </a-input>
          </a-form-item>
        </div>
        <div class="mdui-col-xs-12 mdui-col-md-6">
          <a-form-item>
            <a-input
              v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
              type="password"
              placeholder="Password"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0,0,0,.5)"
              />
            </a-input>
          </a-form-item>
        </div>
        <div class="mdui-col-xs-12">
          <a-form-item>
            <a-button
              :loading="loading"
              type="primary"
              html-type="submit"
              class="login-form-button"
            >
              Log in
            </a-button>
          </a-form-item>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                loading: false,
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.loading = true;
                        console.log('Received values of form: ', values);
                    }
                });
            },
        },
    }
</script>

<style scoped>
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }

  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }

  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
</style>
