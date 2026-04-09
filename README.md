# Project Setup

This guide explains how to set up the project for local development.

## Prerequisites

- Node.js
- Turso CLI

## 1. Install Turso CLI

Follow the official installation guide:  
https://docs.turso.tech/cli/installation

## 2. Install dependencies

```bash
npm install
# or
pnpm install
```

## 3. Run local database

This command starts the local Turso database.

```bash
npm run db
# or
pnpm db
```

## 4. Sync database schema

Push the schema to the local database using Drizzle:

```bash
npx drizzle-kit push
# or
pnpm exec drizzle-kit push
```

## 5. Start development server

```bash
npm run dev
# or
pnpm dev
```

## Known Issue

After creating an admin user, the app does not navigate to the protected route on the first attempt, even when the user is authorized. The route also does not redirect back and appears unable to render its content.
