---
slug: her-notes
lang: en
name: "HerNotes"
summary: "A Flutter therapeutic journal for naming emotions and optionally sharing entries with a therapist. Patient and therapist flows meet in a layered Provider architecture whose HTTP client can switch between the Azure API and an in-memory demo store."
highlights:
  - "Patient and therapist roles share the same journal domain while exposing distinct writing, review, clinical-note, and exercise flows."
  - "Screens depend on Providers and services rather than networking; one HTTP client switches between the Azure API and an in-memory demo store."
  - "A bottom-navigation shell keeps each role's main views alive with IndexedStack, while focused writing and review tasks open as stacked routes."
repoUrl: "https://github.com/ArmandoAl/HerNotes"
language: "JavaScript"
stack:
  - "Flutter"
  - "Dart"
  - "Provider"
  - "Firebase"
  - "Azure REST API"
  - "SharedPreferences"
stars: 0
order: 5
gallery:
  - src: "./images/her-notes-diary.png"
    alt: "Patient journal in the HerNotes Flutter application"
    kind: "mobile"
    caption: "The patient can write privately and decide what to share with a therapist."
  - src: "./images/her-notes-therapist.png"
    alt: "Therapist patient list in HerNotes"
    kind: "mobile"
    caption: "A distinct therapist flow supports review, exercises and clinical notes."
---
