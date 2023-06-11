import { defineStore } from "pinia";
const useStore = defineStore("appStore", {
  state: () => ({
    cliente: null,
    compras: [],
    produtos: [
      { id: 1, nome: "Produto 1", preco: 10.0 },
      { id: 2, nome: "Produto 2", preco: 20.0 },
      { id: 3, nome: "Produto 3", preco: 30.0 },
      { id: 4, nome: "Produto 4", preco: 40.0 },
    ],
  }),
});
const appStore = useStore();
export default appStore;
