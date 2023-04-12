<template>
  <q-toggle
        v-model="darkMode"
        color="pink"
        icon="mail"
        label="Same Icon for each state"
      />
</template>
<script>
import { defineComponent, ref, watch } from'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'darkMode',
  setup () {
    const $q = useQuasar();
    const darkMode = ref(false);
    watch(darkMode, (darkMode)=>{
      console.log("darkmode", darkMode);
      $q.dark.set(darkMode);
    });
    return {
      darkMode
    }
  }
})
</script>