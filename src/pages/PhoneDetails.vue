<template>
  <body>
    <phone-details>
    </phone-details>
  </body>
</template>

<script>
  import PhoneDetails from '../components/PhoneDetails.vue'

  export default {
    components: {
      PhoneDetails
    }
  }
</script>

<style scoped>
  @import "../style/bootstrap.css";
  @import "../style/phonedetails.css";
</style>
