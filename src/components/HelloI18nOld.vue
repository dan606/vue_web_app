<template>
  <p>{{ $t('hello') }}</p>
  <button @click = "openModalWindow">Open MODAL</button>
  <widget-container-modal/>

  <button type="button" class="btn btn-primary" @click="showModal=true">Open a modal</button>
  <div v-if="showModal" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
            <button type="button" class="btn-close" @click="showModal = false" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <VueModalWindow/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

</style>

<script>
import {openModal, container} from "jenesius-vue-modal";
import ModalWindow from "./ModalWindow.vue"
import VueModalWindow from '@/components/VueModalWindow.vue'

  export default {
  name: 'HelloI18nOld',

  components: {WidgetContainerModal: container, VueModalWindow},
  methods:
  {
    openModalWindow()
    {
        openModal(ModalWindow, {
        title: "Hello world!"
    })
    }
  },  
  data() {
    return {
      showModal: false,
      mes: ''
    }
  }
}
</script>