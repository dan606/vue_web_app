<template>
  <p>{{ t('hello') }}</p>
  <button @click = "openModalWindow">Open MODAL</button>
   <widget-container-modal/>

   <button type="button" class="btn btn-primary" @click="showModal=true">
  Open a modal
</button>

<Modal v-model="showModal" title="My first modal">
  <p>Modal content goes here...</p>
</Modal>


</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'
import {openModal, container} from "jenesius-vue-modal";
import ModalWindow from "./ModalWindow.vue"

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
  mounted(){
    openModal(ModalWindow, {
        title: "Hello world!"
    })
  },
  components: {WidgetContainerModal: container,
                    'Modal': VueModal},
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
      showModal: false
    }
  }
}
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
