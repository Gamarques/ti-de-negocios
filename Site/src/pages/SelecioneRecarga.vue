<template>
  <q-page
    class="fit column wrap justify-center items-center content-center container"
  >
    <div v-if="origin === 'cartaoTop'">
      <div v-if="showNewScreen">
        <div class="row justify-center">
          <div class="text-h2">
            <p class="top-text">Selecione sua recarga e veja seu saldo!</p>
            <div class="text-subtitle2">
              <p>Cartão 14.07.000000762-1</p>
            </div>
            <div class="buttons">
              <q-btn
                class="vtButton"
                rounded
                style="margin-right: 50px; width: 200px"
                :class="{ selected: selectedButton === 'vtButton' }"
                @click="selectButton('vtButton')"
              >
                Vale transporte
              </q-btn>
              <q-btn
                class="comumButton"
                rounded
                style="margin-right: 50px; width: 200px"
                :class="{ selected: selectedButton === 'comumButton' }"
                @click="selectButton('comumButton')"
              >
                Comum
              </q-btn>
              <q-btn
                class="escolarButton"
                rounded
                style="width: 200px"
                :class="{ selected: selectedButton === 'escolarButton' }"
                @click="selectButton('escolarButton')"
              >
                Escolar
              </q-btn>
            </div>
            <q-input
              class="balance-input"
              outlined
              v-model="balance"
              label="Saldo disponível"
              :disable="true"
            ></q-input>
          </div>
        </div>
        <div class="row justify-between bottom-buttons">
          <q-btn class="back-button" @click="goBack">Voltar</q-btn>
          <q-btn
            class="forward-button"
            style="background-color: #129acc"
            @click="goForward"
            >Avançar</q-btn
          >
        </div>
      </div>
      <div v-else>
        <div class="row justify-center">
          <div class="text-h2">
            <p>Insira seu cartão TOP</p>
            <img src="~assets\cartaotop.png" />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="origin === 'bilheteUnico'">
      <div v-if="showNewScreen">
        <div class="row justify-center">
          <div class="text-h2" style="margin-bottom: 30px">
            <p>Selecione seu tipo de recarga e veja o saldo</p>
          </div>
        </div>
        <div class="buttons">
          <q-btn
            class="vtButton"
            rounded
            style="margin-right: 50px; width: 200px"
            :class="{ selected: selectedButton === 'vtButton' }"
            @click="selectButton('vtButton')"
          >
            Vale transporte
          </q-btn>
          <q-btn
            class="comumButton"
            rounded
            style="margin-right: 50px; width: 200px"
            :class="{ selected: selectedButton === 'comumButton' }"
            @click="selectButton('comumButton')"
          >
            Comum
          </q-btn>
          <q-btn
            class="escolarButton"
            rounded
            style="margin-right: 50px; width: 200px"
            :class="{ selected: selectedButton === 'escolarButton' }"
            @click="selectButton('escolarButton')"
          >
            Escolar
          </q-btn>
          <q-btn
            class="temporalButton"
            rounded
            style="margin-right: 50px; width: 200px"
            :class="{ selected: selectedButton === 'temporalButton' }"
            @click="selectButton('temporalButton')"
            >Temporal</q-btn
          >
          <q-btn
            class="webButton"
            rounded
            style="width: 200px"
            :class="{ selected: selectedButton === 'webButton' }"
            @click="selectButton('webButton')"
            >Compra Web</q-btn
          >
        </div>
        <q-input
          class="balance-input"
          outlined
          v-model="balance"
          label="Saldo disponível"
          :disable="true"
        ></q-input>
        <div class="row">
          <q-input
            outlined
            style="height: 100px; width: 500px"
            v-model="temporal1"
            label="Temporal 1 VE D GRT. Ônibus Validade: Expirada"
          ></q-input>
          <q-input
            outlined
            style="height: 100px; width: 500px"
            v-model="temporal2"
            label="Temporal 2 VE D GRT. Ônibus Validade: Expirada"
          ></q-input>
        </div>
        <div class="row justify-between bottom-buttons">
          <q-btn
            class="back-button"
            style="background-color: #b9b9b9"
            @click="goBack"
            >Voltar</q-btn
          >
          <q-btn
            class="forward-button"
            style="background-color: #129acc"
            @click="goForward"
            >Avançar</q-btn
          >
        </div>
      </div>
      <div v-else>
        <div class="row justify-center">
          <div class="text-h2">
            <p>Insira seu cartão vale transporte</p>
            <img src="~assets\Bilhete_Unico-logo-A071D246F5-seeklogo.com.png" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="origin === 'qrCode'">
      <div row>
        <div class="text-h2">
          <p>Selecione o que deseja comprar</p>
        </div>
        <div class="button-container">
          <q-btn
            class="unidade1Button"
            rounded
            style="width: 200px"
            :class="{ selected: selectedButton === 'unidade1Button' }"
            @click="selectButton('unidade1Button')"
          >
            1 unidade - R$4,40
          </q-btn>
          <q-btn
            class="unidade2Button"
            rounded
            style="width: 200px; margin-top: 20px"
            :class="{ selected: selectedButton === 'unidade2Button' }"
            @click="selectButton('unidade2Button')"
          >
            2 unidades - R$8,80
          </q-btn>
        </div>
        <div
          class="row justify-between bottom-buttons"
          style="margin-top: 100px"
        >
          <q-btn class="back-button" @click="goBack">Voltar</q-btn>
          <q-btn
            @click="redirecionarParaPagamento('qrCode')"
            class="my-custom-button2"
            >Avançar
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      origin: null,
      showNewScreen: false,
      selectedButton: null,
      balance: "",
      showCard: false,
      showProcessing: false,
      showApproved: false,
      showRetireCard: false,
      showPrintReceipt: false,
      showPrintingReceipt: false,
      showRedirect: false,
    };
  },
  created() {
    this.origin = this.$route.query.origin;
    this.startTimer();
  },
  methods: {
    goBack() {
      if (this.origin === "cartaoTop") {
        this.$router.push("/");
      } else if (this.origin === "bilheteUnico") {
        this.$router.push("/");
      } else if (this.origin === "qrCode") {
        this.$router.push("/");
      }
    },
    goForward() {
      if (this.origin === "cartaoTop") {
        this.$router.push("/passo2");
      } else if (this.origin === "bilheteUnico") {
        this.$router.push("/passo2");
      }
    },

    redirecionarParaPagamento(origem) {
      this.$router.push({ path: "/Transacao", query: { origin: "qrCode" } });
    },
    startTimer() {
      setTimeout(() => {
        this.showNewScreen = true;
      }, 3000);
    },
    selectButton(button) {
      this.selectedButton = button;
      // Lógica para atualizar o saldo com base no botão selecionado
      if (button === "vtButton") {
        this.balance = "R$ 50,00";
      } else if (button === "comumButton") {
        this.balance = "R$ 30,00";
      } else if (button === "escolarButton") {
        this.balance = "R$ 20,00";
      } else if (button === "temporalButton") {
        this.balance = "";
      } else if (button === "webButton") {
        this.balance = "";
      }
    },
  },
};
</script>

<style>
.top-text {
  margin-top: 0;
}

.selected {
  background-color: #26eb40;
}

.balance-input {
  margin-top: 10px;
}

.bottom-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.button-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 20px;
}
.my-custom-button2 {
  background-color: #129acc;
}
</style>
