<template>
    <p>{{ errorMsg }}</p>
</template>

<script>
export default {
    name:  "ErrorMessage",
    props: {
        errorMsg: String,
        validation: Boolean
    }
}
</script>

<style scoped>
p {
    color: #ff0000;
}
</style>