<template>
  <div class="bg"
       v-bind:style="{ 'background-image': 'url(' + 'http://www.ailehayati.com/wp-content/uploads/2016/12/sadnews.jpg' + ')' }"
  >
    <button id="btn-login" v-on:click="login">Giriş Yap</button>
    <button id="btn-signin" v-on:click="signin">Kayıt Ol</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      inscription: false
    }
  },
  methods: {
    login () {
      console.log('Log in')
      this.$router.push({name: 'Connection'})
    },
    signin () {
      console.log('Sign in')
      this.$router.push({name: 'Inscription'})
    }
  }
}
</script>
<style scoped>
  .bg {
    /* The image used */

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    /*making div to cover all page*/
    opacity:0.8;
    background-color:#ccc;
    position:fixed;
    width:100%;
    top:0px;
    left:0px;
    z-index:1000;
    /* Full height */
    height: 100%;
  }
  #btn-login{
    background-color: aliceblue;
    position: inherit;
    right: 14%;
    top: 30%;
    font-size: 48px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    padding: 10px 30px 10px 30px;
  }
  #btn-login:hover{
    background-color: black;
    color: white;
  }
  #btn-signin{
    background-color: aquamarine;
    position: inherit;
    left: 20%;
    top: 50%;
    font-size: 48px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    padding: 10px 30px 10px 30px;
  }
  #btn-signin:hover{
    background-color: black;
    color: white;
  }
</style>
