<template>
  <q-container>
    <div class="conteudo">
      <div v-if="showCard">
        <div class="text-h2">
          Insira seu cartão de débito e digite sua senha
        </div>
        <div class="img">
          <img src="~assets/InsiraSeuCartao.png" />
        </div>
      </div>
      <div v-else-if="showProcessing">
        <div class="text-h2">Processando...</div>
      </div>
      <div v-else-if="showApproved">
        <div class="text-h2">Recarga efetuada!</div>
      </div>
      <div v-else-if="showRetireCard">
        <div class="text-h2 retirar">Retire seu cartão de débito</div>
        <div class="img2">
          <img src="~assets\retireSeucartao-removebg-preview.png" />
        </div>
      </div>
      <div v-if="showRetireCard1">
        <div class="text-h2">Retire seu cartão TOP</div>
        <div class="img3">
          <img src="~assets\cartaotop.png" />
        </div>
      </div>
      <div v-if="showPrintReceipt">
        <div class="text-h2">Deseja imprimir seu recibo?</div>
      </div>
      <div v-if="showPrintingReceipt">
        <div class="text-h2">Imprimindo seu recibo...</div>
      </div>
      <div v-if="showPrintingQrCode">
        <div class="text-h2">Imprimindo seu QrCode...</div>
      </div>
      <div v-if="showConfirmQrCode">
        <div class="text-h2">Seu QR Code foi impresso?</div>
        <button class="b1" @click="handleYesClick">Sim</button>
        <button class="b2" @click="handleNoClick">Não</button>
      </div>
    </div>
  </q-container>
  <div v-if="showPrintReceipt" class="buttons1">
    <q-btn class="buttonImprimir" @click="printReceipt">Imprimir</q-btn>
    <q-btn class="buttonNaoImprimir" @click="skipPrinting">Não imprimir</q-btn>
  </div>
</template>

<script>
export default {
  props: {
    showCard: {
      type: Boolean,
      default: false,
    },
    showProcessing: {
      type: Boolean,
      default: false,
    },
    showApproved: {
      type: Boolean,
      default: false,
    },
    showRetireCard: {
      type: Boolean,
      default: false,
    },
    showRetireCard1: {
      type: Boolean,
      default: false,
    },
    showPrintReceipt: {
      type: Boolean,
      default: false,
    },
    showPrintingReceipt: {
      type: Boolean,
      default: false,
    },
    showPrintingQrCode: {
      type: Boolean,
      default: false,
    },
    showConfirmQrCode: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleYesClick() {
      // Lógica para quando o usuário clicar em "Sim"
      this.$router.push("/fechamento");
      this.$emit("handleYesClick");
    },
    handleNoClick() {
      this.$emit("handleNoClick", true);
    },

    printReceipt() {
      // Lógica para imprimir o recibo
    },
    skipPrinting() {
      // Lógica para não imprimir o recibo
    },
  },
};
</script>

<style>
.b1 {
  width: 100px;
}
.b2 {
  width: 100px;
  margin-left: 500px;
  margin-top: 20px;
}
</style>
