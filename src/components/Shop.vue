<template>
  <div id="shop">
    <modal
      :is-open="isOpenModal"
      :title="modal.title"
      :body="modal.body"
      :price="modal.price"
      @close="modalSwitch"
    ></modal>

    <div v-for="(product, index) in products" :key="product.id">
      <img :src="product.img" alt="대표사진" class="room-image">
      <h4 @click="[getNameAndBodyForModal(index), modalSwitch()]">
        {{ index + 1 }} : {{ product.name }}</h4>
      <p> {{ product.price | money }} 만원</p>
      <button @click="increase(index)"> 허위 매물 신고 </button> <span> 신고수 : {{ product.alert }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Modal from './Modal';

export default {
  name: 'shop',
  components: {
    Modal,
  },
  data() {
    return {
      isOpenModal: false,
      modal: {
        title: '',
        body: '',
        price: 0,
      },
      products: [],
    };
  },
  filters: {
    money(number) {
      return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  methods: {
    getProduct() {
      axios.get('https://ip5ml4gvo2.execute-api.ap-northeast-2.amazonaws.com/v1/test')
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response);
          this.products = response.data.products.Items;
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
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
  created() {
    this.getProduct();
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

</style>
