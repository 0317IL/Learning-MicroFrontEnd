import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@BMl/counting",
  app: () =>
    System.import("@BMl/counting"),
  activeWhen: (location) => location.pathname === "/counting",
});

registerApplication({
  name: "@BMl/multiples",
  app: () =>
    System.import("@BMl/multiples"),
  activeWhen: ["/multiples"],
});

registerApplication({
  name: "@BMl/to-do-list",
  app: () =>
    System.import("@BMl/to-do-list"),
  activeWhen: (location) => location.pathname === "/todolist",
});

registerApplication({
  name: "@BMl/parcel",
  app: () =>
    System.import("@BMl/parcel"),
  activeWhen: (location) => location.pathname === "/parcel",
});

registerApplication({
  name: "@BMl/lazy",
  app: () =>
    System.import("@BMl/lazy"),
  activeWhen: ["/lazy"],
});

registerApplication({
  name: "@BMl/header",
  app: () =>
    System.import("@BMl/header"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
