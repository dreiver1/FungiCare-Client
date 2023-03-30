<template>
  <q-page class="column justify-between bg-white">
    <div class="column self-center q-my-xl" >
      <q-img
          width="198px"
          height="198px"
          src="../assets/fungo.png"
        />
    </div>
    <div class="flex flex-center text-center">
      <q-item class="col-12 bg-primary column flex-center items-center" style="border-radius: 30px 30px 0px 0px; min-height: 400px;">
        <div class="text-center text-h4 q-ma-md text-white row">
          <q-input v-model="email" label="Email" filled class="q-my-md col-12" color="black" bg-color="white"/>
          <q-input v-model="password" label="Senha" filled :type="isPwd ? 'password' : 'text'" hint="Senha" class="col-12" color="black" bg-color="white">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        <div class="row q-my-md">
          <q-btn color="white" rounded text-color="accent" label="Entrar" class="q-pa-md q-mx-sm " size="lg" :to="{name: 'home'}"/>
          <q-btn color="white" rounded text-color="accent" label="Criar conta" class="q-pa-md q-mx-sm" size="lg" :to="{name: 'cadastro'}"/>
        </div>
      </q-item>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'loginPage',
  setup () {
    return {
      password: ref(''),
      isPwd: ref(true),
      email: ref('')
    }
  }
})
</script>
