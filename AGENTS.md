# AGENTS.md

Telegram candidate intake bot built with grammy and MongoDB.

---

## Coding rules

- Use TypeScript strict mode
- Keep handlers thin — no business logic inside them
- State lives in DB (`Candidate` document), not session
- Session holds only locale
- `markModified('answers')` is required after mutating the `answers` record (mongoose Mixed)

---

## Project structure

```
src/
  flow/questions.ts       # question config — single source of truth
  handlers/flow.ts        # questionnaire flow handler
  models/Candidate.ts     # DB model (step, answers, completed)
  models/User.ts          # user profile model
  models/index.ts         # model exports
  bot.ts                  # bot setup, middleware registration
  index.ts                # entrypoint — DB connect, setMyCommands, bot.start
  i18n/                   # fluent locale strings
  types/session.ts        # SessionData (locale only)
```

---

## When adding a question

1. Add an entry to `QUESTIONS` in `src/flow/questions.ts`
2. No other file needs to change

## When adding a new feature

1. Add model / update `Candidate.ts` if persistence is needed
2. Add or update handler in `src/handlers/`
3. Register handler in `src/bot.ts`
4. Add i18n strings if user-facing text is involved

---

## Naming

- Handlers: `registerXHandlers`
- Models: noun, PascalCase
- Functions: verb-based, camelCase

---

## Anti-patterns

- Fat handlers with embedded business logic
- Storing flow state in session (use DB)
- Implicit mutations without `markModified`
- Sending messages to admins before saving to DB
