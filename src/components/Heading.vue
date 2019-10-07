<template>
    <div style="background-color: aqua">

        <b-nav id="nav" tabs align="center">
            <b-nav-item class="nav-item" id="hp" v-bind:active="page==='HomePage'" v-on:click="page='HomePage'" >
                <router-link to="/">Ana Sayfa</router-link>
            </b-nav-item>
            <b-nav-item class="nav-item" v-bind:active="page==='Inscription'" v-on:click="page='Inscription'">
                <router-link to="inscription">Kayıt Ol</router-link>
            </b-nav-item>
            <b-nav-item class="nav-item" v-bind:active="page==='Connection'" v-on:click="page='Connection'">
                <router-link to="connection">Giriş Yap</router-link>
            </b-nav-item>
        </b-nav>
    </div>

</template>

<script>
export default {
  name: 'Heading',
  props: {
    activePage: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      page: this.activePage
    }
  },
  methods: {
    Connection () {
      this.$router.push({name: 'Connection'})
    },
    Inscription () {
      this.$router.push({name: 'Inscription'})
    },
    HomePage () {
      this.$router.push({name: 'HomePage'})
    }
  }
}
</script>

<style scoped>
  a.nav-link{
    padding: 8px;
  }
  a{
    padding: 32px;
  }
  #nav{
    background-color: bisque;
  }
  a.nav-link{
    padding: 0px;
    border: 0;
    margin: 0;
  }
</style>
