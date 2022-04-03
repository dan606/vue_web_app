<template>
    <div>
        <p>Close me</p>
        <p>{{title}}</p>
        <button @click = "close">CloseModal</button>
    </div>
</template>

<script>
import {closeModal} from 'jenesius-vue-modal';

export default {
	name: "WidgetModalWithClose",
    props: {
        title: {
            required: true,
            default : "Without title"
        }
    },
    methods:
    {
        close()
        {
            closeModal();
        }
    }
}
</script>

<style scoped>
    
    .modal-item
    {
        height: 100%;
        width: 100%;
        
    }

    div {
        border-style: solid;
        background-color:DodgerBlue;
    }

</style>