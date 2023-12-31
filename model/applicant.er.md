```mermaid
---
title: СОИСКАТЕЛЬ
---
erDiagram
    APPLICANT ||--|{ RESUME : human
    APPLICANT ||--|{ ONLINE : human
    APPLICANT ||--|{ NOTICE : human
    RESUME ||--|{ EDUCATION : info
    RESUME ||--|{ EXPERIENCE : info
    RESUME ||--|{ ACHIEVEMENT : info
    RESUME ||--|{ REVIEW : info
    RESUME ||--|{ RESPOND : info
    RESPOND ||--|{ CHAT : respond
    CHAT ||--|{ MESSAGE_USER : respond
    RESUME ||--|{ MESSAGE_USER : message
    
```
