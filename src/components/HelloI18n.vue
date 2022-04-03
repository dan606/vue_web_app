<template>
   <widget-container-modal/>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'
import {openModal, container} from "jenesius-vue-modal";
import ModalWindow from "./ModalWindow.vue"

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
  components: {WidgetContainerModal: container}
}
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
