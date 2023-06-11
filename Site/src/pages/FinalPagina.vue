<template>
  <q-page
    class="fit column wrap justify-center items-center content-center container"
  >
    <div class="row text-h2">
      <p>Autopass agradece e desejamos uma boa viagem!</p>
    </div>
    <div class="row text-subtitle1">
      <p>Baixe nosso aplicativo escaneando o QRcode abaixo</p>
    </div>
    <div class="img">
      <img src="~assets\AppTopQRcode-removebg-preview.png" alt="QRcode" />
    </div>
    <div>
      <p v-if="showMessage">
        Redirecionando para a tela inicial em {{ countdown }} segundos...
      </p>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      countdown: 5, // Número de segundos para redirecionar
      showMessage: true, // Variável para controlar a exibição da mensagem
    };
  },
  mounted() {
    setTimeout(() => {
      this.redirectToHome();
    }, 5000); // Tempo em milissegundos (neste exemplo, 5000 ms = 5 segundos)
  },
  methods: {
    redirectToHome() {
      this.showMessage = false; // Esconde a mensagem antes de redirecionar
      this.$router.push("/");
    },
  },
};
</script>

<style>
.text-h2 p {
  text-align: center;
  margin: 5px 0;
}

.text-subtitle1 {
  text-align: center;
  font-size: 30px;
  margin-top: 30px;
}

.img {
  align-items: center;
}
</style>
