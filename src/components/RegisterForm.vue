<template>
  <form @submit.prevent="onRegister()" novalidate>
    <fieldset class="name">
      <div>
        <LabelComponent :for="fullName.id" :label="fullName.label" :isRequired="fullName.required" />
        <InputComponent :type="fullName.type" :id="fullName.id" :required="fullName.required" :placeholder="fullName.placeholder" />
      </div>
    </fieldset>
    <fieldset class="email-passwd">
      <div>
        <LabelComponent :for="email.id" :label="email.label" />
        <InputComponent :type="email.type" :id="email.id" :required="email.required" :placeholder="email.placeholder" />
      </div>
      <div>
        <LabelComponent :for="password.id" :label="password.label" />
        <InputComponent :type="password.type" :id="password.id" :required="password.required" :placeholder="password.placeholder" />
      </div>
    </fieldset>
    <fieldset class="phone-bd">
      <div>
        <LabelComponent :for="phone.id" :label="phone.label" />
        <InputComponent :type="phone.type" :id="phone.id" :required="phone.required" :placeholder="phone.placeholder" />
      </div>
      <div>
        <LabelComponent :for="birthdate.id" :label="birthdate.label" />
        <InputComponent :type="birthdate.type" :id="birthdate.id" :required="birthdate.required" :placeholder="birthdate.placeholder" />
      </div>
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
import ErrorMessage from './form/ErrorMessage.vue';
import LabelComponent from './form/LabelComponent.vue';
import InputComponent from './form/InputComponent.vue';

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
    components: { ErrorMessage, LabelComponent, InputComponent }
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

label,
input {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  color: #767676;
  display: block;
  box-sizing: border-box;
}

input {
  font-style: italic;
  font-size: 0.85em;
  line-height: 1.125;
  padding: 12px;
}

label[for="checkbox"] {
  color: #111111;
}

#birthdate::-webkit-calendar-picker-indicator {
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
