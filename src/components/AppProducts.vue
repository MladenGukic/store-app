<template>
  <div class="blog">
    <h1> Products </h1>
    <div v-bind:key="index" v-for="(product, index) in products">
      <ul>
        <li>
          <p>Product: {{product.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { productService } from '../services/ProductService'

export default {
  name: 'AppProducts',
  data() {
    return {
      products:  productService.list()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
