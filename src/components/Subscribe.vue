<template>
    <div class="rounded-lg shadow-xl md:flex md:items-center md:justify-between p-4 md:py-8 lg:py-10">
        <div>
            <Text
            type="lg"
            color="text-gray">Subscribe our Newsletter</Text>
            <p class="text-[#828282] text-sm lg:mt-1">See The Latest collection & Get Special Offer</p>
        </div>
        <div class="flex flex-col md:flex-row md:space-y-0 space-y-2 md:space-x-2 mt-4 md:mt-0">
            <Input
            type="secondary"
            placeholder="Enter your email"/>
            <Button
            :style="'primary'"
            as="button"
            type="submit">Get Start</Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Text from './Text.vue';
import Button from './Button.vue';
import Input from './Input.vue';
</script>