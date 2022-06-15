<template>
    <span>{{ errorMsg }}</span>
</template>

<script>
export default {
    name:  "ErrorMessage",
    props: {
        errorMsg: String,
    }
}
</script>

<style scoped>
span {
    color: #ff0000;
    text-align: start;
}
</style>