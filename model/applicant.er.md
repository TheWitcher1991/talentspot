```mermaid
---
title: СОИСКАТЕЛЬ И РЕЗЮМЕ
---
erDiagram
    APPLICANT ||--|{ RESUME : human
    APPLICANT ||--|{ FAVORITE : company
    APPLICANT ||--|{ HIDDEN : company
    APPLICANT ||--|{ DEVICE : info
    APPLICANT ||--|{ ACTIVITIES : info
    APPLICANT ||--|{ NOTICE : info
    RESUME ||--|{ EDUCATION : info
    RESUME ||--|{ EXPERIENCE : info
    RESUME ||--|{ ACHIEVEMENT : info
    RESUME ||--|{ REVIEW : info
    RESUME ||--|{ RESPOND : info
    RESUME ||--|{ SKILL : info
    RESPOND ||--|{ CHAT : respond
    CHAT ||--|{ MESSAGE_USER : respond
    RESUME ||--|{ MESSAGE_CHAT : message
    GENERAL ||--|{ RESUME : info
    CATEGORY ||--|{ RESUME: category
```
