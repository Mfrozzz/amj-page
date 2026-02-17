# 🌍 AMJ Page

Landing page oficial da **AMJ – Ação Missionária Juvenil**.

Projeto desenvolvido em **React + TypeScript + Vite + Tailwind CSS**, com deploy via GitHub Pages.

---

## ✨ Sobre o Projeto

A AMJ Page é uma single-page application criada para apresentar:

* ⏳ Countdown para o início do evento
* 📖 Seção “O que é?”
* 🏙 Informações sobre a cidade
* 🎒 Checklist para missionários
* ✝ Espiritualidade e carisma salesiano
* 🌍 AJS (Articulação da Juventude Salesiana)

O objetivo é oferecer uma experiência moderna, responsiva e visualmente impactante para os jovens missionários.

---

## 🛠 Tecnologias Utilizadas

* React
* TypeScript
* Vite
* Tailwind CSS
* Lucide React (ícones)

---

## 🚀 Como Rodar o Projeto Localmente

```bash
# Clonar o repositório
git clone https://github.com/mfrozzz/amj-page.git

# Entrar na pasta
cd amj-page

# Instalar dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run dev
```

A aplicação ficará disponível em:

```
http://localhost:5173
```

---

## 📦 Build de Produção

```bash
npm run build
```

Para visualizar a build:

```bash
npm run preview
```

---

## 🌐 Deploy no GitHub Pages

O projeto utiliza o pacote `gh-pages` para deploy automático.

```bash
npm run deploy
```

A aplicação será publicada na branch:

```
gh-pages
```

E ficará disponível em:

```
https://<SEU_USUARIO>.github.io/amj-page/
```

---

## 📁 Estrutura de Pastas

```
amj-page/
├── public/                     # assets públicos (ícones, imagens, etc.)
│   ├── wallpaperAmjPage.png
│   ├── amjLogo.png
│   └── ...                     # imagens das seções
├── src/
│   ├── assets/                 # assets importados pelo app
│   ├── components/             # componentes React reutilizáveis
│   │   ├── Countdown.tsx       # contagem regressiva do evento
│   │   ├── Section.tsx         # componente de seção (imagem + texto)
│   │   ├── Navbar.tsx          # barra de navegação fixa
│   │   └── Footer.tsx          # rodapé com links
│   ├── App.tsx                 # componente raiz da aplicação
│   ├── main.tsx                # bootstrap do React + Vite
│   ├── index.css               # estilos globais
│   └── App.css                 # estilos específicos do App
├── vite.config.ts              # configuração do Vite
└── package.json                # dependências e scripts
```

Breve descrição:
- `public/`: recursos estáticos servidos diretamente (imagens, logo, etc.).
- `src/components/`: componentes pequenos e reusáveis que compõem a UI.
- `src/` (raiz): ponto de entrada da app e arquivos de estilo.
- `vite.config.ts` e `package.json`: configuração do build e scripts.

---

## 🎨 Funcionalidades

* Background fixo com overlay via `linear-gradient`
* Navbar fixa com scroll suave
* Navegação por âncoras internas
* Layout responsivo
* Footer com link para repositório
* Compatível com GitHub Pages

---

## 👨🏻‍💻 Autor

Desenvolvido por **Marcos Vinicius Boava**
Desenvolvedor Full Stack

---

## 📜 Licença

Projeto criado para fins pastorais e missionários.
Uso livre para evangelização e iniciativas juvenis.

---

> “Ide pelo mundo inteiro e anunciai o Evangelho.” – Mc 16,15
