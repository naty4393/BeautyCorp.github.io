<template>
  <div>
    <div class="text-center">
      <div class="container">
        <br />
        <h6>Catálogo Virtual</h6>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="@/assets/img/PRODUCTOS/base studio obscure.jpg" class="d-block w-100" alt />
              <h6>Esika</h6>
              <h6>Precio Normal: S/.40.00</h6>
              <h4>Precio Oferta: S/25.00</h4>
            </div>
            <div class="carousel-item">
              <img src="@/assets/img/PRODUCTOS/byb.jpg" class="d-block w-100" alt />
              <h6>Esika</h6>
              <h6>Precio Normal: S/.80.00</h6>
              <h4>Precio Oferta: S/55.00</h4>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <br />
        <div class="checkbox mb-3">
          <router-link to="/logincli" class="btn btn-primary btn-block">
          AÑADIR A CARRITO</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offert',
};
</script>

<style scoped>
.text-center {
  text-align: center !important;
}
.form-signin {
  width: 50px;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
