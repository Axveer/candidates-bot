import { Bot, session } from "grammy"
import { BotContext } from "../bot"

export const registerTaskHandlers = (bot: Bot<BotContext>) => {
    bot.on("message:text", async (ctx) => {
        const text = ctx.message.text
        const session = ctx.session as SessionData

        session.tasks.push({ text })

        await ctx.reply(ctx.t("add_task"))

        await ctx.replyWithChecklist(
            ctx.t("checklist_title"),
            session.tasks.map((t) => ({ text: t.text }))
        )
    })
}
