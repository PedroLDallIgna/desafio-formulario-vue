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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Nunito:ital,wght@0,400;0,700;1,400&display=swap');

body {
  margin: 0 auto;
  box-sizing: border-box;
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
  padding: 20px;
}

h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 2.25em;
  line-height: 1.5;
  color:#111111;
}
</style>
