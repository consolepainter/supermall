<template>
  <div id="home">
    <nav-bar>
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/commom/navBar/NavBar';
import {getHomeMultiData} from '../../network/home';

export default {
  name: 'Home',
  components: {
    NavBar,
  },
  data() {
    return {
      banners: {},
      recommends: {},
    }
  },
  created() {
    getHomeMultiData().then(res => {
      this.banners = res.data.banner;//涉及到回收机制
      this.recommends = res.data.recommend;
    })
  }
}
</script>

<style>

</style>