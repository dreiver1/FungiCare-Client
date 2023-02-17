<template>
  <q-page class="column justify-start bg-white">
    <div class="row col-10 justify-start">
      <q-btn color="white" unelevated text-color="black" icon="arrow_back_ios" class="q-pa-md q-mx-sm self-center" :to="{name: 'login'}"/>
    </div>
    <div class="flex flex-start">
      <q-item class="col-12 bg-white column flex-center items-center">
        <div class="text-center text-h4 q-ma-md text-white row">
          <p class="text-h6 text-black">Nome</p>
          <q-input v-model="nome" outlined class="q-mb-sm col-12" color="black" bg-color="white"/>
          <p class="text-h6 text-black">Email</p>
          <q-input v-model="email" outlined class="q-mb-sm col-12" color="black" bg-color="white"/>
          <p class="text-h6 text-black">Senha</p>
          <q-input v-model="password" outlined :type="isPwd ? 'password' : 'text'" class="q-mb-sm col-12" color="black" bg-color="white">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <p class="text-h6 text-black">Confirme sua senha</p>
          <q-input v-model="confirmPassword" outlined :type="isPwd ? 'password' : 'text'" class="q-mb-sm col-12" color="black" bg-color="white">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div class="row flex-center">
            <q-checkbox v-model="right" />
            <p class="text-caption text-black">Concordo com os termos de licenciamento.</p>
          </div>
          <div class="row flex-center">
            <q-checkbox v-model="right" class="col-2"/>
            <div class="col-10"><p class="text-caption text-black">Permito que meus dados sejam utilizados para melhorias na aplicação.</p></div>
          </div>
          <div class="row q-my-md col-12 flex-center">
            <div class="row col-10">
              <q-btn color="primary" rounded text-color="white" label="Começar" class="q-pa-md q-mx-sm self-center" style="width: 100%;" :to="{name: 'home'}"/>
            </div>
          </div>
        </div>
      </q-item>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'cadastroForm',
  setup () {
    return {
      password: ref(''),
      isPwd: ref(true),
      email: ref(''),
      confirmPassword: ref(''),
      nome: ref('')
    }
  }
})
</script>
