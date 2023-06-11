<template>
  <q-page
    class="fit column wrap justify-center items-center content-center container"
  >
    <div class="payment-keyboard">
      <q-input
        outlined
        dense
        v-model="paymentValue"
        mask="R$     #.##"
        fill-mask="0"
        reverse-fill-mask
        readonly
        class="large"
      >
      </q-input>
      <div class="keyboard">
        <div class="row">
          <q-btn class="key" @click="appendToInput(1)">1</q-btn>
          <q-btn class="key" @click="appendToInput(2)">2</q-btn>
          <q-btn class="key" @click="appendToInput(3)">3</q-btn>
        </div>
        <div class="row">
          <q-btn class="key" @click="appendToInput(4)">4</q-btn>
          <q-btn class="key" @click="appendToInput(5)">5</q-btn>
          <q-btn class="key" @click="appendToInput(6)">6</q-btn>
        </div>
        <div class="row">
          <q-btn class="key" @click="appendToInput(7)">7</q-btn>
          <q-btn class="key" @click="appendToInput(8)">8</q-btn>
          <q-btn class="key" @click="appendToInput(9)">9</q-btn>
        </div>
        <div class="row">
          <q-btn class="key delete" @click="deleteFromInput">DEL</q-btn>
          <q-btn class="key" @click="appendToInput(0)">0</q-btn>
          <q-btn class="key clear" @click="clearInput">LIMPAR</q-btn>
        </div>
      </div>
    </div>
    <div class="buttons">
      <q-btn class="button" @click="goBack">Voltar</q-btn>
      <q-btn class="buttonAvançar1" @click="goForward">Avançar</q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      origin: null,
      paymentValue: "",
      maxDigits: 6,
    };
  },
  created() {
    this.origin = this.$route.query.origin;
  },

  computed: {
    formattedPaymentValue() {
      console.log(this.paymentValue);
      return this.paymentValue;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      if (this.origin === "pagamento") {
        this.$router.push({
          path: "/pagamentoDinheiro",
          query: {
            paymentValue: this.paymentValue,
          },
        });
      } else if (this.origin === "cartao") {
        this.$router.push("/insiraCartao");
      }
    },
    appendToInput(number) {
      if (this.paymentValue.replace(/[^0-9]/g, "").length < this.maxDigits) {
        this.paymentValue += number.toString();
      }
    },
    deleteFromInput() {
      this.paymentValue = this.paymentValue.slice(0, -1);
    },
    clearInput() {
      this.paymentValue = "";
    },
  },
};
</script>

<style>
.buttonAvançar1 {
  background-color: #129acc;
}
.payment-keyboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.large {
  width: 600px;
  height: 40px;
  font-size: 24px;
  background-color: #fff; /* Fundo branco */
  border: 1px solid #000; /* Borda preta */
  margin-left: 10px;
}

.keyboard {
  display: grid;
  grid-gap: 8px;
  margin-top: 16px;
  height: 600px;
  width: 600px;
}
.buttons {
  position: relative;
  margin-top: 25px;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
}

.row {
  display: flex;
  justify-content: space-between;
}

.key {
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: xx-large;
  background-color: #b9b9b9;
  margin-left: 10px;
}

.delete {
  color: red;
}

.clear {
  color: blue;
}
</style>
