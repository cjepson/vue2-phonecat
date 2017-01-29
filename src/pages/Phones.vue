<template>
  <body>
    <phone-list>
    </phone-list>
  </body>
</template>

<script>
  import PhoneList from '../components/PhoneList.vue'

  export default {
    components: {
      PhoneList
    }
  }
</script>

<style scoped>
  @import "../style/bootstrap.css";
  @import "../style/phones.css";
</style>
