# Candidates Bot

Telegram bot for collecting candidate applications during hiring.

Guides applicants through a short questionnaire and stores responses incrementally in MongoDB. Notifies admins on each new submission.

---

## Features

- Configurable multi-step questionnaire (buttons or free text)
- Answers saved after each step — no data lost on restart
- Admin notifications on submission
- Restart via `/start` at any time
- RU / EN localization scaffold

---

## Stack

- TypeScript (strict)
- grammy + @grammyjs/i18n
- @typegoose/typegoose + mongoose
- dotenv

---

## Getting started

```bash
npm install
cp .env.example .env
# fill in BOT_TOKEN, MONGO_URI, ADMIN_IDS
npm run dev
```

---

## Configuration

### Questions

Edit `src/flow/questions.ts` to add, remove, or reorder questions:

```ts
{
  key: 'position',          // stored field name
  text: 'Question text?',   // shown to the user
  type: 'buttons',          // 'buttons' | 'text'
  options: ['A', 'B'],      // required for type: 'buttons'
}
```

### Admin IDs

Set comma-separated Telegram user IDs in `.env`:

```
ADMIN_IDS=123456789,987654321
```

---

## Commands

| Command | Description |
|---------|-------------|
| `/start` | Start or restart the application |
