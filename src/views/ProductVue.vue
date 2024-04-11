<template>
  <table class="table">
    <tr class="d-table-cell">
      <td class="d-table-cell">название</td>
      <td class="d-table-cell">{{product.title}}</td>
    </tr>
    <tr class="d-table-cell">
      <td class="d-table-cell">описание</td>
      <td class="d-table-cell"><img class="img-fluid" :src="product.images[0]" alt=""></td>
    </tr>
    <tr class="d-table-cell">
      <td class="d-table-cell">описание</td>
      <td class="d-table-cell">{{product.description}}</td>
    </tr>
    <tr class="d-table-cell">
      <td class="d-table-cell">рейтинг</td>
      <td class="d-table-cell">{{product.rating}}</td>
    </tr>
    <tr class="d-table-cell">
      <td class="d-table-cell">цена</td>
      <td class="d-table-cell">{{product.price}}</td>
    </tr>
  </table>

  <router-link class="btn btn-success" to="/products">товары</router-link>
</template>

<script>
export default {
  data(){
    return{
      product: null,
      id:null,
    }
  },
  created() {
    this.id = this.$route.params.id
    const url = 'https://dummyjson.com/products/' + this.id;
    fetch(url)
        .then(res => res.json())
        .then(data => this.product = data)
  }
}
</script>