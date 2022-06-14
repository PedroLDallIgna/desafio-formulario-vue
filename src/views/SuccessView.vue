<template>
  <h1>Success</h1>
  <button @click="goBack()">Go Back!</button>
</template>

<script>
import router from "@/router";

export default {
  name: "SuccessView",
  methods: {
    goBack() {
      router.push('/');
    },
  },
};
</script>
