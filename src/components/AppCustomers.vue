<template>
  <div class="blog">
      <h1> Customers </h1>
  </div>
</template>

<script>
import { customerService } from '../services/CustomerService'
export default {
  data () {
    return {
      customers: customerService.list()
    }
  },


  created () {
  }
}
</script>

