<template>
  <div id="join">
    <form v-on:submit.prevent="encryptLoginData(), joinMember()" class="join-box">
      <h1> 회원 가입 </h1>
      <p> 아이디 </p>
      <input id="userId" v-model="form.userId" type="text">
      <p> 이메일 </p>
      <input id="email" type="email" v-model="form.email"> <br>
      <p> 비밀번호 </p>
      <input id="password" type="password" v-model="form.password">
      <input type="submit" value="회원가입">
    </form>
  </div>
</template>

<script>
import crypto from 'crypto';

export default {
  name: 'Join',
  data() {
    return {
      form: {
        userId: '',
        email: '',
        password: '',
        encryptIdPassword: '',
      },
    };
  },
  methods: {
    joinMember() {
      this.$axios.post('/join', this.form)
        .then((response) => {
          if (response.status === 201) {
            this.$router.push('/Home');
          } else {
            this.$router.push('/Error');
          }
        }).catch((err) => {
        // eslint-disable-next-line
          console.error(err);
        });
    },
    encryptLoginData() {
      const id = this.form.userId;
      const pw = this.form.password;
      const email = this.form.email;
      const publicKey = process.env.VUE_APP_PUBLIC_KEY.replaceAll('|', '\n');
      const buffer = Buffer.from(`${id}|${pw}|${email}`);
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

.join-box {
  display: flex;
  padding: 8px;
  margin: 10px;
  flex-direction: column;
}

input {
  margin: 5px;
}

</style>
