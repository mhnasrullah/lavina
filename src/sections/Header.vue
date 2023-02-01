<template>
    <section 
    class="before:absolute before:bottom-0 before:h-44 before:w-full before:bg-gradient-to-b from-trans to-white relative min-h-screen bg-cover bg-bottom lg:h-[120vh] pt-24 before:">
        <Box class="relative z-10">
            <Text
            class="md:text-center md:w-1/2 lg:w-2/3 md:mx-auto"
            type="header">Make <span class="text-orange font-[pacifico] text-4xl lg:text-6xl">yourself</span> at home with Lavina style</Text>
            <div class="w-full md:w-1/3 md:mx-auto">
                <Input
                class="mt-10"
                type="primary"
                :search-icons="true"
                round="full"
                placeholder="Search Furniture"/>
            </div>
            
        </Box>
        <productInfoHeader
        name="Levronka Sofa"
        :price="4464000"
        position="right-[50%] bottom-[25%]"
        description="Linen Sofa with Premium Quality"/>
        <productInfoHeader
        name="Levronka Pillow"
        :price="578000"
        position="left-[60%] bottom-[40%]"
        description="Linen Sofa with Premium Quality"/>
    </section>
</template>

<script lang="ts" setup>
import Box from '@/components/Box.vue';
import Text from '@/components/Text.vue';
import Input from '@/components/Input.vue';
import productInfoHeader from '@/components/ProductInfoHeader.vue';
</script>

<style scoped>
    section{
        background-image: url(@/assets/images/header.jpg);
    }
</style>