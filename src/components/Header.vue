<template>
<div class="text-center">
  <div class="container">
    <header class="blog-header py-3">
      <div class="flex-nowrap justify-content-center align-items-center text-center">
        <div class="text-center">
          <img  class="blog-header-logo text-dark" alt="logo" src="../assets/logo.png">
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
        <hr color="blue" size=10>
        </div>
      </div>
    </header>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    signOut() {
      // eslint-disable-next-line no-console
      console.log('salir de sesion');
    },
  },
};
</script>

<style >
.text-center {
    text-align: center !important
  };
.blog-header {
    line-height: 1;
    border-bottom: 1px solid
    #e5e5e5;
};
hr{
  width: 100%;
}
</style>
