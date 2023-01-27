<template>
  <q-page class="column justify-end bg-white">
    <div class="column self-center q-mb-xl" >
      <q-img
          width="198px"
          height="198px"
          src="../assets/fungo.png"
        />
    </div>
    <div class="flex flex-end">
      <q-item class="col-12 bg-primary column flex-center items-center" style="border-radius: 30px 30px 0px 0px; min-height: 400px;">
        <div class="text-center text-h4 q-ma-md text-white">
          Cadastre-se agora!
        </div>
        <div class="text-center text-subtitle2 q-ma-md text-white">
          Venha identificar e entender os diferentes tipos de fungos conosco!
        </div>
        <div class="q-my-md">
          <q-btn color="white" rounded text-color="accent" label="Avançar >" class="q-pa-md q-mx-sm" size="lg" :to="{name: 'home'}"/>
        </div>
      </q-item>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'cadastroPage'
})
</script>
