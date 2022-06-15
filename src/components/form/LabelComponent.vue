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

