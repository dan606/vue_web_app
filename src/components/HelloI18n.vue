<template>
  <p>{{ t('hello') }}</p>
  <br>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'

  export default {
  name: 'HelloI18n',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })

    // Something todo ..

    return { t }
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
