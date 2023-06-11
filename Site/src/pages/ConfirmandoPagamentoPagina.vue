<template>
  <q-page
    class="fit column wrap justify-center items-center content-center container"
  >
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
          <div class="text-h2" style="margin-left: 80px; margin-bottom: 20px">
            Retire seu cartão de transporte
          </div>
          <div class="row justify-center">
            <div class="img3">
              <img src="~assets\cartaotop.png" />
            </div>
            <div class="img3">
              <img
                src="~assets\Bilhete_Unico-logo-A071D246F5-seeklogo.com.png"
              />
            </div>
          </div>
        </div>
        <div v-if="showPrintReceipt">
          <div class="text-h2">Deseja imprimir seu recibo?</div>
        </div>
        <div v-if="showPrintingReceipt">
          <div class="text-h2">Imprimindo seu recibo...</div>
        </div>
      </div>
    </q-container>
    <div v-if="showPrintReceipt" class="buttons1">
      <q-btn class="buttonImprimir" @click="printReceipt">Imprimir</q-btn>
      <q-btn class="buttonNaoImprimir" @click="skipPrinting"
        >Não imprimir</q-btn
      >
    </div>
    <div v-if="showCard || showPassword" class="buttons">
      <q-btn class="buttonVoltar1" @click="goBack">Voltar</q-btn>
      <q-btn class="buttonAvançar1" @click="goForward">Avançar</q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      showCard: true,
      showProcessing: false,
      showApproved: false,
      showRetireCard: false,
      showPrintReceipt: false,
      showPrintingReceipt: false,
      showRedirect: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      if (this.showCard) {
        this.showCard = false;
        this.showProcessing = true;
        setTimeout(() => {
          this.showProcessing = false;
          this.showApproved = true;
          setTimeout(() => {
            this.showApproved = false;
            this.showRetireCard = true;
            setTimeout(() => {
              this.showRetireCard = false;
              this.showPrintReceipt = true;
            }, 3000);
          }, 3000);
        }, 3000);
      } else if (this.showPrintReceipt) {
        this.showPrintReceipt = false;
        this.showPrintingReceipt = true;
        setTimeout(() => {
          this.showPrintingReceipt = false;
          // Redirecionar para outra página
          this.$router.push("/fechamento");
        }, 3000);
      }
    },
    printReceipt() {
      // Lógica para imprimir o recibo
      this.showPrintReceipt = false;
      this.showPrintingReceipt = true;
      setTimeout(() => {
        this.showPrintingReceipt = false;
        this.showRetireCard1 = true;
        setTimeout(() => {
          // Redirecionar para outra página
          this.$router.push("/fechamento");
        }, 5000);
      }, 5000);
    },
    skipPrinting() {
      // Lógica quando o usuário escolhe não imprimir
      this.showPrintReceipt = false;
      this.showRetireCard1 = true;
      setTimeout(() => {
        // Redirecionar para outra página
        this.$router.push("/fechamento");
      }, 5000);
    },
  },
};
</script>

<style>
.img2 {
  margin-right: 75px;
  display: flex;
  align-items: center;
}

.retirar {
  justify-content: center;
  margin-left: 10px;
  display: flex;
  align-items: center;
}
.conteudo {
  margin-top: 85px;
  margin-left: 14px;
}
.text-h2 {
  justify-content: center;
  margin-left: 10px;
}
.buttonAvançar1 {
  background-color: #129acc;
}
.buttonVoltar1 {
  background-color: #b9b9b9;
}
.buttons {
  position: relative;
  margin-top: 200px;
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
  margin-left: 20px;
}
.img {
  margin-left: 100px;
}
.buttons1 {
  margin-left: 20px;
  margin-top: 20px;
}
.img3 {
  margin-left: 150px;
}
</style>
