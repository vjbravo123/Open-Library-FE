# 📚 Open Library Frontend

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen)](https://open-library-fe.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/vjbravo123/Open-Library-FE/ci.yml?branch=main)](https://github.com/vjbravo123/Open-Library-FE/actions)

A sleek React + Vite frontend to explore, search, and download books from an Open Library‑style API. It features dynamic carousels, live search, responsive design, and PDF retrieval.

---

## 📂 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running in Development](#running-in-development)
  - [Building for Production](#building-for-production)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Usage & Screenshots](#usage--screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## 🧐 About

This is the frontend component of an "Open Library" style web app. Users can:

- Browse collections of books (e.g. via carousels/sliders)
- Search for books by title, author, or keywords
- View details of a book (description, cover, etc.)
- Download book PDFs (if available)
- Enjoy a responsive UI that works well across devices

Live version: [open-library-fe.vercel.app](https://open-library-fe.vercel.app/)
Repo: [github.com/vjbravo123/Open-Library-FE](https://github.com/vjbravo123/Open-Library-FE)

---

## ✨ Features

- Responsive design (mobile, tablet, desktop)
- Book carousels (e.g. trending, new releases)
- Live search with autocomplete / dynamic results
- Book detail pages
- PDF download support
- Simple, clean UI
- Fast build using Vite
- ESLint + proper code organization

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Frontend framework | React |
| Bundler / dev tooling | Vite |
| Styling | CSS |
| HTTP client | Axios |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm or yarn
- Access to the backend API this app expects

### Installation

1. Clone the repo

   ```bash
   git clone https://github.com/vjbravo123/Open-Library-FE.git
   cd Open-Library-FE
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

### Running in Development

```bash
npm run dev
# or
yarn dev
```

This should start a dev server (Vite) and open the app in your browser (commonly at http://localhost:5173).

### Building for Production

```bash
npm run build
# or
yarn build
```

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

---

## 🛠 Environment Variables

You may need to configure environment variables (in a `.env` file) for API endpoints, keys, etc. Example:

```env
VITE_API_BASE_URL=https://your-backend-url.com/api
```

---

## 🗂 Project Structure

```
/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── assets/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
├── vite.config.js
├── README.md
└── LICENSE
```

---

## 📸 Usage & Screenshots

*(Insert screenshots or GIFs of your app here — e.g. home page, carousel, book detail, mobile view)*

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes & commit
4. Push to your branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the LICENSE file for details.

---

## 🙏 Acknowledgements

- Open Library API (or whichever backend used)
- Any UI inspiration or component libraries used
- Contributors & supporters
