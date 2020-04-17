<template>
  <div class="home">
    <HeaderBurger/>
    <Body/>
<!--     <Ofert/> -->
  </div>
</template>

<script>
/* import Burger from '@/components/consultant/catalogue/Burger.vue'; */
import HeaderBurger from '@/components/HeaderBurger.vue';
import Body from '@/components/consultant/catalogue/Body.vue';
/* import Ofert from '@/components/consultant/catalogue/Offers.vue';
 */
export default {
  name: 'Home',
  components: {
  /*     Ofert,
 */ HeaderBurger,
    Body,
  },
};
</script>
<style>

</style>
