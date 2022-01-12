<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <bookdisplay />
  </div>
</template>

<script>
// @ is an alias to /src
import bookdisplay from '@/components/bookdisplay.vue'

export default {
  name: 'Home',
  components: {
    bookdisplay 
  }
}
</script>

    Bookdisplay