<template>
  <div>
    <div>233</div>
  </div>
</template>

<script>

    export default {
        name: "management",
        layout: 'default',
        mounted() {
            if (this.$store.state.token === null) {
                this.$router.push('login');
            }
        }
    }
</script>

<style scoped>
</style>
