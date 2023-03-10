<template>
  <div id="join">
    <form v-on:submit.prevent="joinMember" class="join-box">
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
export default {
  name: 'Join',
  data() {
    return {
      form: {
        userId: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    joinMember() {
      this.$axios.post(`${this.$url}/join`, this.form)
        .then((response) => {
          if (response.status === 201) {
            this.$router.push('/Home');
          } else {
            this.$router.push('/Error');
          }
        }).catch((err) => {
          console.log(err);
        });
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
