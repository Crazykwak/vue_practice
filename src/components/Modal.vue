<template>
  <div class="black-bg" v-if="isOpen" @click="closeModal">
    <div class="white-bg">
      <h4>{{ title }}</h4>
      <p>{{ body }}</p>
      <p>가격 : {{ price | money }} 만원</p>
      <button @click="closeModal"> 닫기 </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    title: String,
    body: String,
    price: Number,
  },
  filters: {
    money(number) {
      return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
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
  border-radius: 8px;
  padding: 20px;
}

</style>
