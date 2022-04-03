<template>
    <p>{{title}}</p>
</template>

<script>
    export default {
        props: {
            title: {
                required: true,
                default : "Without title"
            }
        }
    }
</script>