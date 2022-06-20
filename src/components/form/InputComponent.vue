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
    emits: [ 'validation' ],
    data() {
        return {
            inputValue: "",
            inputField: null,
            isValid: false,
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
                if (this.required) {
                    if (this.inputValue !== "") {
                        if (this.id == "birthdate") {
                            const age = Math.abs(new Date(Date.now() - new Date(this.inputValue).getTime()).getUTCFullYear() - 1970)
                            this.isValid = age <= 121;
                            if (this.isValid) {
                                this.inputField.style.backgroundColor = '#4dff4d35';
                                this.inputField.style.borderColor = '#00ff00';
                            } else {
                                this.inputField.style.backgroundColor = '#ff4d4d35';
                                this.inputField.style.borderColor = '#ff0000';
                            }
                        } else {
                            this.isValid = Patterns[this.id].test(this.inputValue);
                            if (this.isValid) {
                                this.inputField.style.backgroundColor = '#4dff4d35';
                                this.inputField.style.borderColor = '#00ff00';
                            } else {
                                this.inputField.style.backgroundColor = '#ff4d4d35';
                                this.inputField.style.borderColor = '#ff0000';
                            }
                        }
                    }
                } else {
                    if (this.inputValue !== "") {
                        this.isValid = Patterns[this.id].test(this.inputValue);
                        if (this.isValid) {
                            this.inputField.style.backgroundColor = '#4dff4d35';
                            this.inputField.style.borderColor = '#00ff00';
                        } else {
                            this.inputField.style.backgroundColor = '#ff4d4d35';
                            this.inputField.style.borderColor = '#ff0000';
                        }
                    } else {
                        this.isValid = true;
                        this.inputField.style.backgroundColor = '#ffffff';
                        this.inputField.style.borderColor = '#aaaaaa';
                    }
                }
            }
        }
    },
    methods: {
        onValidate() {
            if (this.isValid) {
                this.inputField.style.backgroundColor = '#ffffff';
                this.error.style.visibility = 'hidden';
            } else {
                this.error.style.visibility = 'visible';
            }
            this.$emit('validation', this.isValid);
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

:focus {
    outline: none;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 1;
    display: block;
    background: url('@/assets/date_arrow.svg') no-repeat;
    background-position: 100% center;
    cursor: pointer;
}
</style>
