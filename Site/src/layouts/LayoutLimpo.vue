<template>
  <q-layout view="hHh lpR fFf" class="main-layout">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <img src="~assets/logo_provisorio.svg" style="height: 60px" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <RodaPe />
  </q-layout>
</template>
<script>
import RodaPe from "components/RodaPe.vue";
export default {
  name: "LayoutLimpo",
  components: {
    RodaPe,
  },
};
</script>
<style>
.main-layout {
  background-color: #e6e4e4;
}
</style>
