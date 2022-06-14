<template>
  <h1>Internal Sign Up</h1>
  <button @click="onRegister()">Register</button>
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
