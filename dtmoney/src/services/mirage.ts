import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transations", () => {
      return [
        {
          id: 1,
          title: "Transition 1",
          amount: 100,
          type: "deposit",
          category: "Food",
          createdAt: new Date(),
        },
      ];
    });
  },
});

export default createServer;
