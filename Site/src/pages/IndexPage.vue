<template>
  <q-page
    class="fit column wrap justify-center items-center content-center container"
  >
    <div class="row text-h2">
      <p>Seja bem-vindo!</p>
    </div>
    <div class="row text-h2">
      <p>Selecione seu produto ou insira seu cartão</p>
    </div>
    <div class="row text-subtitle1">
      <p>Este terminal aceita cartão de débito e dinheiro!</p>
    </div>
    <div class="row justify-center">
      <q-btn
        @click="redirecionarParaPagamento('cartaoTop')"
        rounded
        class="my-custom-button"
      >
        <img
          src="~assets\cartao-transporte-TOP-SP-removebg-preview.png"
          alt="CartaoTOP"
          style="width: auto; height: 350px"
        />
      </q-btn>
      <q-btn
        @click="redirecionarParaPagamento('qrCode')"
        rounded
        class="my-custom-button"
      >
        <img
          src="~assets\QR_Code_Example.svg.png"
          alt="QRcode"
          style="width: auto; height: 350px"
        />
      </q-btn>
      <q-btn
        @click="redirecionarParaPagamento('bilheteUnico')"
        rounded
        class="my-custom-button"
      >
        <img
          src="~assets\Bilhete_Unico-logo-A071D246F5-seeklogo.com.png"
          alt="BilheteUnico"
          style="width: auto; height: 350px"
        />
      </q-btn>
    </div>
    <div class="text-subtitle1">
      Central de atendimento ao cliente (11)3888-2222
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  methods: {
    redirecionarParaPagamento(origem) {
      this.$router.push({
        path: "/SelecionarRecarga",
        query: { origin: origem },
      });
    },
  },
});
</script>

<style>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.my-custom-button {
  margin-left: 30px;
  background-color: #b9b9b9;
}
.text-h2 {
  text-align: center;
}

.text-h2 p {
  margin: 5px 0;
}

.text-subtitle1 {
  font-size: 30px;
  margin-top: 30px;
}

.cartoes {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cartoes img {
  margin: 20px;
}
</style>
