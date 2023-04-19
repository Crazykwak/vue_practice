<template>
  <div class="detail">
      <div class="title"> {{ board.title }} </div>
      <div v-html="board.body"></div>
      <div> {{board.write}}</div>
      <div> {{board.createdAt}} </div>
  </div>

</template>

<script>
export default {
  name: 'detail',
  data() {
    return {
      board: {
        id: 0,
        title: '',
        body: '',
        write: '',
        createdAt: '',
      },
    };
  },
  mounted() {
    this.$axios.get(`/free-board/detail?id=${this.$route.params.id}`)
      .then((res) => {
        this.board.id = res.data.id;
        this.board.title = res.data.title;
        this.board.body = res.data.body;
        this.board.createdAt = res.data.createdAt;
      }).catch((err) => {
      // eslint-disable-next-line
        alert(err);
      });
  },
};
</script>

<style scoped>

</style>
