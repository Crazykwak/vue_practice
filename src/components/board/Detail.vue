<template>
  <div class="detail">
      <div class="title"> <h1> {{ board.title }} </h1></div>
      <div class="board-body" v-html="board.body"></div>
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

<style lang="scss">

.detail {
  > * + * {
      margin: 1rem;
      padding: 0.3rem;
      text-align: left;
  }

  .board-body {
      border: 1px solid black;
  }

  ul,
  ol {
      padding: 0 1rem;
  }

  code {
      background-color: rgba(97, 97, 97, 0.1);
      color: #616161;
  }

  pre {
      background: #0D0D0D;
      color: #FFF;
      font-family: 'JetBrainsMono', monospace;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;

  code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
  }
  }

  img {
      max-width: 100%;
      height: auto;
  }

  blockquote {
      padding-left: 1rem;
      border-left: 2px solid rgba(13, 13, 13, 0.1);
  }

  hr {
      border: none;
      border-top: 2px solid rgba(13, 13, 13, 0.1);
      margin: 2rem 0;
  }
}

</style>
