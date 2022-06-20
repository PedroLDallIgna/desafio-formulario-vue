<template>
  <form @submit.prevent="onRegister()" novalidate>
    <fieldset class="name">
      <FormField :field="fields.fullName" @inputValue="(val) => validInputs[0] = val" />
    </fieldset>
    <fieldset class="email-passwd">
      <FormField :field="fields.email" @inputValue="(val) => validInputs[1] = val" />
      <FormField :field="fields.password" @inputValue="(val) => validInputs[2] = val" />
    </fieldset>
    <fieldset class="phone-bd">
      <FormField :field="fields.phone" @inputValue="(val) => validInputs[3] = val" />
      <FormField :field="fields.birthdate" @inputValue="(val) => validInputs[4] = val" />
    </fieldset>
    <fieldset class="cb-btn">
      <CheckboxComponent :field="fields.checkbox" @checked="(val) => validInputs[5] = val" />
      <div>
        <input type="submit" value="Register" id="register-btn" :disabled="btnDisabled" /> {{ btnState }}
      </div>
    </fieldset>
  </form>
</template>

<script>
import router from '@/router';
import FormField from './FormField.vue';
import CheckboxComponent from './form/CheckboxComponent.vue';
import Patterns from '@/Patterns.js';

export default {
    name: "RegisterForm",
    data() {
      return {
        fields: {
          fullName: {
            id: 'full-name',
            label: 'Full Name',
            type: 'text',
            required: true,
            placeholder: "Name",
            errorMessage: "Fullname Invalid",
            isValid: false,
          },
          email: {
            id: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            placeholder: 'foo@bar.com',
            errorMessage: "Email Invalid",
            isValid: null,
          },
          password: {
            id: 'password',
            label: 'Password',
            type: 'password',
            required: true,
            placeholder: 'Enter your password',
            errorMessage: 'Password Invalid',
            isValid: null,
          },
          phone: {
            id: 'phone',
            label: 'Phone',
            type: 'tel',
            required: false,
            placeholder: '(83) 00000-0000',
            errorMessage: 'Phone Invalid',
            isValid: null,
          },
          birthdate: {
            id: 'birthdate',
            label: 'Birthdate',
            type: 'date',
            required: true,
            placeholder: 'dd/mm/yyyy',
            errorMessage: 'Age Invalid',
            isValid: null,
          },
          checkbox: {
            id: 'checkbox',
            label: 'I accept the terms and privacy',
            required: true,
            errorMessage: "You must accept the terms",
            value: "",
          }
        },
        validInputs: [false, false, false, true, false, true],
        btnDisabled: true,
      }
    },
    computed: {
      btnState() {
        if (this.validInputs.filter(item => item == true).length == 6) {
          this.btnDisabled = false;
        } else {
          this.btnDisabled = true;
        }
      }
    },
    methods: {
        onRegister() {
          if (this.validInputs.filter(item => item == true).length == 6) {
            router.push("/success");
          }
        },
    },
    components: { FormField, CheckboxComponent }
};
</script>

<style scoped>
form {
  display: flex;
  flex-wrap: wrap;
}

.name {
  flex: 1 1 100%;
}

.name input {
  width: 100%;
}

.email-passwd {
  flex: 1 1 65%;
}

.email-passwd input {
  width: 100%;
}

.phone-bd {
  flex: 1 1 35%;
}

.phone-bd input {
  width: 100%;
}

.cb-btn {
  margin: 7vh 0 0 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#register-btn {
  background-color: #0dbdbd;
  color: #ffffff;
  font-size: 1em;
  font-style: normal;
  line-height: 1.125;
  padding: 12px;
  border: 1px solid #0dbdbd;
  border-radius: 10px;
}

#register-btn:disabled {
  background-color: #aaaaaa;
  cursor: not-allowed;
}
</style>
