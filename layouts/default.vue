<template>
    <div>

        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink class="font-bold" to="/">Nuxt Dojo</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class=" px-3 py-2 rounded-md text-sm" to="/products">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style  scoped>
.router-link-exact-active {
    color: #14b488;
}
</style>