<template>
  <q-toggle v-model="darkMode" color="green" />
</template>
<script>
const { defineComponent, ref } = require('vue');
export default defineComponent({
  name: 'darkModeToggle',
  data () {
    const darkMode = ref(false)
    return {
      darkMode
    }
  }
})
</script>