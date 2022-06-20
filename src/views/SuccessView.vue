<template>
  <h1>Success</h1>
  <ButtonComponent :id="'back-btn'" :label="'Go Back!'" :isDisabled="false" @click="goBack()" />
</template>

<script>
import router from "@/router";
import ButtonComponent from "@/components/form/ButtonComponent.vue";

export default {
  name: "SuccessView",
  methods: {
    goBack() {
      router.push('/');
    },
  },
  components: { ButtonComponent },
};
</script>
