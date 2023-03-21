<template>
  <div id="Login">
    <form v-on:submit.prevent="login" class="login-box">
      <h1> 로그인 </h1>
      <p> 아이디 </p>
      <input id="userId" v-model="form.userId" type="text">
      <p> 비밀번호 </p>
      <input id="password" type="password" v-model="form.password">
      <input type="submit" value="로그인">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        userId: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$axios.post('/login', this.form)
        .then((response) => {
          const accessToken = response.headers.getAuthorization();
          const refreshToken = response.headers.get('refreshToken');
          localStorage.setItem('AccessToken', accessToken.replace('Bearer ', ''));
          localStorage.setItem('RefreshToken', refreshToken.replace('Bearer ', ''));
          this.$router.push('/');
          location.reload();
        }).catch((err) => {
        // eslint-disable-next-line
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>

.login-box {
  display: flex;
  padding: 8px;
  margin: 10px;
  flex-direction: column;
}

input {
  margin: 5px;
}

</style>
