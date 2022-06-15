<template>
    <div>
        <LabelComponent :for="field.id" :label="field.label" :isRequired="field.required" />
        <InputComponent :id="field.id" :type="field.type" :required="field.required" :placeholder="field.placeholder" />
        <ErrorMessage :id="field.id+'-error'" :errorMsg="field.errorMessage" />
    </div>
</template>

<script>
import LabelComponent from './form/LabelComponent.vue';
import InputComponent from './form/InputComponent.vue';
import ErrorMessage from './form/ErrorMessage.vue';

export default {
    name: "FormField",
    components: {
        LabelComponent,
        InputComponent,
        ErrorMessage
    },
    props: {
        field: Object,
    },
    data() {
        return {
            labelElement: null,
        };
    },
    mounted() {
        this.labelElement = document.querySelector(`label[for="${this.field.id}"]`);
        
        if (this.field.required) {
            this.labelElement.textContent += " *";
        }
    }
}
</script>
