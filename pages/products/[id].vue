<template>
    <div>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup lang="ts">
import { Products } from "@/interfaces/products.interface";


const { id } = useRoute().params;

const { data: product } = await useFetch<Products>(`https://fakestoreapi.com/products/${id}`);

if (!product.value) {
    throw createError({
        statusCode: 404,
        statusMessage: `Product ${id} not found`,
        fatal: true,
    });
}

</script>

<style scoped></style>