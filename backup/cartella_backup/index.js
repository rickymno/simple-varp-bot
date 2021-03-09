const TelegramBot = require("node-telegram-bot-api");
const Telegraf = require("telegraf");
const bot = new Telegraf("1516823565:AAFuLz2uPBPZ1eOWgW5M4Qmkmi82Tdx8Gkk");

bot.start((message) => {
  return message.reply(
    "Ciao, sono il bot ufficiale dei Kings of our Fate, per ora sono solo uno stagista"
  );
});
bot.hears(/chi\?/i, (message) => {
  return message.reply("Sto Ca**o!😚");
});

bot.hears(/baiano/i, (message) => {
  return message.reply("M*****o!💩");
});

bot.on("sticker", (message) => message.reply("😎"));

bot.command("serale", (command) => {
  return command.reply(
    "https://images.everyeye.it/img-notizie/destiny-2-stagione-dell-intrepido-calendario-italiano-eventi-v3-431500.jpg"
  );
});
bot.startPolling();
