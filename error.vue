<template>
    <div>
        <div class="mt-7 max-w-sm mx-auto text-center card ">
            <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
            <p class="mt-7 text-6xl ">Oops</p>
            <p class="mt-7">{{ error.message }}</p>
            <button @click="handleError" class="border-2 bg-[#12b488] text-white font-semibold p-2 px-3 rounded-md">Go
                home..</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const { error } = defineProps(['error']);
const handleError = () => {
    clearError({ redirect: '/' })
}
</script>

<style scoped></style>