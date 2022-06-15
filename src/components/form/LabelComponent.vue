<template>
    <label :for="id">{{ label }}</label>
</template>

<script>
export default {
    name: "LabelComponent",
    props: {
        id: String,
        label: String,
        isRequired: Boolean
    }
};
</script>

<style scoped>
label {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    color: #767676;
    display: block;
    text-align: start;
}
</style>
