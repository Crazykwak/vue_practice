<template>
  <div class="home">
    <h1> 안녕 여긴 내 스케치북이야 </h1>
    <h2> 기능 구현 하고 싶은걸 여기에 하나하나 추가할까해 </h2>
    <h2> 지금은 작지만 좋은 아이디어가 떠오르면 여긴 멋져질거야 </h2>
    <h1> 이 구역은 Ajax 통신을 위한 공간이야!</h1>
    <h1> 연결이 성공 했을까? : {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: '통신 안돼써!!',
    };
  },
  methods: {
    getHomeMsg() {
      this.$axios.get('')
        .then((response) => {
          this.msg = response.data;
        })
        .catch((error) => {
          this.msg = `연결이 안됐어!! \n ${error}`;
        });
    },
  },
  created() {
    this.getHomeMsg();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
