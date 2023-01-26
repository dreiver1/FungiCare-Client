<template>
  <q-page class="column justify-between" style="background-color: #087E05;">
    <div class="flex flex-start" >
      <q-item class="col-12 self-start" >
        <div class="text-h4 q-mx-sm" style="color: white;">Olá, Cicrano!</div>
      </q-item>
    </div>
    <div class="flex flex-end">
      <q-item class="col-12 bg-white column justify-center items-center" style="width: 100%; border-radius: 30px 30px 0px 0px; min-height: 450px;">
        <q-img
          width="184px"
          height="139px"
          src="../assets/camera.png"
        />
        <div class="text-center text-subtitle2 q-ma-md">Tire uma foto para podermos identificar que tipo de praga que o aflige!</div>
        <div class="q-my-md">
          <q-btn color="green" rounded text-color="black" label="Standard" class="q-pa-md q-mx-sm" size="lg"/>
          <q-btn color="blue" rounded text-color="black" label="Standard" class="q-pa-md q-mx-sm" size="lg"/>
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
