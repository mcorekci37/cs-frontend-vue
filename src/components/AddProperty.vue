<template>
  <div>
    <b-container>
      <b-form @submit="onSubmit" @reset="onReset" @init="onInit" v-if="show">
        <b-row class="my-1" v-for="formInfo in formInfos" v-bind:key="formInfo.description">
          <b-col sm="1.1">
            <label :for="`type-${formInfo.type}`"><b>{{ formInfo.description }}:</b></label>
          </b-col>
          <b-col sm="2">
            <b-form-input required :id="`type-${formInfo.description}`" :type="formInfo.type" v-model="formData[formInfo.propName]">
            </b-form-input>
          </b-col>
        </b-row>
        <b-button type="submit" variant="primary">Özellik Ekle</b-button>
        <b-button type="reset" variant="danger">İptal</b-button>
        <b-button type="init" v-on:click="onInit" variant="danger">Init</b-button>
      </b-form>
    </b-container>
  </div>

</template>

<script>
export default {
  name: 'AddProperty',
  props: {
    machineId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      mId: this.machineId,
      formInfos: [
        {type: 'text', description: 'Tip ', propName: 'type'},
        {type: 'text', description: 'Voltaj ', propName: 'voltage'},
        {type: 'text', description: 'Dakika ', propName: 'minute'}
      ],
      formData: {
        type: '',
        voltage: '',
        minute: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      let self = this
      console.log(JSON.stringify(this.formData))
      fetch('http://localhost:8081/machines/' + this.mId, {
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

</style>
