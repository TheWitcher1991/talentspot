```mermaid
---
title: РАБОТОДАТЕЛЬ
---
erDiagram
    EMPLOYER ||--|{ DOCUMENT: info
    EMPLOYER ||--|{ DEPARTMENT : info
    ROLE ||--|{ MANAGER : info
    MANAGER ||--|{ NOTICE : info
    EMPLOYER ||--|{ REVIEW : info
    DEPARTMENT ||--|{ MANAGER : info
    MANAGER ||--|{ PAYER : info
    MANAGER ||--|{ VACANCY : info
    PAYER ||--|{ INVOICE : info
    MANAGER ||--|{ TALENT_POOL : info
    MANAGER ||--|{ MESSAGE_CHAT : info
    TALENT_POOL ||--|{ RESUME : info
    MANAGER ||--|{ ACTIVITIES : info
    MANAGER ||--|{ DEVICE : info
    VACANCY ||--|{ RESPOND : info
```
