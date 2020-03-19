const http = require("http");

http
  .createServer(function(request, response) {
    response.end("Hello world!");
  })
  .listen(8000);

const Telegraf = require("telegraf");

const bot = new Telegraf("1136599901:AAHenojB9a7-ddBoIq12yv4uXFvUbqf8mRk");
bot.start(ctx =>
  ctx.reply("Ты можешь написать мне 'Привет' или написать 2+2 и я посчитаю.")
);
bot.help(ctx => ctx.reply("Я сам нуждаюсь в помощи :("));

bot.hears("Привет", ctx => ctx.reply("Приветики."));
bot.hears("2+2", ctx => ctx.reply("4"));

bot.on("message", ctx => {
  return ctx.reply("Упс, такой команды я не знаю.");
});

bot.launch();
