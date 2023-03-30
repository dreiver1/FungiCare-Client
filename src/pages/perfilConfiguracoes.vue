<template>
    <q-page class="column justify-between" style="background-color: #087E05;">
        <q-list separator class="col-8" style="width: 100%">
          <q-item-label header>Dashboard</q-item-label>

          <q-item clickable v-ripple>
            <q-item-section center avatar>
              <q-icon name="settings" :to="{ name: 'home' }"></q-icon>
            </q-item-section>
            <q-item-section >
              <q-item-label>Configuração</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios"></q-icon>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section center avatar>
              <q-icon name="vpn_key"></q-icon>
            </q-item-section>
            <q-item-section >
              <q-item-label>Privacidade</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios"></q-icon>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section center avatar>
              <q-icon name="share"></q-icon>
            </q-item-section>
            <q-item-section >
              <q-item-label>Compartilhe</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios"></q-icon>
            </q-item-section>
          </q-item>
        </q-list>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'perfilConfiguracoes',
    data () {
      return {

      }
    }
    }
  )
  </script>  