/* eslint-disable import/no-anonymous-default-export */
import { Model, createServer } from "miragejs";

export default function ({ environment = "development" } = {}) {
  return createServer({
    environment,
    /* serializers: {
      expenses: RestSerializer,
    }, */
    models: {
      expenses: Model,
    },
    seeds(server) {
      server.create("expense", {
        date: "2021-08-16",
        description: "bla bla bla",
        category: "A",
        amount: "199",
      });
      server.create("expense", {
        date: "2021-09-16",
        description: "foo foo foo",
        category: "B",
        amount: "179",
      });
    },
    routes() {
      this.namespace = "api/v1/expenses";
      this.get("/", (schema, request) => {
        return schema.expenses.all();
      });
      this.get("/:id", (schema, request) => {
        let id = request.params.id;
        return schema.expenses.find(id);
      });
      this.post("/", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.expenses.create(attrs);
      });
      this.patch("/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let expense = schema.expenses.find(id);
        return expense.update(newAttrs);
      });
      this.delete("/:id", (schema, request) => {
        let id = request.params.id;
        let expense = schema.expenses.find(id);
        expense.destroy();
        return "deleted successfully";
      });
    },
  });
}
