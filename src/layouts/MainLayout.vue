<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="text-white" style="background-color: none;">
      <q-bar dense class="text-white" style="background-color: primary;">
        <div>10:00</div>
        <q-icon name="email" />
        <q-space />
        <q-icon name="signal_cellular_4_bar" />
        <q-icon name="signal_wifi_4_bar" />
        <div class="gt-xs">100%</div>
        <q-icon name="battery_full" />
      </q-bar>
      <q-toolbar>

        <q-toolbar-title class="q-ma-lg">
          <q-icon name="arrow_back_ios" size="xl"/>
        </q-toolbar-title>

        <div class="q-ma-md">
          <q-btn icon="settings"  unelevated size="lg" text-color="white" :to="{ name: 'configuracoes' }"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white text-black q-py-md">
        <div class="row justify-evenly">
          <div>
            <q-btn icon="account_box"  unelevated size="lg" text-color="black" :to="{ name: 'home' }"/>
          </div>
          <div>
            <q-btn icon="folder"  unelevated size="lg" text-color="black" :to="{ name: 'home' }"/>
          </div>
          <div>
            <q-btn icon="search"  unelevated size="lg" text-color="black" :to="{ name: 'home' }"/>
          </div>
          <div>
            <q-btn icon="perm_identity"  unelevated size="lg" text-color="black" :to="{ name: 'perfil' }"/>
          </div>
        </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {},

  props: {
    page: {
      type: String
    }
  },

  setup () {
    return {
    }
  }
})
</script>
