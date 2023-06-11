const routes = [
  {
    path: "/",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
    //component: () => import('layouts/MainLayout.vue'),
    //children: [
    //  { path: '', component: () => import('pages/IndexPage.vue') }
    //]
  },
  {
    path: "/passo2",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [
      { path: "", component: () => import("pages/PagamentoPagina.vue") },
    ],
  },
  {
    path: "/pagamento",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [
      { path: "", component: () => import("pages/InserirvalorPagina.vue") },
    ],
  },
  {
    path: "/pagamentoDinheiro",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [
      { path: "", component: () => import("pages/PagamentoDinheiro.vue") },
    ],
  },
  {
    path: "/insiraCartao",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/ConfirmandoPagamentoPagina.vue"),
      },
    ],
  },
  {
    path: "/Transacao",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [
      { path: "", component: () => import("pages/TransacaoPagina.vue") },
    ],
  },

  /*{
    path: "/passo2",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [
      { path: "", component: () => import("pages/SegundaPagina.vue") },
    ],
  },
  */
  {
    path: "/selecionarRecarga",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [
      { path: "", component: () => import("pages/SelecioneRecarga.vue") },
    ],
  },

  {
    path: "/fechamento",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [{ path: "", component: () => import("pages/FinalPagina.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
