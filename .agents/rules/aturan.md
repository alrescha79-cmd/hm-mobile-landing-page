---
trigger: always_on
---

# AI AGENT EXECUTION RULES
# PROJECT: INTENTA
# PURPOSE: Prevent hallucination, enforce consistency, maintain clean architecture and stable implementation.

━━━━━━━━━━━━━━━━━━━━
# 🧠 CORE PRINCIPLES
━━━━━━━━━━━━━━━━━━━━

You are NOT allowed to:
- invent features
- invent APIs
- invent libraries
- invent architecture
- invent database schema
- invent UI flows
- invent business logic

ONLY implement what is explicitly defined in the project brief and instructions.

If something is unclear:
- choose the simplest implementation
- stay within MVP scope
- avoid assumptions

━━━━━━━━━━━━━━━━━━━━
# 🎯 PRIMARY OBJECTIVE
━━━━━━━━━━━━━━━━━━━━

Your job is NOT to create a perfect enterprise platform.

Your job is to:
- create a stable MVP
- maintain consistency
- produce clean architecture
- avoid unnecessary complexity
- ensure the app is demo-ready

Always prioritize:
1. Simplicity
2. Stability
3. Readability
4. Consistency
5. Maintainability

━━━━━━━━━━━━━━━━━━━━
# 🚫 ANTI-HALLUCINATION RULES
━━━━━━━━━━━━━━━━━━━━

DO NOT:
- create fictional package names
- create fictional APIs
- create fictional Firebase methods
- create imaginary Gemini SDK usage
- assume Firestore supports SQL-like joins
- invent unsupported Next.js features
- create fake environment variables

Before using any library or API:
- verify the syntax is real
- use official implementation patterns
- follow latest stable conventions

If uncertain:
- use minimal standard implementation
- avoid advanced abstractions

━━━━━━━━━━━━━━━━━━━━
# ⚙️ TECH STACK IMMUTABILITY RULE
━━━━━━━━━━━━━━━━━━━━

DO NOT change the stack.

MANDATORY STACK:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Firebase Firestore
- Firebase Auth
- Gemini API

DO NOT replace:
- Firestore with PostgreSQL
- Firebase Auth with Auth.js
- Tailwind with CSS modules
- Next.js with another framework

━━━━━━━━━━━━━━━━━━━━
# 🧱 ARCHITECTURE CONSISTENCY RULES
━━━━━━━━━━━━━━━━━━━━

Maintain consistent structure.

DO NOT:
- randomly move files
- mix business logic inside UI
- place API logic inside components
- create duplicate utility functions
- create duplicate types

Use:
- services for business logic
- lib for configs/utilities
- components for UI
- hooks for reusable client logic

━━━━━━━━━━━━━━━━━━━━
# 📁 FILE ORGANIZATION RULES
━━━━━━━━━━━━━━━━━━━━

Every file must have:
- single responsibility
- clear naming
- predictable location

DO NOT:
- create giant files
- create components over 300 lines
- create deeply nested folders unnecessarily

Preferred:
- small reusable modules
- flat and readable structure

━━━━━━━━━━━━━━━━━━━━
# 🔥 FIRESTORE RULES
━━━━━━━━━━━━━━━━━━━━

Firestore is NOT relational.

DO:
- use top-level collections
- denormalize data when necessary
- optimize for reads

DO NOT:
- simulate SQL joins
- create complex nested structures
- over-normalize data
- create unnecessary subcollections

Collections allowed:
- users
- requests
- offers

━━━━━━━━━━━━━━━━━━━━
# 🔐 AUTH RULES
━━━━━━━━━━━━━━━━━━━━

Authentication rules must remain consistent.

Unauthenticated users:
- can browse
- cannot create requests
- cannot submit offers

Authenticated users:
- can create requests
- can submit offers

DO NOT create:
- admin role
- moderator role
- RBAC system

━━━━━━━━━━━━━━━━━━━━
# 🎨 UI/UX CONSISTENCY RULES
━━━━━━━━━━━━━━━━━━━━

The UI must remain:
- minimal
- clean
- mobile-first
- conversational

DO NOT:
- redesign into dashboard-heavy UI
- create enterprise-style admin layouts
- add unnecessary navigation
- overload screens

Every screen must have:
- one primary purpose
- one clear CTA

━━━━━━━━━━━━━━━━━━━━
# 📱 MOBILE-FIRST RULES
━━━━━━━━━━━━━━━━━━━━

Always design for mobile first.

Requirements:
- touch-friendly spacing
- large tap targets
- readable typography
- responsive layout

DO NOT:
- prioritize desktop layouts first
- use tiny buttons
- create complex multi-column layouts on mobile

━━━━━━━━━━━━━━━━━━━━
# 🎯 MVP SCOPE ENFORCEMENT
━━━━━━━━━━━━━━━━━━━━

ONLY implement:

✅ Authentication
✅ Create request
✅ List requests
✅ Submit offers
✅ View offers
✅ Accept offer
✅ AI intent parsing
✅ AI summary

DO NOT implement:
❌ payment system
❌ notifications
❌ realtime websocket system
❌ advanced analytics
❌ chat system
❌ admin dashboard
❌ seller verification
❌ rating system
❌ social features

━━━━━━━━━━━━━━━━━━━━
# 🤖 AI IMPLEMENTATION RULES
━━━━━━━━━━━━━━━━━━━━

Gemini API should ONLY be used for:
1. intent parsing
2. offer summary

DO NOT:
- create autonomous AI agents
- create AI decision-making systems
- create unnecessary prompt chains

Keep AI usage:
- simple
- deterministic
- structured

Preferred output:
JSON format.

━━━━━━━━━━━━━━━━━━━━
# 🔌 API RULES
━━━━━━━━━━━━━━━━━━━━

All APIs must:
- validate input using Zod
- return consistent JSON
- handle errors gracefully

Standard response format:

Success:
{
  success: true,
  data: ...
}

Error:
{
  success: false,
  error: ...
}

DO NOT:
- return inconsistent structures
- expose stack traces
- skip validation

━━━━━━━━━━━━━━━━━━━━
# 🧪 TYPE SAFETY RULES
━━━━━━━━━━━━━━━━━━━━

TypeScript STRICT MODE is mandatory.

DO NOT:
- use `any`
- suppress errors unnecessarily
- bypass typing

Prefer:
- reusable interfaces
- shared types
- explicit return types

━━━━━━━━━━━━━━━━━━━━
# 🧩 COMPONENT RULES
━━━━━━━━━━━━━━━━━━━━

Each component must:
- have one responsibility
- be reusable
- remain readable

DO NOT:
- mix fetching + UI + business logic together
- create monolithic components

Preferred patterns:
- container/presentation separation
- reusable UI primitives

━━━━━━━━━━━━━━━━━━━━
# ⚡ PERFORMANCE RULES
━━━━━━━━━━━━━━━━━━━━

Optimize for:
- fast initial load
- mobile performance
- low JS bundle size

DO:
- prefer server components
- lazy load heavy components
- minimize client-side state

DO NOT:
- overuse useEffect
- fetch unnecessarily on client
- create excessive re-renders

━━━━━━━━━━━━━━━━━━━━
# ☁️ DEPLOYMENT RULES
━━━━━━━━━━━━━━━━━━━━

The project MUST:
- build successfully
- run locally
- deploy cleanly to Cloud Run

DO NOT:
- leave broken imports
- leave unused environment variables
- leave failing builds

Before finalizing:
- verify TypeScript passes
- verify lint passes
- verify production build passes

━━━━━━━━━━━━━━━━━━━━
# 🧹 CODE CLEANLINESS RULES
━━━━━━━━━━━━━━━━━━━━

DO:
- use ESLint
- use Prettier
- remove dead code
- remove unused imports
- keep naming consistent

DO NOT:
- leave TODO comments everywhere
- leave console.logs in production
- duplicate code unnecessarily

━━━━━━━━━━━━━━━━━━━━
# 🚨 DECISION-MAKING PRIORITY
━━━━━━━━━━━━━━━━━━━━

When making implementation decisions:

Priority order:
1. Simplicity
2. Stability
3. Maintainability
4. Consistency
5. Performance
6. Scalability

NOT:
- complexity
- cleverness
- abstraction obsession

━━━━━━━━━━━━━━━━━━━━
# 🏁 FINAL EXECUTION RULE
━━━━━━━━━━━━━━━━━━━━

The final product should feel like:
- a real startup MVP
- polished and intentional
- simple and intelligent
- demo-ready
- modern and mobile-friendly

NOT:
- over-engineered
- enterprise-heavy
- experimental
- feature bloated

Always remain aligned with:
- the original product vision
- MVP scope
- mobile-first UX
- clean architecture
- production-quality consistency