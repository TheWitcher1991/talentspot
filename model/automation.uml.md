```mermaid
---
title: БОТ И СОИСКАТЕЛЬ
---
sequenceDiagram
    actor MANAGER
    box black
    actor BOT
    actor APPLICANT
    end
    activate BOT
    activate MANAGER
    MANAGER->>BOT: ЗАДАТЬ ИНТЕРВЬЮ
    BOT-->>MANAGER: ПРИНЯТЬ
    deactivate MANAGER
    activate APPLICANT
    BOT->>APPLICANT: ЗАПРОС НА ИНТЕРВЬЮ
    APPLICANT->>BOT: ПРИНЯТЬ ЗАПРОС
    activate SERVER
    BOT->>SERVER: ПОЛУЧИТЬ ДАННЫЕ ИНТЕРВЬЮ
    SERVER->>BOT: ОТПРАВИТЬ ДАННЫЕ ИНТЕРВЬЮ
    deactivate SERVER
    BOT->>APPLICANT: ЗАДАТЬ ВОПРОСЫ
    APPLICANT->>BOT: ОТПРАВИТЬ ОТВЕТЫ
    BOT->>APPLICANT: ОТПРАВИТЬ РЕЗУЛЬТАТЫ
    deactivate APPLICANT
    activate SERVER
    BOT->>SERVER: ОТПРАВИТЬ РЕЗУЛЬТАТЫ
    deactivate SERVER
    Note right of BOT: СИСТЕМА САМА ОЦЕНИТ СОИСКАТЕЛЯ
    activate MANAGER
    BOT->>MANAGER: ОТПРАВИТЬ РЕЗУЛЬТАТ
    MANAGER->>BOT: ДАТЬ ОЦЕНКУ
    deactivate MANAGER
    deactivate BOT
```
