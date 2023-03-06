<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/board">게시판</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home';
import Shop from './components/shop/Shop';
import Board from './components/board/Board';

export default {
  title: 'App',
  components: {
    Home,
    Shop,
    Board,
  },
};

</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  background: darkslateblue;
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
}

.nav a {
  color: white;
  padding: 10px;
}

</style>
