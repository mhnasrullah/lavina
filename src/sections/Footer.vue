<template>
    <footer class="bg-[#3A414C] pt-28 -mt-16">
        <Box class="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 space-y-6 md:space-y-0 lg:gap-16">
            <div>
                <Logo/>
                <div :class="styled">
                    <router-link 
                    v-for="(i, index) in nav" :key="index"
                    to="/">{{ i }}</router-link>
                </div>
            </div>
            <div>
                <Text
                type="lg"
                color="text-white">Support</Text>
                <div :class="styled">
                    <router-link 
                    v-for="(i, index) in support" :key="index"
                    to="/">{{ i }}</router-link>
                </div>
            </div>
            <div>
                <Text
                type="lg"
                color="text-white">Legal</Text>
                <div :class="styled">
                    <router-link 
                    v-for="(i, index) in legal" :key="index"
                    to="/">{{ i }}</router-link>
                </div>
            </div>
            <div>
                <Text
                type="lg"
                color="text-white">Install App</Text>
                <div :class="styled">
                    <img src="@/assets/icons/google-play-badge.svg" class="w-36" alt="google-play">
                    <img src="@/assets/icons/app-store-badge.svg" class="w-36" alt="app-store">
                </div>
            </div>
        </Box>
        <div class="bg-orange text-white py-10 mt-14">
            <Box>
                <div class="md:flex text-sm md:justify-between border-b-2 md:border-0 border-b-white20 pb-4">
                    <p>Copyright © 2022 Online Furniture Store</p>
                    <p class="font-medium">Powered by Online Furniture Store</p>
                </div>
                <p class="text-sm mt-4 md:text-center">
                    Design by <a class="font-medium text-gray" href="https://www.instagram.com/tepbadrol_/" rel="noopener norefferer" target="_blank">Yosep Sopyan</a><br/>
                    Develop by <a class="font-medium text-gray" href="https://www.instagram.com/m_hnasrullah/" rel="noopener norefferer" target="_blank">Hasan Nasrullah</a><br/>
                </p>
            </Box>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import Box from '@/components/Box.vue';
import Logo from '@/components/Logo.vue';
import Text from '@/components/Text.vue';

const styled = "mt-4 flex flex-col text-sm space-y-2 font-medium text-white"

// DATA

const nav = ['About Us','Blog','Carrers','Contact Us'];
const support = ['Help Center','Safety Center','Community Guidelines'];
const legal = ['Cookies Policy','Privacy Policy','Term of Service','Law Enforcement'];

// END DATA

</script>