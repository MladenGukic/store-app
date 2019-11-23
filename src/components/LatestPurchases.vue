<template>
  <div>
    <h1> LatestPurchases </h1>
    
    <p>{{customer.fullName}} | email : {{customer.email}}</p>

    
    
  </div>
</template>

<script>
import { customerService } from '../services/CustomerService'

export default {
  name: 'LatestPurchases',
    data() {
        return {
          
        }
    },


    computed: {   
customer() {
      return customerService.find(parseInt(this.$route.params.id));
    }
}
}
// this.$route.params.id
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
