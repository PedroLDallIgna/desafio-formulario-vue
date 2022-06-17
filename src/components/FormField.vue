<template>
    <div>
        <LabelComponent :for="field.id" :label="field.label" :isRequired="field.required" />
        <InputComponent :id="field.id" :type="field.type" :required="field.required" :placeholder="field.placeholder" @value="getInputValue" />
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
    emits: [ 'inputValue' ],
    data() {
        return {
            labelElement: null,
            inputValue: "",
        };
    },
    mounted() {
        this.labelElement = document.querySelector(`label[for="${this.field.id}"]`);
        
        if (this.field.required) {
            this.labelElement.textContent += " *";
        }
    },
    methods: {
        getInputValue(val) {
            this.inputValue = val;
            this.$emit('inputValue', this.inputValue);
        }
    }
}
</script>
