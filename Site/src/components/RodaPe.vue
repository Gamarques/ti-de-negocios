<template>
  <q-footer class="RodaPe">
    <div class="left">
      <img src="~assets/TOP.png" alt="LogoTOP" />
    </div>
    <div class="text">
      <p>Terminal: 12063</p>
      <p>Versão: 22.13.0.15</p>
    </div>
    <div class="center">
      {{ currentDateTime }}
    </div>
    <div class="right">
      <img src="~assets/visa-logo-1.png" alt="LogoVISA" />
      <img src="~assets/mastercard-logo-7.png" alt="LogoMASTER" />
      <img src="~assets/hipercard-logo-1.png" alt="LogoHIPER" />
      <img src="~assets\LogoElo-removebg-preview.png" alt="LogoELO" />
    </div>
  </q-footer>
</template>

<script>
export default {
  data() {
    return {
      currentDateTime: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.currentDateTime = new Date().toLocaleString();
    }, 1000);
  },
};
</script>

<style scoped>
.RodaPe {
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.01px;
  border: none;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 9999;
}

.center {
  font-size: 16px;
  font-weight: bold;
}

.left img,
.right img {
  height: 30px;
  margin: 10px;
}
.text {
  font-size: 14px;
  color: gray;
  text-align: center;
}
</style>
