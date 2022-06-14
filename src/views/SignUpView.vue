<template>
  <h1>Internal Sign Up</h1>
  <form @submit.prevent="onRegister()" novalidate>
    <fieldset>
      <div>
        <label for="full-name">Full Name</label>
        <input type="text" id="full-name" required>
      </div>
    </fieldset>
    <fieldset>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" required>
      </div>
      <div>
        <label for="passwd">Password</label>
        <input type="password" id="passwd" required>
      </div>
    </fieldset>
    <fieldset>
      <div>
        <label for="phone">Phone</label>
        <input type="tel" id="phone">
      </div>
      <div>
        <label for="birthdate">Birthdate</label>
        <input type="date" id="birthdate" required>
      </div>
    </fieldset>
    <fieldset>
      <div>
        <label for="checkbox">
          I accept the terms and privacy
          <input type="checkbox" id="checkbox" required checked>
          <span></span>
        </label>
      </div>
      <div>
        <input type="submit" value="Register">
      </div>
    </fieldset>
  </form>
</template>

<script>
import router from '@/router';

export default {
  name: 'SignUpView',
  methods: {
    onRegister() {
      router.push('/success');
    },
  },
};
</script>
