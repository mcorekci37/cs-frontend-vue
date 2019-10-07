<template>
  <div>
    <Heading activePage="Inscription"/>
    <div class="bg"
         v-bind:style="{ 'background-image': 'url(' + 'http://www.ailehayati.com/wp-content/uploads/2016/12/sadnews.jpg' + ')' }"
    >
    </div>
    <b-container  style="padding-left: 25%;padding-right: 30%;padding-top: 15px" fluid>

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row class="my-1" v-for="formInfo in formInfos" v-bind:key="formInfo.description">
          <b-col sm="3">
            <label :for="`type-${formInfo.type}`"><b>{{ formInfo.description }}:</b></label>
          </b-col>
          <b-col sm="9">
            <b-form-input
              v-bind:autocomplete="formInfo.type"
              required
              v-model="formData[formInfo.propName]"
              :id="`type-${formInfo.description}`"
              :type="formInfo.type"
            >
            </b-form-input>
          </b-col>
        </b-row>
        <b-form-text id="input-formatter-help" v-if="!passwordMatched">
          Passwords you have entered did not matched
        </b-form-text>
        <b-button type="submit" variant="primary">Kaydol</b-button>
        <b-button type="reset" variant="danger">Sıfırla</b-button>
        <button type="init" v-on:click="onInit" variant="danger">Init</button>

      </b-form>
    </b-container>
    <!--div v-for="f in formInfos" v-bind:key="f.description">{{f.value}}</div-->
  </div>
</template>

<script>
import Heading from './Heading'
export default {
  name: 'FormInscription',
  components: {
    Heading
  },
  data () {
    return {
      formInfos: [
        {type: 'text', description: 'Ad ', propName: 'name'},
        {type: 'text', description: 'Soyad ', propName: 'surname'},
        {type: 'date', description: 'Doğum Tarihi ', propName: 'birthday'},
        {type: 'text', description: 'Adres ', propName: 'address'},
        {type: 'tel', description: 'Tel ', propName: 'telNumber'},
        {type: 'email', description: 'E-mail ', propName: 'mail'},
        {type: 'password', description: 'Şifre ', propName: 'password'},
        {type: 'password', description: `Şifre Tekrar `, propName: 'repassword'}
      ],
      formData: {
        name: '',
        surname: '',
        birthday: '',
        address: '',
        telNumber: '',
        mail: '',
        password: '',
        repassword: ''
      },
      show: true,
      passwordMatched: true
    }
  },
  computed: {
    formValues: function () {
      return this.formInfos.map(function (item) {
        return item.value
      }).splice(0, this.formInfos.length - 1)
    }

  },
  methods: {
    onSubmit (evt) {
      let self = this
      evt.preventDefault()
      this.checkPassword()
      //                let x=Object.assign({}, this.formValues);
      if (this.passwordMatched) {
        console.log(JSON.stringify(this.formData))
        fetch('http://localhost:8081/clients', {
          method: 'POST',
          body: JSON.stringify(this.formData),
          headers: {
            'Content-Type': 'Application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8080'
          }
        })
          .then(function (response) {
            console.log(response)
            self.onReset(evt)
            self.passwordMatched = true
            self.$router.push({ name: 'Connection' })
            // Do something with response
          })
      }
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
      this.formData['name'] = 'Ömer'
      this.formData['surname'] = 'Karaköse'
      this.formData['birthday'] = '1994-01-01'
      this.formData['address'] = 'Ümraniye'
      this.formData['telNumber'] = '12345678'
      this.formData['mail'] = 'omer@karakose'
      this.formData['password'] = '123'
    },
    checkPassword () {
      this.passwordMatched = this.formData['password'] === this.formData['repassword']
    }
  }
}
</script>

<style scoped>
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
