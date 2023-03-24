<template>
    <div>
        <h2>About</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere totam perspiciatis explicabo autem
            exercitationem animi recusandae quod, quas ex, harum non vitae possimus itaque maiores dicta commodi distinctio
            voluptate ad.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, molestias omnis mollitia distinctio iste culpa
            beatae ducimus nulla cum nobis tempora porro. Esse dignissimos blanditiis facilis in architecto omnis
            accusantium.</p>


        <p>{{ data?.appName }}</p>

    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'default',
})

const { data } = await useFetch('/api/ninja');



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