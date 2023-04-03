<template>
  <q-page class="column justify-between" style="background-color: #087E05;">
    <canvas style="display: none;" id="foto"></canvas>
    <div class="flex flex-center" >
      <q-item class="col-12 self-center" >
        <div class="text-h4 q-mx-lg" style="color: white;">Olá, Cicrano!</div>
      </q-item>
    </div>
    <div class="col-12 flex flex-center">
      <q-item class="col-12 bg-white column justify-center items-center" style="border-radius: 30px 30px 0px 0px; min-height: 450px;">
        <q-img
          width="184px"
          height="139px"
          src="../assets/camera.png"
        />
        <div class="text-center text-subtitle2 q-ma-md">Tire uma foto para podermos identificar que tipo de praga que o aflige!</div>
        <q-item class="q-my-md column justify-between col-4">
          <q-btn color="primary" rounded outlined :to="{ name: 'camera' }" size="lg" label="Camera"/>
          <q-file 
            bg-color="secondary" 
            accept=".jpg, image/*" 
            append v-model="files" 
            rounded outlined 
            text-color="white" 
            label="selecionar" 
            style="text-align: center; justify-content: center;" 
            class="col-12 q-my-sm" 
            @update:model-value="takePhoto" 
            ref="imageCapture"
          />
          <div class="canvas">
            <img id="image" />
        </div>
        </q-item> 
      </q-item>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    return {
      files: ref(null)
    }
  },
  data () {
    var foto
    return {
      foto
    }
  },
  methods: {
    takePhoto(event) {
      const foto = document.querySelector("#image")
      foto.src = this.files.nome
    }
  }
})
</script>