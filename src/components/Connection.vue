<template>
  <div>
    <Heading activePage="Connection"/>
    <div class="bg"
         v-bind:style="{ 'background-image': 'url(' + 'http://www.ailehayati.com/wp-content/uploads/2016/12/sadnews.jpg' + ')' }"
    >
    </div>

    <b-container style="padding-left: 25%;padding-right: 30%;padding-top: 10%" fluid>
      <b-form @submit="onSubmit" @reset="onReset" @init="onInit" v-if="show">
        <b-row class="my-1" v-for="formInfo in formInfos" v-bind:key="formInfo.description">
          <b-col sm="3">
            <label :for="`type-${formInfo.type}`"><b>{{ formInfo.description }}:</b></label>
          </b-col>
          <b-col sm="9">
            <b-form-input
              required
              :id="`type-${formInfo.description}`"
              :type="formInfo.type"
              v-bind:autocomplete="formInfo.type"
              v-model="formData[formInfo.propName]"
            >
            </b-form-input>
          </b-col>
        </b-row>
        <b-form-text id="input-formatter-help" v-if="error">
          Mail or password you have entered are not valid. Please try again.
        </b-form-text>
        <b-button type="submit" variant="primary">Giriş Yap</b-button>
        <b-button type="reset" variant="danger">Sıfırla</b-button>
        <b-button type="init" v-on:click="onInit" variant="danger">Init</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import Heading from './Heading'
export default {
  name: 'Connection',
  components: {
    Heading
  },
  data () {
    return {
      formInfos: [
        {type: 'email', description: 'E-mail ', propName: 'mail'},
        {type: 'password', description: 'Şifre ', propName: 'password'}
      ],
      formData: {
        mail: '',
        password: ''
      },
      show: true,
      error: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      let self = this
      let mail = this.formData['mail']
      let password = this.formData['password']
      console.log(JSON.stringify(this.formData))
      fetch('http://localhost:8081/clients/' + mail + '/' + password, {
        method: 'POST',
        body: JSON.stringify(this.formData),
        headers: {
          'Content-Type': 'Application/json',
          'Access-Control-Allow-Origin': 'http://localhost:8080'
        }
      })
        .then(function (response) {
          console.log('abc')
          console.log(response)
          console.log('abc')
          return response.json()
        })
        .then(function (myJson) {
          console.log(JSON.stringify(myJson))
          self.$store.dispatch('setClient', myJson)
          console.log(self.$store.getters.client)
          self.onReset(evt)
          self.$router.push({ name: 'Profile' })
        })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      for (let formDataKey in this.formData) {
        this.formData[formDataKey] = ''
      }

      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    onInit (evt) {
      this.formData['mail'] = 'omer@karakose'
      this.formData['password'] = '123'
    }
  }
}
</script>
<style scoped>
/*.form-control{
  color: #846c41;
  display : flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  margin: 15px;

}*/
  .bg{
    /*making div to cover all page*/
    opacity:0.3;
    background-color:#ccc;
    position:fixed;
    width:100%;
    top:0px;
    left:0px;
    z-index:-1;
    /* Full height */
    height: 100%;

  }
</style>
