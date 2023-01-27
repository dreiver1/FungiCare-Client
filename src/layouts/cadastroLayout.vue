<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="text-white" style="background-color: primary;">
      <q-bar dense class="text-white" style="background-color: primary;">
        <div>10:00</div>
        <q-icon name="email" />
        <q-space />
        <q-icon name="signal_cellular_4_bar" />
        <q-icon name="signal_wifi_4_bar" />
        <div class="gt-xs">100%</div>
        <q-icon name="battery_full" />
      </q-bar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    return {
    }
  }
})
</script>
