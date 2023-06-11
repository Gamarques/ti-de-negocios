<template>
  <q-page
    class="fit column wrap justify-center items-center content-center container"
  >
    <div
      v-if="
        !showApproved &&
        !showRetireCard1 &&
        !showPrintReceipt &&
        !showPrintingReceipt
      "
    >
      <div
        class="box1"
        style="
          padding-bottom: 30px;
          margin-bottom: 30px;
          background-color: aliceblue;
        "
      >
        <div class="box-title" style="background-color: #129acc">
          Recarga selecionada:
        </div>
        <div class="box-content">
          {{ paymentValue }}
        </div>
      </div>
      <div
        class="box2"
        style="
          padding-bottom: 30px;
          margin-bottom: 30px;
          background-color: aliceblue;
        "
      >
        <div class="box-title" style="background-color: #129acc">Inserido:</div>
        <div class="box-content">{{ insertedValue }}</div>
      </div>
      <div
        class="box3"
        style="
          width: 400px;
          padding-bottom: 40px;
          margin-bottom: 30px;
          background-color: aliceblue;
        "
      >
        <div class="box-title" style="background-color: #129acc">Falta:</div>
        <div class="box-content">R$ {{ missingValue }}</div>
      </div>
      <div class="buttons">
        <q-btn class="button" @click="goBack">Voltar</q-btn>
        <q-btn class="buttonAvancar" @click="goForward">Avançar</q-btn>
      </div>
    </div>
    <div v-else-if="showApproved">
      <div class="text-h2">Recarga efetuada!</div>
    </div>
    <div v-else-if="showRetireCard1">
      <div class="text-h2" style="margin-left: 80px; margin-bottom: 20px">
        Retire seu cartão de transporte
      </div>
      <div class="row justify-center">
        <div class="img3" style="margin-left: 80px">
          <img src="~assets\cartaotop.png" />
        </div>
        <div class="img3">
          <img src="~assets\Bilhete_Unico-logo-A071D246F5-seeklogo.com.png" />
        </div>
      </div>
    </div>
    <div v-else-if="showPrintReceipt">
      <div class="text-h2">Deseja imprimir seu recibo?</div>
      <div class="buttons1">
        <q-btn class="buttonImprimir" @click="printReceipt">Imprimir</q-btn>
        <q-btn class="buttonNaoImprimir" @click="skipPrinting"
          >Não imprimir</q-btn
        >
      </div>
    </div>
    <div v-else-if="showPrintingReceipt">
      <div class="text-h2">Imprimindo seu recibo...</div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      selectedRecharge: null,
      insertedValue: 0,
      showApproved: false,
      showRetireCard1: false,
      showPrintReceipt: false,
      showPrintingReceipt: false,
      paymentValue: "",
    };
  },
  created() {
    this.paymentValue = this.$route.query.paymentValue;
    setTimeout(() => {
      this.insertedValue = this.paymentValue;
    }, 5000);
  },
  computed: {
    missingValue() {
      const paymentValueNumber = parseFloat(
        this.paymentValue.replace(/[^\d.]/g, "")
      );
      const insertedValueNumber = parseFloat(
        String(this.insertedValue).replace(/[^\d.]/g, "")
      );
      return paymentValueNumber - insertedValueNumber;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.showApproved = true;
      setTimeout(() => {
        this.showApproved = false;
        this.showRetireCard1 = true;
        setTimeout(() => {
          this.showRetireCard1 = false;
          this.showPrintReceipt = true;
        }, 3000);
      }, 3000);
    },
    printReceipt() {
      this.showPrintReceipt = false;
      this.showPrintingReceipt = true;
      setTimeout(() => {
        this.$router.push("/fechamento");
      }, 3000);
    },
    skipPrinting() {
      this.$router.push("/fechamento");
    },
  },
};
</script>

<style scoped>
.buttonAvancar {
  background-color: #129acc;
}
.button {
  background-color: #b9b9b9;
}
.buttons {
  position: relative;
  margin-top: 100px;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
}
.buttonImprimir {
  width: 220px;
  background-color: #129acc;
  margin-right: 20px;
}
.buttonNaoImprimir {
  width: 220px;
  background-color: #b9b9b9;
  margin-left: 250px;
}

.box {
  background-color: blue; /* Cor de fundo da caixa */
  color: white; /* Cor do texto */
  padding: 16px;
  margin-bottom: 16px;
}

.box-title {
  font-weight: bold;
  font-size: x-large;
  display: flex; /* Adicionado */
  justify-content: center; /* Adicionado */
  align-items: center; /* Adicionado */
  text-align: center; /* Alinha o texto horizontalmente */
}

.box-content {
  margin-top: 8px;
  font-weight: bold;
  font-size: xx-large;
  display: flex; /* Adicionado */
  justify-content: center; /* Adicionado */
  align-items: center; /* Adicionado */
  text-align: center; /* Alinha o texto horizontalmente */
}
</style>
