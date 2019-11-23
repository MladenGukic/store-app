<template>
  <div class="blog">
    <h1> Products </h1>
  <div>
    <input class="form-control" type="text" v-model="search" placeholder="Search Products"/>
  </div>
    <div v-bind:key="index" v-for="(product, index) in filteredProducts">
      <ul>
        <li>
          Product: {{product.name}} 
          <button @click="incQuantity(product)" type="button" class="btn btn-outline-success btn-sm">+</button>
          <button @click="decQuantity(product)" type="button" class="btn btn-outline-danger btn-sm">-</button>  |
          {{product.quantity}}
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
      products:  productService.list(),
      search: ''
    }
  },

  methods: {
    incQuantity(product) {
      productService.increment(product)
    },

    decQuantity(product) {
      productService.decrement(product)
    }

  },

  computed: {
    filteredProducts: function() {
      return this.products.filter((product) => {
        return product.name.toLowerCase().match(this.search.toLowerCase())
      })
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
