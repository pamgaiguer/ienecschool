# 🏫 Ienec School – Painel Administrativo

Este projeto é um painel administrativo construído em **Angular**, que consome uma API REST desenvolvida em **Python/Django**.  
O sistema permite gerenciar conteúdos como banners, segmentos, carrosséis, diferenciais e metodologias educacionais.

---

## 🔧 Tecnologias Utilizadas

### Frontend

- [Angular 19](https://angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Angular Forms / Routing / Guards](https://angular.io/guide/forms-overview)
- [Vite (opcional para testes)](https://vitejs.dev/)

### Backend

- [Python 3](https://www.python.org/)
- [Django 4.x](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [JWT Authentication](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)

---

## 📁 Estrutura do Projeto

src/
├── app/
│ ├── admin/
│ │ ├── auth/ → Login, AuthService, Guard
│ │ ├── dashboard/ → Painel inicial
│ │ ├── home-banner/
│ │ ├── segmentos-ensino/
│ │ ├── carrossel/
│ │ ├── diferenciais/
│ │ ├── metodologias/
│ │ └── guards/ → AuthGuard
│ ├── shared/ → Componentes comuns
├── assets/
│ └── imagens, ícones, etc.

---

## 🚀 Como Rodar o Projeto

### 🖥️ Frontend (Angular)

```bash
# Instalar dependências
npm install
# Rodar o projeto em desenvolvimento
npm start
```

O app estará disponível em: http://localhost:4200

🔗 Backend (Django)

# Ativar virtualenv, caso ainda não esteja

source venv/bin/activate

# Rodar servidor Django

python manage.py runserver

A API estará disponível em: http://localhost:8000

🔐 Autenticação
O login é baseado em JWT Token, com envio dos dados para o endpoint:

POST /api/token/
{
"login": "admin",
"senha": "suasenha"
}

✍️ Autora
Desenvolvido por Pam Gaiguer
[https://www.linkedin.com/in/pamellagaiguer/](LinkedIn) | [https://pamgaiguer.vercel.app/](Site pessoal)

📄 Licença
Este projeto está sob a licença MIT.
