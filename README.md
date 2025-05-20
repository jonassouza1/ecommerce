# 🛍️ E-commerce — High-Performance Frontend with Neon Database

A modern e-commerce application built with **Next.js 15** and **React 19**, focused on delivering a beautiful, fast, and responsive user experience. Product data is dynamically loaded from a **PostgreSQL database hosted on Neon**.

> Ideal for showcasing frontend UI/UX capabilities with real-time data from a managed backend.

---

## 🚀 Tech Stack

### Frontend
- **Next.js 15 (App Router)**
- **React 19**
- **Swiper.js** for modern sliders and carousels

### Backend Integration
- **Neon PostgreSQL** for remote product data
- **node-pg-migrate** for database versioning

### Tooling
- **Prettier** for consistent code formatting
- **Jest** for unit testing
- **Docker Compose** for local infrastructure
- **TypeScript** for static typing

---


---

## 🧪 Scripts

Scripts available via `npm run`:

| Script               | Description                                  |
|----------------------|----------------------------------------------|
| `dev`                | Starts Docker services and Next.js dev server |
| `build`              | Builds the production app                    |
| `start`              | Starts the production server                 |
| `test`               | Runs Jest tests                              |
| `test:watch`         | Runs tests in watch mode                     |
| `lint:check`         | Checks formatting with Prettier              |
| `lint:fix`           | Auto-formats code                            |
| `migration:create`   | Creates a new DB migration                   |
| `migration:up`       | Applies pending migrations                   |
| `migration:down`     | Rolls back the last migration                |
| `services:up`        | Starts DB services with Docker               |
| `services:down`      | Stops and removes Docker containers          |
| `services:stop`      | Stops containers without removing them       |

---

## 🧭 Usage

1. **Start services**:
   ```bash
   npm run services:up
   npm run migration:up
   npm run dev
