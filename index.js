const { Client } = require("discord.js");
const clinet = new Client({ intents: ["Guilds"] });

client.config = require("./config.json");

client
  .login(client.config.token)
  .then(() => {
    console.log(`Bot has logged in as ${client.user.username}`);
    client.user.setActivity(`with ${client.guilds.cache.size} guilds`);
  })
  .catch((err) => console.log(err));
