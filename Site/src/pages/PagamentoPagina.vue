<template>
  <q-page
    class="fit column wrap justify-center items-center content-center container"
  >
    <q-container class="q-pa-md">
      <div class="text-h2">
        <p>Selecione a forma de pagamento!</p>
      </div>
      <q-row justify="center" class="text-center">
        <q-col cols="4" sm="6" md="3">
          <div class="image-container">
            <q-btn
              rounded
              class="my-custom-button"
              @click="redirecionarParaPagamento('pagamento')"
            >
              <img src="~assets\dinheiro5.png" alt="Dinheiro" class="image" />
            </q-btn>
          </div>
        </q-col>
        <q-col cols="4" sm="6" md="3">
          <div class="image-container">
            <q-btn
              rounded
              class="my-custom-button"
              @click="redirecionarParaPagamento('cartao')"
            >
              <img
                src="~assets\cartaoCredito5.png"
                alt="Cartão"
                class="image"
              />
            </q-btn>
          </div>
        </q-col>
      </q-row>
    </q-container>
    <q-row justify="center">
      <div class="text-subtitle2">
        <p>Atenção! Este terminal não devolve troco e não aceita moedas.</p>
      </div>
      <div class="botaoCancelar" style="margin-left: 143px">
        <q-btn to="/" style="background-color: #b9b9b9">Cancelar</q-btn>
      </div>
    </q-row>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      origin: null,
    };
  },
  methods: {
    redirecionarParaPagamento(origem) {
      this.$router.push({
        path: "/pagamento",
        query: { origin: origem },
      });
    },
  },
};
</script>

<style scoped>
.botaoCancelar {
  margin-top: 75px;
  margin-right: 20px;
}
.text-h2 {
  text-align: center;
  margin-bottom: 20px;
}
.my-custom-button {
  margin-left: 10px;
}
.text-center {
  display: flex;
  justify-content: center;
}

.image-container {
  text-align: center;
  margin-right: 20px;
}

.image {
  width: 100%;
  height: auto;
}

p {
  margin-top: 10px;
  text-align: center;
}
</style>
