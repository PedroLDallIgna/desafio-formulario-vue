<template>
    <input :type="type" :required="required" :id="id" :placeholder="placeholder" v-model="inputValue" @change="onValidate()" @focus="validate" />
    <span>{{ validate }}</span>
    <ErrorMessage v-show="!isValid" :errorMsg="'Invalido'" />
</template>

<script>
import ErrorMessage from './ErrorMessage.vue';
import Patterns from '@/Patterns.js';

export default {
    name: "InputComponent",
    props: {
        type: String,
        required: Boolean,
        id: String,
        placeholder: String,
    },
    data() {
        return {
            inputValue: "",
            inputField: null,
            isValid: true,
        };
    },
    mounted() {
        this.inputField = document.getElementById(this.id);
    },
    computed: {
        validate() {
            if (this.inputField) {
                if (this.inputValue !== "") {
                    // change the background color to red or green
                    if (Patterns[this.id].test(this.inputValue)) {
                        this.inputField.style.backgroundColor = '#00ff00';
                    } else {
                        this.inputField.style.backgroundColor = '#ff0000';
                    }
                }
            }
        }
    },
    methods: {
        onValidate() {
            this.isValid = Patterns[this.id].test(this.inputValue);

            if (this.isValid) {
                this.inputField.style.borderColor = '#00ff00';
            } else {
                this.inputField.style.borderColor = '#ff0000';
            }
        }
    },
    components: {
        ErrorMessage,
    }
}
</script>

<style scoped>
input,
span {
    display: block;
}

input {
    width: 100%;
    box-sizing: border-box;
}
</style>
