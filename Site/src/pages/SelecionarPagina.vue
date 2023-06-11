<template>
  <q-page class="fit column wrap justify-start items-start content-start">
    {{ produtos }}
    <div class="row">
      <h2>Selecione opções</h2>
    </div>
    <div class="row" style="width: 100%">
      <div
        class="col-lg-3 col-md-4 col-sm-12"
        v-for="produto in produtos"
        :key="produto.id"
      >
        <DetalheProduto
          :produto="produto"
          @CompraProduto="onCompraProduto"
          :ativo="testaAtivo(produto)"
        />
      </div>
    </div>
    <div class="row text-h2">
      <q-btn to="/passo2">Voltar</q-btn>
    </div>
  </q-page>
</template>
<script>
import { useQuasar } from "quasar";
const $q = useQuasar();
import appStore from "src/stores/appStore";
import DetalheProduto from "src/components/DetalheProduto.vue";
export default {
  name: "SelecionarPagina",
  components: { DetalheProduto },
  data() {
    return {
      selecionados: [],
      produtos: appStore.produtos,
    };
  },
  created() {},
  methods: {
    testaAtivo(produto) {
      console.log(this.selecionados.indexOf(produto.id));
      return this.selecionados.indexOf(produto.id) == -1;
    },
    onCompraProduto(produto) {
      this.selecionados.push(produto.id);
      this.$q.notify({
        message:
          "<h2>Compra do produto " +
          produto.nome +
          " realizada com sucesso!</h2>",
        html: true,
        color: "primary",
        multiLine: true,
        avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
        timeout: 2000,
      });
      //alert("Compra do produto " + produto.nome + " realizada com sucesso!");
    },
  },
};
</script>
