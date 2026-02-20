import { Bot, session } from "grammy"
import { i18n } from "./i18n/index"
import { initialSession, SessionData } from "./types/session"
import { registerTaskHandlers } from "./handlers/tasks"

export type BotContext = Parameters<Parameters<typeof session>[0]>[0] & {
    session: SessionData
}

export const createBot = (token: string) => {
    const bot = new Bot<BotContext>(token)

    bot.use(session({ initial: () => initialSession }))
    bot.use(i18n)

    bot.command("start", async (ctx) => {
        await ctx.reply(ctx.t("start"))
    })

    registerTaskHandlers(bot)

    return bot
}
