<template>
  <div class="blog">
      <form @submit.prevent="add()" class="form-control">
          <input placeholder="Your Full Name" id="full-name" type="text" name="full-name" v-model="form.fullName">
          <input placeholder="Your email" id="email" type="email" name="email" v-model="form.email">
          <button type="submit">Add</button>
      </form>  
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
      customers: customerService.list(),

        form: {fullName: '', email: '', products: [] }
    }
  },

  methods: {
      remove(customer) {
          customerService.remove(customer)
      },

      add() {
          customerService.add(this.form)
      }
  },


  created () {
  }
}
</script>

