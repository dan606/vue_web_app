<template>
     <h1>{{ msg }}</h1>
      <h1>{{ lama }}</h1>
        <p>{{ t('message') }}</p>
      
</template>

<script>

import { useI18n } from 'vue-i18n'

export default {
  name: 'MyPage',
  props: {
    msg: String
  },
  data() {
    return {
    lama: 'ale čau'
    }
  },
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