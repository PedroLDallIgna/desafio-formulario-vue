<template>
  <main>
    <div class="main-container">
      <img src="./assets/data_1.svg" alt="">
      <router-view/>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
body {
  margin: 0 auto;
}

main {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
}

.main-container {
  width: 620px;
  background-color: #fff;
}
</style>
