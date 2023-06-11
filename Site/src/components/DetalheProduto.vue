<template>
  <q-card bordered :class="cor()">
    {{ ativo }} {{ dataAtivo }}
    <q-card-section>
      <div class="text-h2">{{ produto.nome }}</div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      este produto tem id {{ produto.id }}
      <br />
      R$ {{ produto.preco }}
      <br />
      <q-btn v-if="ativo" label="Comprar" @click="onComprarClick" />
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: "DetalheProduto",
  props: {
    produto: Object,
    ativo: { type: Boolean, required: false, default: true },
  },
  data() {
    return {
      //dataAtivo: Boolean(this.ativo),
    };
  },
  computed: {},
  methods: {
    cor() {
      return this.ativo ? "" : "bg-grey-5";
    },
    onComprarClick() {
      this.$emit("CompraProduto", this.produto);
    },
  },
};
</script>
