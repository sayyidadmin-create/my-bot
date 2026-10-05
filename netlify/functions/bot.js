const { Bot, webhookCallback } = require("grammy");

const bot = new Bot(process.env.8995895931:AAG8Or5LYuLOmuw2uDz3qyn8WR427_XFPLU);

bot.command("start", (ctx) => ctx.reply("Salom! Sizga nima kerak?"));

exports.handler = webhookCallback(bot, "aws-lambda-async");
