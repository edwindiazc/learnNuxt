<template>
    <div>

        
        <div>
            <slot />
        </div>

        <header>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        
    </div>
</template>

<script lang="ts" setup>

</script>

<style  scoped>
.router-link-exact-active {
    color: #14b488;
}
</style>