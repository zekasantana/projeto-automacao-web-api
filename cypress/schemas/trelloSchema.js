const trelloSchema = {
  type: "object",
  required: ["id", "type", "data", "date"],
  properties: {
    id: { type: "string" },
    type: { type: "string" },
    date: { type: "string" },
    data: {
      type: "object",
      required: ["list"],
      properties: {
        list: {
          type: "object",
          required: ["id", "name"],
          properties: {
            id: { type: "string" },
            name: { type: "string" }
          },
          additionalProperties: true
        }
      },
      additionalProperties: true
    }
  },
  additionalProperties: true
};

export default trelloSchema;