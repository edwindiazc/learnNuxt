<template>
    <div class="shadow-lg text-center flex flex-col flex-wrap justify-center p-4">
        <img :src="product.image" class=" self-center w-1/3" :alt="product.title">
        <p class="font-semibold">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`" class="bg-[#12b488] border-2 text-white font-semibold p-2 rounded-md">More
            Details</NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { Products } from "@/interfaces/products.interface";

const { product } = defineProps<{
    product: Products,
}>();


</script>

<style scoped></style>