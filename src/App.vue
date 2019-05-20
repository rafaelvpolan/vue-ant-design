<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view/>
    </a-locale-provider>
  </div>
</template>

<script>

import ptBR from 'ant-design-vue/lib/locale-provider/pt_BR';
import EventBus from '@/utils/eventBus';

export default {
  data() {
    return {
      locale: ptBR
    }
  },
  created(){
    EventBus.$on('CHANGE_LOCALE',(lang)=>{
    
      this.locale=(lang?lang:ptBR)
    
    });
  }

}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
