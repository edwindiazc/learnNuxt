<template>
    <div class="shadow-lg text-center grid grid-cols-2 p-4 gap-5">
        <img :src="product.image" :alt="product.title" class="w-1/2 ">
        <div class="flex flex-col flex-wrap justify-start text-left">
            <p class="text-4xl my-7 ">{{ product.title }}</p>
            <p class="text-2xl my-7 ">Price-${{ product.price }}</p>
            <p class="font-semibold">Description</p>
            <p class="text-xl ">{{ product.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">

const { product } = defineProps(['product']);


</script>

<style scoped></style>