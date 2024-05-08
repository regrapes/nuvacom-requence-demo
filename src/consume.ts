import createConsumer from "@requence/consumer";

createConsumer(
  {
    url: "", // add consumer connection string
    version: "1.0.0",
  },
  async () => {
    console.log("got new message");
    return { works: "123" };
  },
);
