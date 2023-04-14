<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="text-white bg-transparent" >
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
<style>
.body--light {
  background: green;
}

.body--dark {
  background: black;

}
</style>
