<template>
  <div class="home">
    <HelloWorld msg="Vue + Antd"/>

    <a-button type="primary">Primary</a-button> &nbsp;
    <a-button>Default</a-button> &nbsp;
    <a-button type="dashed">Dashed</a-button> &nbsp; 
    <a-button type="danger">Danger</a-button> 
    <br>
    <br>


<a-month-picker /> &nbsp;
    <a-select defaultValue="pt_BR" style="width: 120px" @change="handleChange">
      <a-select-option value="pt_BR" >Português</a-select-option>
      <a-select-option value="en_GB" >Inglês</a-select-option>
      <a-select-option value="es_ES" >Espanhol</a-select-option>
    </a-select>


 

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import EventBus from '@/utils/eventBus'

import ptBR from 'ant-design-vue/lib/locale-provider/pt_BR';
import enGB from 'ant-design-vue/lib/locale-provider/en_GB';
import esES from 'ant-design-vue/lib/locale-provider/es_ES';

export default {
  name: 'home',
  data() {
    return {
      langs:{
        pt_BR: ptBR,
        en_GB: enGB,
        es_ES: esES
      }
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    handleChange(value){
      EventBus.$emit('CHANGE_LOCALE',this.langs[value])
    }
  }
}
</script>
