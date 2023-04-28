<template>
  <q-page class="column justify-between col-12" id="page">
    <VueSpeechSynthesis :text="'Olá, mundo!'" :voice="{ name: 'Português (Brasil)' }" />
    <div class="col-2 text-center " style="color: white; font-weight: bold;">
      <div class="text-h3 col-2 text-center ">
        Fungo detectado
      </div>
    </div>
    <div class="flex justify-around col-6 self-center" style="width: 80%;">
      <img src="" alt="imagem-do-quasar" id="image"
        style="object-fit: contain; border: 5px solid white; width: 100%; border-radius: 5%;">
    </div>
    <q-item class="col-4 lista column justify-center items-center self-end" style="border-radius: 30px 30px 0px 0px;">
      <div class="text-h3 col-2 text-center " style="color: black; font-weight: bold;">Cordyceps brain infection (CBI)
      </div>
      <div class="text-h6 text-center"> Quando um hospedeiro é infectado, o fungo invade o cérebro e passa a controlar
        seus movimentos e comportamentos, transformando-os em criaturas violentas conhecidas como "infectados".</div>
    </q-item>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { VueSpeechSynthesis } from '@codekraft-studio/vue-speech';



export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      enableCamera: false,
      cameraStart: false,
      imageCapture: null,
      track: null
    }
  },
  onMounted() {
  },
  mounted() {
    const image = localStorage.getItem('imageData');
    const img = document.querySelector("#image");
    img.src = image;
  },
  components: {
    VueSpeechSynthesis
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

.body--dark .lista {
  background: white;
  color: black;
}
</style>