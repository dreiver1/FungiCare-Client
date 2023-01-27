<template>
  <q-page class="column justify-start" style="background-color: #087E05;">
    <!-- <div class="row flex-center" style="margin-top: ">
      <div class="text-h6">Configuração</div>
    </div> -->
    <div class="row flex-center q-my-lg">
      <q-item class="col-10 bg-white column justify-center items-center" style="min-height: 25%; max-height: 35%">
        <q-list separator class="col-8" style="width: 100%">
          <q-item-label header>Linguagem</q-item-label>

          <q-item clickable v-ripple>
            <q-item-section >
              <q-item-label>Idioma</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios"></q-icon>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section >
              <q-item-label>Segundo Idioma</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios"></q-icon>
            </q-item-section>
          </q-item>
        </q-list>
      </q-item>
    </div>
    <div class="row flex-center">
      <q-item class="col-10 bg-white column justify-center items-center" style="min-height: 25%; max-height: 35%;">
        <q-list separator class="col-8" style="width: 100%">
          <q-item-label header>Configurações adicionais</q-item-label>

          <q-item clickable v-ripple>
            <q-item-section >
              <q-item-label>Modo escuro</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios"></q-icon>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section >
              <q-item-label>Notificações</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios"></q-icon>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section >
              <q-item-label>Tamanho do texto</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios"></q-icon>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section >
              <q-item-label>Política de Privacidade</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios"></q-icon>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section >
              <q-item-label>Termos e Condições</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios"></q-icon>
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
  name: 'configuracoesPage',
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
