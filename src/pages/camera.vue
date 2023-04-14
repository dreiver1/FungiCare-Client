<template>
    <q-page class="flex justify-center col-12">       
        <video autoplay ref="videoplay" style="position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
            object-fit: cover;">
        </video>
        <q-item class="self-end" >
            <q-item class="column justify-between col-12">
              <q-btn
                v-if="!cameraStart"
                label="Acessar Camera"
                color="primary"
                icon="camera"
                :disable="!enableCamera"
                @click="useCamera"
              />
              <q-btn
                v-else
                label="Tirar Foto"
                color="primary"
                icon="camera"
                @click="takePhoto"
              />
            </q-item>
        </q-item>
        <div class="canvas" style="display: none;">
            <canvas ref="imgTakePhoto">

            </canvas>
        </div>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
name: 'IndexPage',
data () {
    return {
    enableCamera: false,
    cameraStart: false,
    imageCapture: null,
    track: null
    }
},
mounted () {
    if (navigator.mediaDevices.getUserMedia) {
    this.enableCamera = true
    }
},
methods: {
    useCamera () {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
        this.cameraStart = true
        this.$refs.videoplay.srcObject = mediaStream
        this.track = mediaStream.getVideoTracks()[0]
        this.imageCapture = new ImageCapture(this.track)
        })
    },
    takePhoto () {
    this.imageCapture.takePhoto()
        .then(blob => {
        createImageBitmap(blob)
        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onloadend = () => {
            const video = document.querySelector('video');
            const canvas = document.querySelector('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const image = canvas.toDataURL('image/png');
            localStorage.setItem('imageData', image);
            this.$router.push('/resultado')
          }
        })
        .catch(error => console.log(error))
    }
}
})
</script>
<style>
.body--light {
  background: white;
}

.body--dark {
  background: black;

}


</style>