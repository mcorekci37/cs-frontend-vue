<template>
  <div>
    <Heading active-page="Connection"/>
    Hey there! {{$store.getters.welcomeClient}}
    <button v-on:click="welcome">Welcome</button>
  </div>
</template>

<script>
import Heading from './Heading'
export default {
  name: 'ClientPage',
  components: {
    Heading
  },
  mounted () {
  },
  methods: {
    welcome () {
      alert(this.$store.getters.welcomeClient)
    }
  }
}
</script>

<style scoped>

</style>
