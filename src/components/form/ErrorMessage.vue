<template>
    <span :id="id" class="error">{{ errorMsg }}</span>
</template>

<script>
export default {
    name:  "ErrorMessage",
    props: {
        id: String,
        errorMsg: String,
    }
};
</script>

<style scoped>
.error {
    color: #ff0000;
    text-align: start;
    display: block;
    visibility: hidden;
}
</style>