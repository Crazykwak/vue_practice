<template>
  <div id="app">
    <div class="top">
      <router-link v-if="!login" class="login" to="/login"> 로그인 </router-link>
      <div v-if="login" @click="logout" class="logout"> 로그아웃 </div>
      <router-link v-if="!login" class="join" to="/join">회원가입</router-link>
    </div>
    <div class="nav">
      <h1 id="homepage-title"> 스케치북 </h1>
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
  data() {
    return {
      login: this.isLogin(),
    };
  },
  methods: {
    isLogin() {
      const accessToken = localStorage.getItem('AccessToken');
      if (accessToken == null || !accessToken.startsWith('Bearer') || accessToken === '') {
        return false;
      }
      return true;
    },
    logout() {
      localStorage.removeItem('AccessToken');
      location.reload();
    },
  },
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
  text-decoration: none;
  font-size: 1rem;
}

h1 {
  font-size: 3rem;
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

#homepage-title {
  color: white;
}

.top {
  display: flex;
  align-items: center;
  margin: 10px;
  position: absolute;
  top: 0;
  right: 0;

}

.join, .login, .logout {
  margin: 1px;
  padding: 7px;
  background-color: black;
  color: white;
  border-radius: 5px;
  font-size: 1rem
;
}

</style>
