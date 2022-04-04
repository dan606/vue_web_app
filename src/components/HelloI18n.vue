<template>
  <p>{{ t('hello') }}</p>
  <button @click = "openModalWindow">Open MODAL</button>
   <widget-container-modal/>

  <button type="button" class="btn btn-primary" @click="showModal=true">Open a modal</button>
  <!--
  <VueModal v-model="showModal" :title="t('settings')">
    <VueModalWindow/>
  </VueModal>
  -->

<div v-if="showModal" class="modal-mask">
 <div class="modal-wrapper">
   <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" @click="showModal = false" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- <p>Modal body text goes here.</p> -->
        <VueModalWindow/>
      </div>

      <!--
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
      -->

    </div>
    </div>
  </div>
</div>

 <!-- <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" @click="showModal = false">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  -->

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
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'
import {openModal, container} from "jenesius-vue-modal";
import ModalWindow from "./ModalWindow.vue"
import VueModalWindow from '@/components/VueModalWindow.vue'

import VueModal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'


  export default {
  name: 'HelloI18n',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })

    // Something todo ..

    return { t }
  },
  components: {WidgetContainerModal: container,
                    VueModal,
                    VueModalWindow},
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