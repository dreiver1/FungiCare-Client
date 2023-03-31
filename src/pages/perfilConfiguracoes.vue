<template>
  <q-page class="q-col-gutter-y-lg"  style="background-color: #087E05;">
    <div class="flex flex-center">
     <div class="row col-12">
       <q-avatar size="100px" font-size="52px" color="white" text-color="primary" icon="directions" />
     </div>
    </div>

    <div class="row flex-center">
      <q-item class="col-10 bg-white column justify-center items-center" style="min-height: 25%; max-height: 35%">
        <q-list separator class="col-8" style="width: 100%">
          <q-item-label header>Login</q-item-label>

          <q-item clickable v-ripple>
            <q-item-section >
              <q-item-label>Username: Ci**caso24</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios"></q-icon>
            </q-item-section>

          </q-item>
          <q-item clickable v-ripple>
            <q-item-section >
              <q-item-label class="text-secondary">Alterar nome de usuário</q-item-label>
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
          <q-item-label header>E-mail</q-item-label>
          <q-item clickable v-ripple>
            <q-item-section >
              <q-item-label>Username: Ci*******@gmail.com</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios"></q-icon>
            </q-item-section>

          </q-item>
          <q-item clickable v-ripple>
            <q-item-section >
              <q-item-label class="text-secondary">Alterar e-mail</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios"></q-icon>
            </q-item-section>
          </q-item>
        </q-list>
      </q-item>
    </div>

    <div class="row flex-center q-mb-lx">
      <q-item class="col-10 bg-white column justify-center items-center" style="min-height: 25%; max-height: 35%">
        <q-list separator class="col-8" style="width: 100%">

          <q-item-label header>Senha</q-item-label>

          <q-item clickable v-ripple>
            <q-item-section >
              <q-item-label class="text-secondary">Alterar pergunta de segurança</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios"></q-icon>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section >
              <q-item-label class="text-secondary">Alterar senha</q-item-label>
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
  name: 'minhaConta',
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
