<template>
  <q-page class="column justify-evenly">
    <div class="flex flex-center">
     <div class="row col-12">
       <q-icon name="person" color="white" size="xl"/>
       <div class="text-h4 q-ml-sm text-white">Cicrano</div>
       <div class="column justify-start">
        <q-btn icon="edit" unelevated size="xs" text-color="white" :to="{ name: 'edit' }"/>
       </div>
     </div>
    </div>
    <div class="row flex-center">
      <q-item class="col-10 column justify-center items-center" style="min-height: 25%; max-height: 35%">
        <q-list separator class="col-8 " style="width: 100%">
          <q-item-label header>Dashboard</q-item-label>

          <q-item clickable v-ripple :to="{ name: 'conta' }">
            <q-item-section center avatar>
              <q-icon name="settings"></q-icon>
            </q-item-section>
            <q-item-section >
              <q-item-label >Configuração</q-item-label>
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
      </q-item>
    </div>
    <div class="row flex-center q-mb-xl">
      <q-item class="col-10 column justify-center items-center" style="min-height: 25%; max-height: 35%;">
        <q-list separator class="col-8" style="width: 100%">
          <q-item-label header>Dashboard</q-item-label>

          <q-item clickable v-ripple>
            <q-item-section class="">
              <q-item-label>Mudar para outra conta</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple :to="{name: 'login'}">
            <q-item-section class="text-red">
              <q-item-label>Sair</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-item>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
const route = useRouter()
export default defineComponent({
  name: 'IndexPage',
  data () {
    const goTo = (rota) => {
      route.push({ name: rota })
    }
    return {
      goTo
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

.body--light .lista {
  background: white;
}

.body--dark .lista {
  background: white;
  color: black;
}

.body--dark .lista {
  color: black;
}

</style>