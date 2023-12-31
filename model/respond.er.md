```mermaid
---
title: ОТКЛИК
---
erDiagram
    ROLE ||--|{ MANAGER : info
    MANAGER ||--|{ VACANCY : info
    SELECTION_STAGE ||--|{ VACANCY : step
    CATEGORY ||--|{ VACANCY : category
    VACANCY ||--|{ RESPOND : info
    RESUME ||--|{ RESPOND : info
    RESPOND ||--|{ CHAT : info
    CHAT ||--|{ MESSAGE_APPLICANT : info
    MANAGER ||--|{ MESSAGE_MANAGER : info
    CHAT ||--|{ MESSAGE_MANAGER : info
    RESUME ||--|{ MESSAGE_APPLICANT : info
    
```
