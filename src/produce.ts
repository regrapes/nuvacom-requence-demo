import createProducer from "@requence/producer";

const producer = await createProducer("" /* add tenant connection string */);

const task = producer
  .createTask((builder) =>
    builder.addService("demo", "1").withAlias("alias-demo"),
  )
  .withMeta({ traceId: "abc" });

const result = await task.run((update) => {
  console.log(update.type);
});

console.log(result.getResults());
