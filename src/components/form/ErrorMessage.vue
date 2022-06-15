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
    font-family: 'Nunito', sans-serif;
    font-size: 1em;
    margin: 5px 0 3vh 0;
}
</style>