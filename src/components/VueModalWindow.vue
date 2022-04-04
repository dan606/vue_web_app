<template>
    <div>
        <p>{{t('settings')}}</p>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
	name: "VueModal",
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

<style scoped>

</style>