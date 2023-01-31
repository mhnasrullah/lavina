<template>
    <section class="pt-16">
        <Box class="flex flex-col-reverse md:flex-row md:items-center md:space-x-6">
            <div class="mt-8 md:mt-0 md:w-1/3 lg:pr-14">
                <p class="text-orange font-medium text-sm">New Collection 2022</p>
                <Text
                type="lg"
                class="mt-4"
                color="text-gray">A Perfect Set For Your Living Room</Text>
                <p class="text-sm text-[#828282] leading-relaxed mt-4">Di tahun 2022, segala macam hal yang berkaitan dengan tren selalu dicari oleh banyak orang, termasuk konsep home and living atau rumah dan tempat tinggal.</p>
                <p class="text-sm mt-2 text-[#828282] leading-relaxed">Dan konsep home and living yang bakal menjadi tren diketahui meliputi warna cat hingga penggunaan bahan.</p>
                <Button
                as="router-link"
                href="/"
                class="mt-4 lg:mt-6 block w-fit"
                :style="'primary'"
                >Shop Collection &rarr;</Button>
            </div>
            <!-- DECORATION -->
            <div class="flex w-full h-fit space-x-2 md:space-x-4 lg:space-x-6 md:w-2/3 justify-center">
                <div :class="baseStyleDecoration.container">
                    <img 
                    :class="baseStyleDecoration.img"
                    class="h-1/3 w-full" src="@/assets/images/new-collection-A.jpg" alt="new-section-A">
                    <img 
                    :class="baseStyleDecoration.img"
                    class="h-2/3 w-full rounded-bl-3xl" src="@/assets/images/new-collection-C.jpg" alt="new-section-C"/>
                </div>
                <div :class="baseStyleDecoration.container">
                    <img 
                    :class="baseStyleDecoration.img"
                    class="h-2/3 w-full rounded-tr-3xl" src="@/assets/images/new-collection-B.jpg" alt="new-section-B">
                    <img 
                    :class="baseStyleDecoration.img"
                    class="h-1/3 w-full" src="@/assets/images/new-collection-D.jpg" alt="new-section-D"/>
                </div>
            </div>
        </Box>
    </section>
</template>

<script lang="ts" setup>
    import Box from '@/components/Box.vue';
    import Text from '@/components/Text.vue';
    import Button from '@/components/Button.vue';

    const baseStyleDecoration = {
        img : 'object-cover object-center',
        container : "h-64 md:h-96 lg:h-[450px] flex flex-col space-y-2 md:space-y-4 lg:space-y-6"
    }

</script>