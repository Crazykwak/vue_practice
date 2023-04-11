<template>
  <div class="ok-board black-bg" v-if="isOpen" @click="moveList">
      <div class="white-bg">
          <h4> {{ msg }} </h4>
      </div>
      <router-link to="/board"> 목록으로 가기 </router-link>
  </div>
</template>

<script>
export default {
  name: 'OKBoard',
  props: {
    isOpen: Boolean,
    msg: String,
  },
  methods: {
    moveList() {
      this.$router.push('/board');
    },
  },
};
</script>

<style scoped>

.black-bg {
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed; padding: 20px;
}

.white-bg {
    width: 100%; background: white;
    height: 50%;
    border-radius: 8px;
    padding: 20px;
}

</style>
