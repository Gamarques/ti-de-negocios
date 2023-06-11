<template>
  <q-page
    class="fit column wrap justify-center items-center content-center container"
  >
    <div v-if="origin === 'cartaoTop'">
      <!-- Conteúdo para origin === 'cartaoTop' -->
      <h2>Origem: Cartão TOP</h2>
      <!-- Adicione o conteúdo específico para a opção 'cartaoTop' aqui -->
    </div>
    <div v-else-if="origin === 'qrCode'">
      <!-- Conteúdo para origin === 'qrCode' -->
      <AprovandoPagamento
        :showCard="showCard"
        :showProcessing="showProcessing"
        :showApproved="showApproved"
        :showPrintingQrCode="showPrintingQrCode"
        :showConfirmQrCode="showConfirmQrCode"
        @handleYesClick="handleYesClick"
        @handleNoClick="handleNoClick"
      />
      <!-- Adicione o conteúdo específico para a opção 'qrCode' aqui -->
    </div>
    <div v-else-if="origin === 'bilheteUnico'">
      <!-- Conteúdo para origin === 'bilheteUnico' -->
      <h2>Origem: Bilhete Único</h2>
      <!-- Adicione o conteúdo específico para a opção 'bilheteUnico' aqui -->
    </div>
    <div v-else>
      <!-- Opção padrão para qualquer outro valor de origin -->
      <h2>Origem desconhecida</h2>
      <!-- Adicione o conteúdo padrão aqui -->
    </div>
    <div v-if="showCard">
      <div style="display: flex; justify-content: space-between">
        <q-btn class="buttonVoltar1" @click="goBack">Voltar</q-btn>
        <div style="width: 960px"></div>
        <!-- Espaço de 200 pixels -->
        <q-btn class="buttonAvançar1" @click="goForward">Avançar</q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import AprovandoPagamento from "src/components/AprovandoPagamento.vue";

export default {
  components: {
    AprovandoPagamento,
  },
  data() {
    return {
      origin: "", // Defina o valor da origem aqui
      showCard: true,
      showProcessing: false,
      showApproved: false,
      showRetireCard: false,
      showPrintReceipt: false,
      showPrintingReceipt: false,
      showRedirect: false,
      showPrintingQrCode: false,
      showConfirmQrCode: false,
    };
  },
  created() {
    // Recuperando a origem da URL
    this.origin = this.$route.query.origin;
  },
  methods: {
    handleYesClick() {},
    handleNoClick(returnToPrintingQrCode) {
      if (returnToPrintingQrCode) {
        this.showConfirmQrCode = false;
        this.showPrintingQrCode = true;
        setTimeout(() => {
          this.showPrintingQrCode = false;
          this.showConfirmQrCode = true;
        }, 3000);
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      // Avançar para a próxima etapa
      this.showCard = false;
      this.showProcessing = true;
      setTimeout(() => {
        this.showProcessing = false;
        this.showApproved = true;

        setTimeout(() => {
          this.showApproved = false;
          this.showPrintingQrCode = true;

          setTimeout(() => {
            this.showPrintingQrCode = false;
            this.showConfirmQrCode = true;
          }, 3000);
        }, 3000);
      }, 3000);
    },
  },
};
</script>

<style>
.buttonAvançar1 {
  background-color: #129acc;
}
</style>
