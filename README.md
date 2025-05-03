# Class Guard (Permissions Redefined)

A modern classroom access control system built to protect educational environments across Africa. Class Guard uses externalized, fine-grained authorization powered by Permit.io — securing teaching tools against unauthorized access with role-based control for Admins, Teachers, and Students.

---

##  Overview

**Class Guard** is a digital teaching aid designed for African educators and students, offering secure content sharing, classroom access, and management through externalized authorization. 

Traditional access models embed permission logic directly into code. This makes auditing, scaling, or evolving policies error-prone. **Class Guard** decouples authorization using [Permit.io](https://www.permit.io), ensuring:
- Simplified permission updates
- Declarative access policies
- Centralized auditability

---

## Features 

| Feature                        | Description                                                      |
|-------------------------------|------------------------------------------------------------------|
| Externalized Authorization | Powered by Permit.io for dynamic role & policy control           |
| Teacher Dashboard         | Upload materials, manage classes, monitor student activity        |
| Student Access            | Join classes, download materials, interact only with permitted data |
| Admin Control               | Role assignment, access control, full visibility                 |
| Audit Trail                 | All access attempts are logged and queryable                     |

---

## Technical Stack

| Layer        | Technology      |
|--------------|-----------------|
| Frontend     | React.js (Next.js optional) |
| Backend      | FastAPI (Python) |
| AuthN/AuthZ  | Permit.io       |
| Database     | MongoDB         |
| Deployment   | Render / Vercel / Fly.io |

---

## Screenshots

> _Placeholder for UI images showing each user dashboard (Admin, Teacher, Student)_

- `./docs/images/admin-dashboard.png`
- `./docs/images/teacher-interface.png`
- `./docs/images/student-view.png`

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/contractor-x/class-guard.git
cd class-guard
````

### 2. Install Dependencies

```bash
# Backend
cd backend
pip install -r requirements.txt

# Frontend
cd ../frontend
npm install
```

### 3. Set Up Permit.io

* Create a free account at [Permit.io](https://app.permit.io)
* Create a project and roles: `admin`, `teacher`, `student`
* Add policies to control each role's resource access
* Connect your Permit Project ID and API key to the backend via environment variables (never commit these)

### 4. Run the App

```bash
# Start backend
uvicorn main:app --reload

# Start frontend
npm run dev
```

---

##  User Credentials for Testing

| Role  | Username | Password         |
| ----- | -------- | ---------------- |
| Admin | admin    | 2025DEVChallenge |
| User  | newuser  | 2025DEVChallenge |

---

##  How to Use the Platform

| Role    | What You Can Do                                                             |
| ------- | --------------------------------------------------------------------------- |
| Admin   | Add/remove users, assign roles, monitor platform activity                   |
| Teacher | Create classes, upload files, restrict or grant content access to students  |
| Student | Join available classes, access permitted content, interact with assignments |

> See `docs/user-guide.md` for full walkthrough with screenshots.

---

## Why should i as a Dev use Permit.io?

**Traditional Authorization:**

* Hardcoded into the backend
* Complex to audit or change
* Role explosion = messy

**Permit.io (Externalized Authorization):**

* Roles & policies defined *outside* the app logic
* Real-time permission control without redeployment
* Easy audit trails and permission debugging
* Secure by design, scalable by default

> Class Guard proves the power of externalized authorization in real-world, access-critical tools.

---

##  Architecture Diagram

> *Insert diagram here: class\_guard\_architecture.png*

```
+-----------+      +-----------------+       +-----------------+
| Frontend  | ---> | FastAPI Backend | <---> | Permit.io AuthZ |
+-----------+      +-----------------+       +-----------------+
                          |
                     +---------+
                     | MongoDB |
                     +---------+
```

---

## Folder Layout 

```bash
class-guard/
├── backend/
│   ├── main.py
│   └── permit/
├── frontend/
│   ├── components/
│   └── pages/
├── docs/
│   ├── images/
│   └── user-guide.md
└── README.md
```

---

## Contributing

<!--See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for setup, style guides, and contribution process.-->

---

## License

This project is licensed under the MIT License. 

---

##  DEV.to Submission Link

> *Coming soon – add the link to your final post once published*

---

## Credits

* Built by [Collins](https://github.com/contractor-x)
* Powered by [Permit.io](https://permit.io)

