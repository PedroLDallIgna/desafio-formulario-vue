<template>
    <input :type="type" :required="required" :id="id" :placeholder="placeholder" v-model="inputValue" @change="onValidate()" @focus="validate" />
    <span>{{ validate }}</span>
</template>

<script>
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
            error: null,
        };
    },
    mounted() {
        this.inputField = document.getElementById(this.id);
        this.error = document.getElementById(`${this.id}-error`);
    },
    computed: {
        validate() {
            if (this.inputField) {
                if (this.inputValue !== "") {
                    // change the background color to red or green
                    if (Patterns[this.id].test(this.inputValue)) {
                        this.inputField.style.backgroundColor = '#4dff4d35';
                    } else {
                        this.inputField.style.backgroundColor = '#ff4d4d35';
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
                this.inputField.style.backgroundColor = '#ffffff';
                this.error.style.visibility = 'hidden';
            } else {
                this.inputField.style.borderColor = '#ff0000';
                this.error.style.visibility = 'visible';
            }
        }
    }
}
</script>

<style scoped>
input,
span {
    display: block;
}

input {
    font-family: 'Nunito', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.125;
    color: #767676;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid #aaaaaa;
    border-radius: 4px;
    transition: 1s;
}
</style>
