<template>
    <div 
    class="px-4 max-w-5xl mx-auto"
    :class="props.class"
    >
        <slot/>
    </div>
</template>

<script lang="ts" setup>

import { defineProps } from 'vue';

interface Props {
    class? : string
}

const props = defineProps<Props>();

</script>

