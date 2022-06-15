<template>
    <div>
        <label for="checkbox" class="checkbox-container">
            {{ field.label }}
            <input type="checkbox" :id="field.id" :required="field.required" v-model="isChecked" @change="validate()" />
            <span class="checkmark"></span>
        </label>
        <ErrorMessage :id="field.id+'-error'" :errorMsg="field.errorMessage" />
    </div>
    <!-- {{ validate }} -->
</template>

<script>
import ErrorMessage from './ErrorMessage.vue';
export default {
    name: "CheckboxComponent",
    props: {
        field: Object,
    },
    components: { ErrorMessage },
    data() {
        return {
            isChecked: true,
            error: null
        };
    },
    mounted() {
        this.error = document.getElementById(`${this.field.id}-error`);
    },
    methods: {
        validate() {
            if (!this.isChecked) {
                this.error.style.visibility = 'visible';
            } else {
                this.error.style.visibility = 'hidden';
            }
        }
    }
}
</script>

<style scoped>
.checkbox-container {
    display: block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    font-size: 1.125em;
    line-height: 1.25;
    color: #111111;
}

.checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.25rem;
    width: 1.25rem;
    background-color: transparent;
    border: 2px solid #0dbdbd;
    border-radius: 2px;
    box-sizing: border-box;
    box-shadow: 1px 1px 5px rgba(73, 73, 73, 0.5),
                inset 1px 1px 5px rgba(73, 73, 73, 0.5);
}

.checkbox-container:hover input ~ .checkmark {
    background: #eee;
}

.checkbox-container input:checked ~ .checkmark {
    background: #0dbdbd;
    box-shadow: 1px 1px 5px rgba(73, 73, 73, 0.5);
}

.checkbox-container .checkmark::after {
    content: '';
    display: none;
    position: absolute;
    left: 4px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);    
}

.checkbox-container input:checked ~ .checkmark::after {
    display: block;
}
</style>
