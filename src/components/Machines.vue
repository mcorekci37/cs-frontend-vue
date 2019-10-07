<template>
  <div>
    <ul>
      <li class="machines" v-for="m in ($store.getters.getClient.machineList)" :title="m | showDetailMachine" v-bind:key="m.id">
        <button class="triangles" v-on:click="showProperties(m)" href="#">▼</button>
        {{m.description}}
        <!--a v-on:click="clicked=m.description">{{m.description}}</a-->
        <ul v-if="clicked===m.description">
          <li v-for="p in m.propertyList" v-bind:key="p.id" :title="p | showDetailProperty">{{p.type}}</li>
          <button class="propertyButtons" v-on:click="addProperty(m)">+ Özellik Ekle</button>
          <AddProperty :machineId="m.id"/>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import AddProperty from './AddProperty'
export default {
  name: 'Machines',
  components: {
    AddProperty
  },
  methods: {
    showProperties (m) {
      this.clicked = this.clicked === m.description ? '' : (this.clicked = m.description)
    }
  },
  filters: {
    showDetailMachine (m) {
      return 'Marka: ' + m.mark + ', Model: ' + m.model + ', Kapasite: ' + m.capacity
    },
    showDetailProperty (p) {
      return 'Voltaj: ' + p.voltage + ', Dakika: ' + p.minute
    }
  },
  data () {
    return {
      clicked: ''
    }
  },
  mounted () {}
}
</script>

<style scoped>
.asagi-ok {
  width: 0;
  height: 0;
}
.triangle-down {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid red;
}
.machines {
  list-style: none;
}
.triangles {
  padding: 0;
  border: none;
  background: none;
  outline: none;
  color: green;
}
.propertyButtons {
  background-color: darkturquoise;
  color: white;
  font-size: 15px;
  padding: 5px;
  border-radius: 12px;
  border: 2px solid rgb(0, 160, 209);
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.propertyButtons:hover {
  color: darkturquoise;
  background-color: white;
}
</style>
