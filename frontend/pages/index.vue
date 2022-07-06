<template>
  <v-container>

    <div class="text-box">
      <h1>Panel For Tests 😋</h1>
      <p class="mt-3">Creating tests with love ❤</p>

      <v-btn
        rounded
        color="primary"
        dark
        to="/tests"
      >
        View Tests <span class="ml-2">→</span>
      </v-btn>
    </div>
  </v-container>

</template>
<script>
export default {
  head() {
    return {
      title: "Home page"
    };
  },
};
</script>
<style>
.text-box {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: #fff;
}
.text-box h1 {
  font-family: cursive;
  font-size: 5rem;
}
.text-box p {
  font-size: 2rem;
  font-weight: lighter;
}
</style>
