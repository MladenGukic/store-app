<template>
  <div class="blog">
      <h1> Customers </h1>
  <div v-bind:key="index" v-for="(customer, index) in customers">
      <ul>
          <li>
              Customer: {{customer.fullName + ' ' + customer.email}}
                <button @click="remove(customer)" class="btn btn-primary"> Remove </button>
          </li>
      </ul>
  </div>
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

  methods: {
      remove(customer) {
          customerService.remove(customer)
      }
  },


  created () {
  }
}
</script>

