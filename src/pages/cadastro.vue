<template>
  <q-page class="column justify-between" style="background-color: #087E05;">
    <div class="row justify-center self-center" >
      <q-img
          width="184px"
          height="139px"
          src="../assets/camera.png"
        />
    </div>
    <div class="flex flex-end">
      <q-item class="col-12 bg-white column flex-center items-center" style="border-radius: 30px 30px 0px 0px; min-height: 450px;">
        <q-img
          width="184px"
          height="139px"
          src="../assets/camera.png"
        />
        <div class="text-center text-subtitle2 q-ma-md">Tire uma foto para podermos identificar que tipo de praga que o aflige!</div>
        <div class="q-my-md">
          <q-btn color="primary" rounded text-color="white" label="Tirar foto" class="q-pa-md q-mx-sm" size="lg"/>
          <q-btn color="secondary" rounded text-color="white" label="selecionar" class="q-pa-md q-mx-sm" size="lg"/>
        </div>
      </q-item>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
