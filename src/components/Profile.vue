<template>

<div class="bg"
       v-bind:style="{ 'background-image': 'url(' + 'http://www.ailehayati.com/wp-content/uploads/2016/12/sadnews.jpg' + ')' }"
>

<body>

  <div class="d-flex" id="wrapper">

    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">{{$store.getters.welcomeClient}}</div>
      <div class="list-group list-group-flush">
        <a href="#" v-on:click="sideBar='home'" class="list-group-item list-group-item-action bg-light">Ana Sayfa</a>
        <a href="#ilanlarim" v-on:click="sideBar='announcements'" class="list-group-item list-group-item-action bg-light">İlanlarım</a>
        <a href="#makinelerim" v-on:click="sideBar='machines'" class="list-group-item list-group-item-action bg-light">Makinelerim</a>
        <a href="#isteklerim" v-on:click="sideBar='demandes'" class="list-group-item list-group-item-action bg-light">İsteklerim</a>
        <a href="#mandal-al" v-on:click="sideBar='buyMandal'" class="list-group-item list-group-item-action bg-light">Mandal Al</a>
        <a href="#hizmet-gecmisim" v-on:click="sideBar='serviceHistory'" class="list-group-item list-group-item-action bg-light">Hizmet Geçmişim</a>
        <a href="#yorum-kutusu" v-on:click="sideBar='commentBox'" class="list-group-item list-group-item-action bg-light">Yorum Kutusu</a>
      </div>
    </div>

    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <NavBar/>
      <ClientPage v-if="sideBar==='home'"/>
      <Announcements v-else-if="sideBar==='announcements'"/>
      <Machines v-else-if="sideBar==='machines'"/>
      <Demandes v-else-if="sideBar==='demandes'"/>
      <BuyMandal v-else-if="sideBar==='buyMandal'"/>
      <service-history v-else-if="sideBar==='serviceHistory'"/>
      <CommentBox v-else-if="sideBar==='commentBox'"/>
    </div>
    <!-- /#page-content-wrapper -->

  </div>

  </body>
</div>
</template>

<script>
import NavBar from './NavBar'
import Machines from './Machines'
import ClientPage from './ClientPage'
import Announcements from './Announcements'
import Demandes from './Demandes'
import BuyMandal from './BuyMandal'
import ServiceHistory from './ServiceHistory'
import CommentBox from './CommentBox'
export default {
  name: 'Profile',
  components: {
    CommentBox,
    ServiceHistory,
    BuyMandal,
    Demandes,
    Announcements,
    ClientPage,
    Machines,
    NavBar
  },
  data () {
    return {
      sideBar: 'home'
    }
  },
  mounted () {
    if (!this.$store.getters.getConnected) {
      alert('Henüz Giriş Yapmadınız. Lütfen Giriş Yapınız')
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'Connection'})
    }
  }
}
</script>
<style scoped>
  body {
    overflow-x: hidden;
  }

  #sidebar-wrapper {
    min-height: 100vh;
    margin-left: -15rem;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
  }

  #sidebar-wrapper .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
  }

  #sidebar-wrapper .list-group {
    width: 15rem;
  }

  #page-content-wrapper {
    min-width: 100vw;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: 0;
  }

  @media (min-width: 768px) {
    #sidebar-wrapper {
      margin-left: 0;
    }

    #page-content-wrapper {
      min-width: 0;
      width: 100%;
    }

    #wrapper.toggled #sidebar-wrapper {
      margin-left: -15rem;
    }
  }
  .bg {
    /* The image used */

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    /*making div to cover all page*/
    opacity:0.9;
    background-color:#ccc;
    position:fixed;
    width:100%;
    top:0px;
    left:0px;
    z-index:1000;
    /* Full height */
    height: 100%;
  }
</style>
