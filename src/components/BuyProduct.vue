<template>
    <div>
        <h1>BU!</h1>

        Product: {{product.name}} | Quantity: {{product.quantity}}

        <div> 
            <template v-if="product.quantity">
            <div>
                <select class="form-control" id="customer" v-model="selectedCustomer">
                    <option disabled value="">Please select one</option>
                    <option v-for="customer in customers" v-bind:key="customer.id" :value="customer">
                        {{customer.fullName}}
                    </option>
                </select>
                <button class="btn btn-primary mr-2" @click="purchase"> Confirm </button>
                <router-link class="btn btn-light" to="/products">Cancel</router-link>
            </div>
            </template>
            <template v-else>
                <router-link class="btn btn-light" to="/products"> Back to products </router-link>
            </template>
        </div>
    </div>
</template>

<script>

import { productService } from '../services/ProductService'
import { customerService } from '../services/CustomerService'

export default {
    data() {
        return {
            selectedCustomer: '',
            customers: customerService.list()
        }
    },

    computed: {
        product() {
            return productService.find(parseInt(this.$route.params.id))
        }
    },

    methods: {
        purchase() {
            if(!this.selectedCustomer) { 
                alert('Please select customer.')
            } else {
            customerService.addProductToCustomer(this.selectedCustomer, this.product)
            productService.decrement(this.product)
            }
        }
    }
}
</script>