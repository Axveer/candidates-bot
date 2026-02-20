import "dotenv/config"
import { createBot } from "./bot"

const token = process.env.BOT_TOKEN
if (!token) throw new Error("BOT_TOKEN missing")

const bot = createBot(token)

bot.start()
