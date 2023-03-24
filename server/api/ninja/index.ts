export default defineEventHandler(async (event) => {

    const { appName } = useRuntimeConfig();

    // const data = await $fetch(`https://api.breakingbadquotes.xyz/v1/quotes`);

    return {
        appName,
    }

});