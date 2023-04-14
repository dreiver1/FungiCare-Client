<template>
  <q-btn color="" text-color="black" flat dense size="xl" @click="onClick" v-bind:icon="inputId" />
</template>
<script>
import { defineComponent, ref, onMounted } from'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'darkMode',
  setup () {
    const $q = useQuasar();
    var darkMode = ref(false);
    let inputId = ref('light_mode');

    const onClick = ()=>{
      darkMode= ref(!darkMode.value);
      $q.dark.set(darkMode.value);
      if(darkMode.value == true){
        inputId.value = 'dark_mode'
      }else{
        inputId.value = 'light_mode'
      }
      $q.localStorage.set('darkMode', darkMode.value)
    }

    onMounted(()=>{
      let value = $q.localStorage.getItem('darkMode');
      darkMode.value = value
      $q.dark.set(darkMode.value);
      if(darkMode.value == true){
        inputId.value = 'dark_mode'
      }else{
        inputId.value = 'light_mode'
      }
    })

    return {
      darkMode,
      onClick,
      inputId
    }
  }
})
</script>
