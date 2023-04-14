<template>
  <q-page class="column justify-between " >
    <div class="flex flex-center" >
      <q-item class="col-12 self-center" >
        <div class="text-h4 q-mx-lg">Olá, Beltrano!</div>
      </q-item>
    </div>
    <div class="col-12 flex flex-center bang">
      <q-item class="col-12 lista column justify-center items-center" style="border-radius: 30px 30px 0px 0px; min-height: 450px;">
        <q-img
          width="184px"
          height="139px"
          src="../assets/camera.png"
        />
        <div class="text-center text-subtitle2 q-ma-md">Tire uma foto para podermos identificar que tipo de praga que o aflige!</div>
        <div class="flex flex-center self-end">
          <darkMode class="darkmode col-2"/>
        </div>
        <q-item class="q-my-md flex justify-around col-4">
          <q-btn class="camera" text-color="white" rounded outlined :to="{ name: 'camera' }" size="lg" label="Camera"/>
            <q-file bg-color="secondary" rounded outlined label-color="white"  label="SELECIONAR" :label-color="white" class="col-5 q-my-lm" :input-style="{ font_size: '36px', fontWeight: 'bold' }" ref="imageCapture"/>
          </q-item>
        </q-item>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import darkMode from 'src/components/darkMode.vue'

export default defineComponent({
  name: 'homePage',
  data () {
    return {
    }
  },
  components: {
    darkMode
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

.body--dark .lista .camera{
  color: white;
  background: black;
}

.body--light .camera{
  color: white;
  background: green;
}

.darkmode{
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
}

</style>