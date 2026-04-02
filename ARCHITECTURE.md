# Architecture

---

## Flow

Bot is event-driven.
Handlers must stay stateless.
Persistence is abstracted from handlers.

---

## Layers

Transport: Telegram / grammy
Application: handlers
Infrastructure: DB / scheduler

---

## Principles

- Chat-first UX
- Minimal commands
- Inline actions over menus
- State in session → DB later
- Handlers must be composable
