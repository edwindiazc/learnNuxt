<template>
    <div>
        <div class="grid grid-cols-4 gap-5" v-if="products?.length">
            <div v-for="prod in products" :key="prod.id">
                <ProductCard :product="prod" :key="prod.id" />
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { Products } from '@/interfaces/products.interface';
// definePageMeta({ layout: 'default' });

// fetch products
const { data: products } = await useFetch<Products[]>('https://fakestoreapi.com/products');

</script>

<style  scoped>
h2 {
    margin-bottom: 20;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>