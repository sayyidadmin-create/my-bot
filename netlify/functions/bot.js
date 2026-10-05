const { Bot, webhookCallback } = require("grammy");

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", (ctx) => ctx.reply("Salom! Sizga nima kerak?"));

exports.handler = webhookCallback(bot, "aws-lambda-async");
