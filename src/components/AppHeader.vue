<template>
   <div>
      <button v-show="isLoggedIn">Logout</button>
   </div>
</template>

<script>
export default {
   data() {
      return {
         isLoggedIn: false
      }
   }
}
</script>

<style scoped>

</style>
