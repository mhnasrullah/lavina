<template>
    <div 
    class="px-4 max-w-5xl mx-auto"
    :class="class"
    >
        <slot/>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name : 'Box',
        props : {
            class : {
                type : String,
            }
        }
    })
</script>

