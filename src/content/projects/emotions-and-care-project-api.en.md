---
slug: emotions-and-care-project-api
lang: en
name: "EmotionsAndCareProjectApi"
summary: "A REST API for an emotional-care app that connects patients and specialists, tracks journals and questionnaires, and turns adherence into a growing garden with collectible rewards. ASP.NET Core separates controllers, business services, repositories, and domain models; stage requirements live in data and dispatch through named validation strategies."
highlights:
  - "Garden progression is validated on the server from data-driven stage requirements; named strategies add new criteria without growing a central switch statement."
  - "First-time actions return their achievement and sticker in the same response, and journal writes are rolled back if their reward cannot be persisted."
  - "Domain, data, business, and HTTP layers keep persistence separate from progression rules, while typed Firebase payloads route the client to the relevant module."
repoUrl: "https://github.com/ArmandoAl/EmotionsAndCareProjectApi"
language: "C#"
stack:
  - "C#"
  - "ASP.NET Core 6"
  - "Entity Framework Core 6"
  - "SQL Server"
  - "Firebase Admin SDK"
  - "REST"
stars: 0
order: 2
gallery:
  - src: "./images/emotions-care-overview.png"
    alt: "Overview of the emotional-care product powered by the API"
    kind: "desktop"
    caption: "The API coordinates the garden, community and reward flows shown in the client product."
  - src: "./images/emotions-care-collection.png"
    alt: "Collectible plants and rewards delivered by the progression API"
    kind: "desktop"
    caption: "Server-validated milestones unlock the collection shown in the Flutter client."
---
