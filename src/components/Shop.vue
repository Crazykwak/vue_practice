<template>
  <div id="shop">
    <div class="black-bg" v-if="isOpenModal" @click="modalSwitch">
      <div class="white-bg">
        <h4>{{ modal.title }}</h4>
        <p>{{ modal.body}}</p>
        <p>가격 : {{ modal.price }} 만원</p>
        <button @click="modalSwitch"> 닫기 </button>
      </div>
    </div>
    <div v-for="(product, index) in products" :key="product.id">
      <img :src="product.img" alt="대표사진" class="room-image">
      <h4 @click="[getNameAndBodyForModal(index), modalSwitch()]">
        {{ product.id }} : {{ product.name }}</h4>
      <p> {{ product.price }} 만원</p>
      <button @click="increase(index)"> 허위 매물 신고 </button> <span> 신고수 : {{ product.alert }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop',
  data() {
    return {
      isOpenModal: false,
      modal: {
        title: '',
        body: '',
        price: 0,
      },
      products: [
        /* eslint-disable global-require */
        { id: 1, img: require('../assets/room0.jpg'), name: '역삼동원룸', price: 50, body: '역삼동에 있는 원룸입니다.', alert: 0 },
        { id: 2, img: require('../assets/room1.jpg'), name: '천호동원룸', price: 60, body: '천호동에 있는 원룸입니다.', alert: 0 },
        { id: 3, img: require('../assets/room2.jpg'), name: '구미동원룸', price: 70, body: '구미동에 있는 원룸입니다.', alert: 0 },
      ],
      /* eslint-disable global-require */
    };
  },
  methods: {
    increase(index) {
      this.products[index].alert += 1;
    },
    modalSwitch() {
      this.isOpenModal = !this.isOpenModal;
    },
    getNameAndBodyForModal(index) {
      this.modal.title = this.products[index].name;
      this.modal.body = this.products[index].body;
      this.modal.price = this.products[index].price;
    },
  },
};
</script>

<style scoped>

.room-image {
  width: 50%;
  margin-top: 40px;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

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
