<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <h4> {{ products[0] }}</h4>
      <p>{{ prices[0] }} 만원</p>
    </div>

    <div>
      <h4> {{ products[1] }}</h4>
      <p>{{ prices[1] }} 만원</p>
    </div>

    <div>
      <h4> {{ products[2] }}</h4>
      <p>{{ prices[2] }} 만원</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      products: ['역삼동원룸', '천호동원룸', '구미동원룸'],
      prices: [50, 60, 70],
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
