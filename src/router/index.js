import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import FormInscription from '../components/FormInscription'
import HomePage from '../components/HomePage'
import Connection from '../components/Connection'
import ClientPage from '../components/ClientPage'
import Profile from '../components/Profile'
import Announcements from '../components/Announcements'
import Machines from '../components/Machines'
import Demandes from '../components/Demandes'
import BuyMandal from '../components/BuyMandal'
import ServiceHistory from '../components/ServiceHistory'
import CommentBox from '../components/CommentBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: FormInscription
    },
    {
      path: '/connection',
      name: 'Connection',
      component: Connection
    },
    {
      path: '/clients',
      name: 'ClientPage',
      component: ClientPage
    },
    {
      path: '/profil',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/ilanlarim',
      name: 'Announcements',
      component: Announcements
    },
    {
      path: '/makinelerim',
      name: 'Machines',
      component: Machines
    },
    {
      path: '/isteklerim',
      name: 'Demandes',
      component: Demandes
    },
    {
      path: '/mandal-al',
      name: 'BuyMandal',
      component: BuyMandal
    },
    {
      path: '/hizmet-gecmisim',
      name: 'ServiceHistory',
      component: ServiceHistory
    },
    {
      path: '/yorum-kutusu',
      name: 'CommentBox',
      component: CommentBox
    }
  ],
  mode: 'history'
})
