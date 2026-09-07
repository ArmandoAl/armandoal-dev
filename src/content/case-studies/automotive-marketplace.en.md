---
slug: automotive-marketplace
translationKey: automotive-marketplace
lang: en
title: "Migrating 7 years of native code to Flutter — without pausing the roadmap"
client: "Automotive marketplace platform (under NDA)"
role: "Flutter Developer / Mobile Lead"
period: "May 2024 – Present"
summary: "Unified a seven-year-old Android and iOS codebase into a single Flutter application over 14 months, while shipping seven new product modules in parallel so the business never had to stop delivering features."
context: "The client runs an automotive marketplace platform used by roughly 700 people across multiple car dealerships in Latin America. Their mobile product had been in continuous development for seven years as two entirely separate native codebases: Java on Android and Objective-C on iOS."
problem: "Two independent codebases meant every feature was designed, built, tested and debugged twice — and they had drifted apart, so the same screen behaved differently depending on the device. Maintenance cost grew with each release, stability suffered, and hiring for an aging Objective-C codebase was getting harder every year. The obvious fix was a rewrite, and the obvious objection was the one every CTO raises: the roadmap cannot stop for a year."
approach:
  - "Audited both native codebases to map real feature parity, then sequenced the migration so the highest-traffic flows moved first and could be validated by real users early."
  - "Designed the target architecture before writing product code: a three-layer separation of data, domain and presentation, with a single source of truth for every piece of state."
  - "Standardised state management on a single predictable pattern and centralised dependency wiring through a service locator, so any developer could trace a screen from event to data source without reading the whole repository."
  - "Built the native bridges the product genuinely needed — audio capture with format normalisation across iOS and Android, an embedded web surface, and map integration — keeping platform-specific code isolated behind narrow interfaces."
  - "Ran the migration and new feature development as one stream rather than two, so every new module was built directly in Flutter instead of being written twice and migrated later."
  - "Wrote the architecture documentation and a mandatory per-feature template, then used it to onboard the existing Java and Objective-C engineers onto Flutter until they could ship modules independently."
  - "Scoped and estimated each module task by task — interface, API integration, platform-specific adjustments, testing and release — against committed delivery dates."
constraints: "Feature delivery could not pause: the business needed new capability shipped throughout the migration. The existing engineering team had no Flutter experience and had to keep the native apps alive while learning the new stack. Client-side security and the specific composition of the platform core are confidential and are deliberately not described here."
outcome: "Two codebases became one. The product now ships from a single Flutter codebase across iOS and Android, with the architecture and documentation in place for the in-house team to maintain and extend it. Seven-plus new modules — voice notes, scheduled replies, message comments, local drafts, conversation filters, a gesture-driven Kanban board, and notes, tasks and events for conversation detail — were delivered during the migration rather than after it. The engagement has been continuous since May 2024."
stack:
  - "Flutter"
  - "Dart"
  - "Java"
  - "Kotlin"
  - "Objective-C"
  - "Platform Channels"
  - "Clean Architecture"
  - "Cubit / BLoC"
  - "REST APIs"
metrics:
  - label: "Legacy code replaced"
    value: "7 years"
  - label: "Migration duration"
    value: "14 months"
  - label: "Codebases unified"
    value: "2 → 1"
  - label: "New modules shipped in parallel"
    value: "7+"
  - label: "Users across dealerships"
    value: "~700"
featured: true
order: 1
coverAlt: "Automotive marketplace mobile application unified from two native codebases into a single Flutter application"
gallery:
  - src: ./images/automotive-marketplace-vehicle-form.png
    alt: "Mobile form for editing a vehicle listing, including title, odometer, price, financing and mechanical details"
    kind: mobile
    caption: "Vehicle listing form with publication data"
  - src: ./images/automotive-marketplace-channels.png
    alt: "Mobile screen for selecting publication channels and tracking listing quotas per marketplace"
    kind: mobile
    caption: "Channel selection and quota management"
  - src: ./images/automotive-marketplace-inventory.png
    alt: "Mobile inventory list of active vehicle listings with photos, prices, mileage and status filters"
    kind: mobile
    caption: "Active inventory with filters by listing status"
  - src: ./images/automotive-marketplace-dashboard.png
    alt: "Desktop operations dashboard with inventory age, visits, call intent and message metrics"
    kind: desktop
    caption: "Dealership dashboard for inventory and lead activity"
---

The interesting part of this project was never the migration itself. It was the constraint.

Most migrations freeze the product. The team disappears for a year, the roadmap stalls, and the business pays for a rewrite that delivers nothing new. That trade-off is the single biggest reason migrations get rejected, and it is the reason legacy codebases survive long past the point where they should have been replaced.

Running both streams as one — building each new module directly in the target stack rather than writing it twice — meant the migration paid for itself as it went. The business kept shipping. The codebase kept shrinking.
