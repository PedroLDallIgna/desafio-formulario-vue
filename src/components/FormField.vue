<template>
    <div>
        <LabelComponent :for="field.id" :label="field.label" :isRequired="field.required" />
        <InputComponent :id="field.id" :type="field.type" :required="field.required" :placeholder="field.placeholder" :error-msg="field.errorMessage" />
    </div>
</template>

<script>
import LabelComponent from './form/LabelComponent.vue';
import InputComponent from './form/InputComponent.vue';

export default {
    name: "FormField",
    components: {
        LabelComponent,
        InputComponent
    },
    props: {
        field: Object,
    }
}
</script>
