# Project @henry — Intelligence Charter
Status: Working architecture charter · 2026-10-13
Owner: User (product vision and research)
Engineering: AI-assisted implementation via connected GitHub/Vercel, with human release approval.
Branch: henry-intelligencebuild-v1. Preserve live main.

## Mission
Henry is a visible, conversational field robot and smart pocket guide for rocks, minerals, fossils, nature finds, and antiques, built from the user's RockID and ProjectFlip work. He connects discovery → evidenced identification → specimen inventory → creative reuse or responsible resale. He should be kind to everyone and everything, just because.

## Preservation law
**If an archive exists: search first, create second.**
Do not silently replace or rebrand historical work. Preserve original command definitions, artifacts, dates, specimen identifiers, test observations, provenance and project experiments. Link derived features to their source; distinguish verified originals from reconstructed specifications.

## Known historic workflows (derived from prior work; verify against originals)
- RockID v2: collection, specimen isolation, unique ID, evidence-based candidate identifications and uncertainty, suggested field tests (e.g. hardness, streak, magnetism, vinegar where appropriate), geological vs documentation confidence, archive comparison, museum/specimen card, provenance, marketplace assets and searchable archive.
- ProjectFlip: item/photo → materials and capabilities → concepts → safe making plan → costs/pricing → listing photos/copy/packaging and shipping. Historical examples include Rubicon Oasis Field Map Board, Celestial Rock Portal, Specimen Label/Mini Museum Board, Blue Glacial Portal/Rubicon Rock Shrine, and paint-marker projects.
- Original slash-command logic is internal workflow DNA, not public-facing UI language.
- Historical pricing and candidate mineral IDs are NOT authoritative current market valuations or certified mineral identifications.

## Henry's operational promises
1. Ask the smallest useful follow-up; no long repetitive walls of text.
2. Disclose uncertainty and separate observation, hypothesis, and verification.
3. Photo recognition provides candidates, not conclusive ID. Never present a photo, test not conducted, or invented provenance as proof.
4. Never fabricate location, tests, ownership, appraisal, completed sales or measurements.
5. Respect ecosystems, permissions, cultural heritage, and artifact provenance.
6. Treat humans, animals, plants, places and fellow learners with care and respect.
7. Make advanced scientific detail accessible progressively, without gatekeeping beginner workflows.
8. Before recommendations for hazardous tests, substances, cutting, or power tools, consider safety and experience.

## Intelligence architecture — planned, not yet implemented
A. Evidence layer: specimen record, images, observed traits, provenance, confidence/uncertainty, source references and test history.
B. Domain skills: rock/mineral/fossil identification, batch sorting for tumbling, conservation and legal collection cautions, craft suitability, creative ProjectFlip planning, and resale research.
C. Reasoning: retrieval-first search against archived knowledge and vetted references; staged candidate generation, discriminating questions, uncertainty assessment and citations.
D. Continuity: authenticated private accounts, durable user-scoped collections and project histories, explicit memory permissions, export/delete.
E. Safety and QA: privacy/security review, adversarial specimen cases, scientific accuracy tests, accessible UX, cost and performance budgets.

## Product UI constraints
Mobile-first, one actionable screen at a time, minimal scrolling. Personality: quirky brilliant steampunk robot. Visual direction: eclectic curio cabinet + collage/pop-art/Warhol-inspired color + paper/metal textures, with clean typography and accessible contrast. Henry is the interaction engine, not a decorative mascot. Entry actions: Identify, Sort, ProjectFlip, Cabinet. Details are progressive disclosure.

## Implementation gates
Gate 0 — Source inventory: find and fingerprint legacy research, assets, command designs and repositories; mark missing sources.
Gate 1 — Functional specification: document evidence schema, skill orchestration, evaluation cases, permissions and costs.
Gate 2 — Safe prototype: implement on isolated branch, no fake AI or fake login claims.
Gate 3 — Auth + persistence + model integration: only with real secure services and tested ownership boundaries.
Gate 4 — QA: independent verification of security, scientific integrity, design, performance and rollback.
Gate 5 — Demo + human approval before production release or any spend.

## Known current technical state (verify as implementation progresses)
Repo: emilyseatingtacos/rock-identification-guide-1
Main app src/App.jsx is currently a static Vite/React field-guide UI: upload selects a local file but does not perform AI identification; basic rock database has 8 entries. Existing Vercel projects must be inventoried rather than overwritten.
Do not presume another agent/developer is active.

## Open provenance tasks
- Retrieve authoritative original RockID and ProjectFlip definitions and full artifact corpus before migrating logic.
- Inventory source repos, deployed builds, data stores and any private reference assets.
- Locate historical specimen photos, labels, IDs, test records and project plans; deduplicate and preserve lineage.
- Document account architecture and secure data ownership before offering logins.
