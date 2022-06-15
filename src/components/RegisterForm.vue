<template>
  <form @submit.prevent="onRegister()" novalidate>
    <fieldset class="name">
      <FormField :field="fullName" />
    </fieldset>
    <fieldset class="email-passwd">
      <FormField :field="email" />
      <FormField :field="password" />
    </fieldset>
    <fieldset class="phone-bd">
      <FormField :field="phone" />
      <FormField :field="birthdate" />
    </fieldset>
    <fieldset class="cb-btn">
      <div>
        <label for="checkbox">
          I accept the terms and privacy
          <input type="checkbox" id="checkbox" required checked>
          <span></span>
        </label>
      </div>
      <div>
        <input type="submit" value="Register" id="register-btn">
      </div>
    </fieldset>
  </form>
</template>

<script>
import router from '@/router';
import FormField from './FormField.vue';

export default {
    name: "RegisterForm",
    data() {
      return {
        fullName: {
          id: 'full-name',
          label: 'Full Name',
          type: 'text',
          required: true,
          placeholder: "Name",
          errorMessage: "Fullname Invalid"
        },
        email: {
          id: 'email',
          label: 'Email',
          type: 'email',
          required: true,
          placeholder: 'foo@bar.com',
          errorMessage: "Email Invalid"
        },
        password: {
          id: 'password',
          label: 'Password',
          type: 'password',
          required: true,
          placeholder: 'Enter your password',
          errorMessage: 'Password Invalid'
        },
        phone: {
          id: 'phone',
          label: 'Phone',
          type: 'tel',
          required: false,
          placeholder: '(83) 00000-0000',
          errorMessage: 'Phone Invalid'
        },
        birthdate: {
          id: 'birthdate',
          label: 'Birthdate',
          type: 'date',
          required: true,
          placeholder: 'dd/mm/yyyy',
          errorMessage: 'Age Invalid'
        },
        checkbox: {
          id: 'checkbox',
          label: 'I accept the terms and privacy',
          type: 'checkbox',
          required: true,
          placeholder: "",
          errorMessage: "You must accept the terms"
        }
      }
    },
    methods: {
        onRegister() {
            router.push("/success");
        },
    },
    components: { FormField }
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

label[for="checkbox"] {
  color: #111111;
}

.phone-bd input::-webkit-calendar-picker-indicator {
  background: none;
  width: 0;
  height: 0;
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
</style>
