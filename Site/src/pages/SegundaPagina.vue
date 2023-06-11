<template>
  <q-page class="fit column wrap justify-start items-start content-start">
    <div class="row">
      <h2>Segunda Página</h2>
    </div>
    <div class="row text-h2">
      <q-btn to="/" icon="west">Voltar</q-btn>
      <q-btn to="/selecionar">Selecionar</q-btn>
      <q-btn to="/passo3" icon-right="east" label="Proximo" />
      <!--
      <q-btn
        v-for="botao in botoes"
        :key="botao.label"
        :to="botao.to"
        :icon="botao.icon"
        :label="botao.label"
      />
      -->
    </div>
  </q-page>
</template>
<script>
export default {
  name: "SegundaPagina",
  data() {
    return {
      botoes: [
        { label: "Voltar", icon: "west", to: "/" },
        { label: "Selecionar", to: "/selecionar" },
        { label: "Proximo", icon: "east", to: "/passo3" },
      ],
    };
  },
};
</script>
