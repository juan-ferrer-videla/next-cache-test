# Project Setup

This guide explains how to set up the project for local development.

## Prerequisites

- Node.js

## 1. Install dependencies

```bash
npm install
# or
pnpm install
```

## 2. Start development server

```bash
npm run dev
# or
pnpm dev
```

## Known Issue

After creating an admin user, the app does not navigate to the protected route on the first attempt, even when the user is authorized. The route also does not redirect back and appears unable to render its content.
