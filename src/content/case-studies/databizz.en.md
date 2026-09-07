---
slug: databizz-en
translationKey: databizz
lang: en
title: "A point-of-sale system built end to end — client, backend and hardware"
client: "DataBizz"
role: "Full-Stack Developer"
period: "April 2026 – August 2026"
summary: "Designed and delivered a complete point-of-sale system to production in five months: a Flutter desktop and tablet terminal, a Dart REST backend, a native Android hardware layer and a packaged Windows installer for on-site rollout."
context: "DataBizz needed a point-of-sale system for retail operations — not a prototype, but software that runs a counter all day on real hardware, in venues where the person using it is not technical and the person fixing it is not on site."
problem: "A point-of-sale system fails differently than most software. It has to keep working when the network drops, run on whatever hardware the venue already owns, survive being installed by someone who is not an engineer, and never lose a ticket. That spans four distinct layers — interface, business logic, hardware and distribution — and a gap in any one of them makes the other three worthless."
approach:
  - "Built the terminal as a single Flutter application targeting desktop and tablet, so one codebase covers every form factor a venue might have on the counter."
  - "Wrote the backend in Dart as a REST service, keeping the entire system in one language so business rules could be reasoned about without switching mental models between client and server."
  - "Implemented the native Android layer for point-of-sale hardware, isolating device-specific behaviour behind a narrow interface rather than letting it leak into product code."
  - "Packaged a Windows installer with automated deployment scripting so a non-technical operator could complete an on-site installation without an engineer present."
  - "Hardened the login flow and documented the ticket lifecycle and open-account architecture as reviewable written analysis, so the client owns the reasoning and not just the code."
  - "Ran a read-only organisation audit of the repository at handover, mapping structure and legibility so the client could take over maintenance."
constraints: "The system had to run on hardware already installed at the venue rather than hardware chosen for it. Installation had to be completed by staff, not engineers. The codebase is the client's property; implementation details of their business logic are not published here."
outcome: "The system shipped to production and runs the full retail flow across four layers — Flutter terminal, Dart backend, native Android hardware integration and Windows distribution. Delivered over five months, with the architecture, ticket flow and account model documented in writing so the client's team can maintain and extend it independently."
stack:
  - "Flutter"
  - "Dart"
  - "Shelf"
  - "Node.js"
  - "Kotlin"
  - "Java"
  - "REST APIs"
  - "Windows deployment"
metrics:
  - label: "Layers delivered"
    value: "4"
  - label: "Delivery window"
    value: "5 months"
  - label: "Platforms"
    value: "Desktop · Tablet · Android"
  - label: "Terminal codebase"
    value: "~250 Dart files"
featured: true
order: 2
coverAlt: "Point-of-sale terminal application running on desktop and tablet with native Android hardware integration"
---

Most mobile engineers stop at the app. This project was interesting because stopping at the app would have produced nothing usable.

A point-of-sale terminal is only software in the middle of the problem. On one side is hardware that behaves differently on every unit. On the other is a person in a shop who has to install it, at night, without help. Getting the Flutter interface right was the easy third.
