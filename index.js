const Telegraf = require("telegraf");
const bot = new Telegraf("1516823565:AAFuLz2uPBPZ1eOWgW5M4Qmkmi82Tdx8Gkk");

bot.start((message) => {
  return message.reply(
    "Ciao, sono il bot ufficiale dei Kings of our Fate, da oggi con il 20% in meno di olio di palma"
  );
});

//--POMERIDIANA--------------

bot.command("pomeridiana", (ctx) =>
  ctx.replyWithPoll(
    "⚔️ Lista Pomeridiana ⚔️",
    [
      "Attività Varie: 14:30-16:00",
      "Attività Varie: 16:00-17:30",
      "RAID: 17:30",
      "Attività Varie: 17:30-19:00",
      "Attività Varie: 19:00-21:00",
    ],
    {
      is_anonymous: false,
      allows_multiple_answers: true,
    }
  )
);

//--SERALE-------------------

bot.command("serale", (ctx) =>
  ctx.replyWithPoll(
    "⚔️ Lista Serale ⚔️",
    [
      "Attività Varie: 21:30-22:30",
      "RAID: 22:30",
      "Attività Varie: 22:30-23:30",
      "Attività Varie: 23:30-00:30",
      "Attività Varie: 00:30 in poi",
    ],
    {
      is_anonymous: false,
      allows_multiple_answers: true,
    }
  )
);

//---SERATA-CROGIOLO-----------------
bot.command("seratacrogiolo", (ctx) =>
  ctx.replyWithPoll(
    "⚔️ TORNEO CROGIOLO ⚔️",
    [
      "TORNEO CROGIOLO: 21:30",
      "Attività Varie: 22:30-23:30",
      "Attività Varie: 23:30-00:30",
      "Attività Varie: 00:30 in poi",
    ],
    {
      is_anonymous: false,
      allows_multiple_answers: true,
    }
  )
);

//----------------HEARS-------------------------------------------------------
bot.hears(/chi\?/i, (message) => {
  return message.reply("Sto Ca**o!😚");
});

bot.hears(/baiano/i, (message) => {
  return message.reply("M*****o!💩");
});

// bot.on("sticker", (message) => message.reply("😎"));

//----------------COMANDI-----------------------------------------------------
/* const questionS = "lista serale";
const answersS = ["opzione1", "opzione2", "opzione3", "opzione4"];
const opts = {
  is_anonymous: false,
};

bot.command("serale", (message) =>
  Telegraf.sendPoll(message.chat.id, questionS, answersS, opts)
); */

/* bot.command("serale", (message) => {
  const questionS = "lista serale";
  const answersS = ["opzione1", "opzione2", "opzione3", "opzione4"];
  const chatId = message.chat.id;
  const opts = {
    is_anonymous: false,
    allows_multiple_answers: true,
  };
  return bot.sendPoll(chatId, questionS, answersS, opts);
}); */

//-----------------------------------------------------------------------------

bot.command("pomeridiana", (message) => message.reply("eh...voleeeeeeevi"));
bot.command("seratacrogiolo", (message) => message.reply("eh...voleeeeeeevi"));
bot.command("voltadivetro", (message) => message.reply("eh...voleeeeeeevi"));

bot.command("roadmap", (message) => {
  return message.reply("⚔️ ROADMAP SETTIMANALE ⚔️: https://imgur.com/CJQCHPH");
});

bot.command("collezionabili", (message) => {
  return message.reply("Puoi controllarlo qui: https://braytech.org/");
});

bot.command("godroll", (message) => {
  return message.reply("⚔️ Puoi controllarlo qui: https://www.light.gg/");
});

bot.command("settoriperduti", (message) => {
  return message.reply(
    "⚔️ Puoi controllarlo qui: https://www.todayindestiny.com/"
  );
});
bot.command("vendors", (message) => {
  return message.reply(
    "⚔️ Puoi controllarlo qui: https://www.todayindestiny.com/vendors/"
  );
});
bot.command("trionfi", (message) => {
  return message.reply("Puoi controllarlo qui: https://braytech.org/");
});

//-------------codice backup funzionante--------------------------------

/* bot.hears(/godroll/i, (message) => {
  return message.reply("Puoi controllarlo qui: https://www.light.gg/");
}); 

 bot.hears(/trionfi/i, (message) => {
  return message.reply("Puoi controllarlo qui: https://braytech.org/");
});

bot.hears(/collezionabili/i, (message) => {
  return message.reply("Puoi controllarlo qui: https://braytech.org/");
});

bot.hears(/vendors/i, (message) => {
  return message.reply(
    "Puoi controllarlo qui: https://www.todayindestiny.com/vendors/"
  );
});

bot.hears(/settori/i, (message) => {
  return message.reply(
    "Puoi controllarlo qui: https://www.todayindestiny.com/"
  );
});
 */

bot.startPolling();
