# CareMate – Patient & Doctor Healthcare Management System

CareMate is a comprehensive, enterprise-grade healthcare management ecosystem that connects patients, licensed physicians, and healthcare administrators. Built with modern TypeScript, Express, React, Tailwind CSS, PostgreSQL, Prisma ORM, and Redis, CareMate standardizes clinical appointment scheduling, electronic health records (EHR), digital prescriptions, laboratory test orders, transparent billing, and role-based audit logging.

---

## 🌟 Key Functional Modules

1. **Authentication & User Management**:
   - Multi-role RBAC (`PATIENT`, `DOCTOR`, `ADMIN`).
   - Secure JWT token rotation (Short-lived access tokens + 7-day revolving refresh tokens).
   - Session tracking, password hashing with bcrypt, and login audit trails.

2. **Patient & Doctor Management**:
   - Comprehensive patient health profiles: allergies, chronic conditions, emergency contacts, vital history.
   - Doctor directory: certifications, consultation fees, specializations, ratings, and weekly availability slots.

3. **Appointment & Scheduling Management**:
   - Real-time availability calculation, conflict-free booking, automated status transitions (`REQUESTED`, `CONFIRMED`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED`).
   - Database transactions to prevent double-booking.

4. **Medical Records, Prescriptions & Laboratory (EHR/EMR)**:
   - Structured SOAP clinical notes, ICD-10 diagnosis tagging, and recorded vital signs.
   - Electronic prescriptions with medication dosages, instructions, and duration.
   - Laboratory test catalog, test order tracking, and result verification workflow.

5. **Billing, Payments & Notifications**:
   - Automated itemized invoices for consultations and laboratory tests.
   - Integrated payment processing (Stripe / Cash / Insurance) with refund handling.
   - Multi-channel notification pipeline (In-app alerts and SMTP email support).

6. **Admin Dashboard & Analytics**:
   - Hospital-level overview: active patient trends, physician rosters, consultation volume, and revenue metrics.
   - HIPAA-standard audit logging capturing all clinical record views and financial adjustments.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Redux Toolkit, React Router v6, Axios, Lucide Icons, Vite.
- **Backend**: Node.js, Express.js, TypeScript, REST API, Zod Validation, Winston & Morgan Logging.
- **Database & ORM**: PostgreSQL 15, Prisma ORM 5.
- **Caching & Queue**: Redis 7.
- **Security & Testing**: Helmet, CORS, Express Rate Limit, Bcrypt, Jest, Supertest.
- **DevOps & Containerization**: Docker, Docker Compose, Nginx.

---

## 🚀 Six Primary Commands

CareMate is orchestrated via root npm workspace commands:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts both backend (`:5000`) and frontend (`:5173`) in development mode concurrently |
| `npm run build` | Compiles backend TypeScript to `/dist` and bundles the frontend production SPA |
| `npm run start` | Boots the production backend server |
| `npm run db:migrate` | Applies Prisma schema migrations to the PostgreSQL database |
| `npm run db:seed` | Populates database with realistic demo accounts (Admin, Doctors, Patients, Lab Tests, Rx) |
| `npm run test` | Executes the automated Jest + Supertest test suite |

---

## 📦 Getting Started

### 1. Prerequisites
- Node.js >= 18.x
- PostgreSQL instance (or Docker)
- Redis instance (optional, built-in memory fallback included)

### 2. Environment Setup
Create a `.env` file in the project root based on `.env.example`:
```bash
cp .env.example .env
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Database Setup & Seeding
```bash
npm run db:migrate
npm run db:seed
```

### 5. Launch Development Server
```bash
npm run dev
```

- **Frontend Application**: `http://localhost:5173`
- **Backend REST API**: `http://localhost:5000`
- **Swagger Documentation**: `http://localhost:5000/api/docs`

---

## 🔑 Demo Login Credentials

The development database comes pre-seeded with realistic healthcare accounts:

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@caremate.health` | `Admin123!` |
| **Doctor (Cardiology)** | `dr.jenkins@caremate.health` | `Password123!` |
| **Doctor (Neurology)** | `dr.vance@caremate.health` | `Password123!` |
| **Doctor (General Med)** | `dr.desai@caremate.health` | `Password123!` |
| **Patient** | `patient.john@example.com` | `Password123!` |
| **Patient** | `patient.sophia@example.com` | `Password123!` |

*(One-click quick login buttons are also available on the `/login` screen)*

---

## 🐳 Docker Deployment

To spin up the entire multi-container infrastructure (Postgres, Redis, Backend, Frontend):
```bash
docker-compose up --build
```

---

## 🔒 Security Architecture

- **Role-Based Authorization (RBAC)**: Enforced via `requireRole` middleware on sensitive medical endpoints. Patients cannot access doctor notes or other patients' records; doctors only access authorized medical records.
- **Audit Logging**: Medical record read/write accesses and invoice updates are automatically stored in the `AuditLog` table with IP and User Agent metadata.
- **Token Security**: Tokens are generated using cryptographic secrets with strict expiry and refresh rotation.
- **Input Validation**: All incoming requests are strictly validated using Zod schemas before hitting controllers.
