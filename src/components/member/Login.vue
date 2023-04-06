<template>
  <div id="Login">
    <form v-on:submit.prevent="encryptLoginData(), login()" class="login-box">
      <h1> 로그인 </h1>
      <input id="encryptIdPassword" v-model="form.encryptIdPassword" type="hidden">
      <p> 아이디 </p>
      <input id="userId" v-model="form.userId" type="text">
      <p> 비밀번호 </p>
      <input id="password" type="password" v-model="form.password">
      <input type="submit" value="로그인">
    </form>
  </div>
</template>

<script>
const crypto = require('crypto');

export default {
  name: 'Login',
  data() {
    return {
      form: {
        encryptIdPassword: '',
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
    encryptLoginData() {
      const id = this.form.userId;
      const pw = this.form.password;
      console.log(process.env.VUE_APP_PUBLIC_KEY);
      const publicKey = process.env.VUE_APP_PUBLIC_KEY.toString().replaceAll('|', '\n');
      const buffer = Buffer.from(`${id}|${pw}`);
      const encrypt = crypto.publicEncrypt({
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PADDING,
      }, buffer);
      this.form.encryptIdPassword = encrypt.toString('base64');
      this.form.userId = '';
      this.form.password = '';
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
