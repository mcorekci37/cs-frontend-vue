import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })
  ],
  state: {
    client: {
    },
    connected: false
  },
  getters: {
    getClient (state) {
      return state.client
    },
    welcomeClient (state) {
      return 'Welcome ' + state.client.name + ' ' + state.client.surname
    },
    getConnected (state) {
      return state.connected
    }
  },
  mutations: {
    // this.$store.commit('addMachine',machine)
    addMachine (state, machine) {
      state.client.machineList.push(machine)
    },
    setClient (state, client) {
      state.client = client
      state.connected = true
    },
    signOut (state) {
      state.client.name = ''
      state.client.surname = ''
      state.client.birthday = ''
      state.client.address = ''
      state.client.telNumber = ''
      state.client.mail = ''
      state.client.password = ''
      state.client.mandal = ''
      state.client.machineList = []
      state.client.announcementList = []
      state.client.taskList = []
      state.connected = false
    }
  },
  actions: {
    // this.$store.dispatch('addMachine',machine)
    addMachine (context, machine) {
      context.commit('addMachine', machine)
    },
    setClient (context, client) {
      context.commit('setClient', client)
    },
    signOut (context) {
      context.commit('signOut')
    }
  }
})
