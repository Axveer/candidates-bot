# Architecture

---

## Flow

Bot is event-driven and stateless at the handler level.
All flow state (`step`, `answers`, `completed`) lives in the `Candidate` MongoDB document.
Handlers read DB state, mutate it, and persist before replying.

---

## Layers

```
Transport     grammy (Telegram API)
Handlers      src/handlers/ — thin orchestration only
Flow config   src/flow/questions.ts — question definitions
Models        src/models/ — typegoose/mongoose schemas
DB            MongoDB via mongoose
```

---

## Questionnaire state machine

```
/start
  └─> upsert Candidate { step: 0, completed: false, answers: {} }
        └─> send QUESTIONS[0]

on answer (button or text)
  └─> validate
  └─> candidate.answers[key] = value  (save immediately)
  └─> candidate.step++
  └─> if step === QUESTIONS.length
        └─> completed = true → confirmation + notify admins
      else
        └─> send QUESTIONS[step]
```

---

## Principles

- Chat-first UX
- Single command (`/start`) — no command sprawl
- Inline keyboards for constrained choices, free text otherwise
- Incremental persistence — each answer saved individually
- Admin notification decoupled from user reply (fire-and-forget, errors swallowed)
