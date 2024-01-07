<p align="center">
    <img src="templates/src/images/static/logo.png" alt=""
        width="60" align="center"
    /> 
    <h1 align="center">Web service «TalentSpot»</h1>
</p>

### © ООО «TALENTSPOT»

TalentSpot — is an information service in the form of an online portal that connects qualified job seekers and employers to meet workforce needs, with the introduction of algorithms to automate the hiring process

> [!NOTE]\
> The project is still in the design phase.
> The service is being created with the support of a grant from <a href="https://fasie.ru/">the Foundation for Assistance to Innovations</a> under the
> Student Startup Program of the federal project <a href="https://univertechpred.ru/">«University Technological Entrepreneurship Platform»</a>
## Technology Stack


<div align="left">  
<a href="https://www.python.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" height="50" /></a>
<a href="https://www.djangoproject.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/django-original.svg" alt="Django" height="50" /></a>
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>
<a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" /></a>
<a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50"></a><a href="https://webpack.js.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/webpack-original.svg" alt="Webpack" height="50" /></a>
<a href="https://www.postgresql.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL" height="50" /></a>
<a href="https://sass-lang.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/sass-original.svg" alt="Sass" height="50" /></a>  
</div>


## Versions

apache + uwsgi

- Python version 3.12.0
- Django version 4.2.8
- Django rest framework version 3.14.0
- NodeJS version 18.12.1
- ReactJS version ^18.2.0
- Webpack version ^5.89.0

## Scheme of work

```mermaid
graph LR;
    client-->HTTP
    HTTP-->Router
    Router-->View
    Template-->View
    View-->Middleware
    View-->Serializers
    Serializers-->View
    Serializers-->Model
    Model-->Serializers
    Model-->Database
    Database-->Model
    Middleware-->|HTTP Response| client 
```

### © ООО «TALENTSPOT»

- Russian Federation
- Taxpayer Identification Number (INN) – 2623034058
- Tax Registration Reason Code (KPP) – 262301001
- Primary State Registration Number (PSRN) – 1232600016065
