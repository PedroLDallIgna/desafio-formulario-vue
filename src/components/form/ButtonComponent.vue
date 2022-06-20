<template>
    <div>
        <input type="submit" :value="label" :id="id" :disabled="isDisabled" />
    </div>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        label: String,
        id: String,
        isDisabled: Boolean
    }
}
</script>

<style scoped>
#register-btn {
  background-color: #0dbdbd;
  color: #ffffff;
  font-size: 1em;
  font-weight: bold;
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

#back-btn {
  background-color: #0dbdbd;
  color: #ffffff;
  font-size: 1.5em;
  font-weight: bold;
  font-style: normal;
  line-height: 1.125;
  padding: 20px;
  border: 1px solid #0dbdbd;
  border-radius: 10px;
}

@media (max-width: 768px) {
  div {
    width: 100%;
  }

  #register-btn {
    width: 100%;
  }
}
</style>
