# Class-Guard: Secure Role-Based Dashboard Access with Permit.io

> A secure, role-based access control (RBAC) React + Node.js app using [Permit.io](https://www.permit.io/), built for the Permit.io RBAC Challenge.

---

## About Class-Guard

**Class-Guard** is a role-based dashboard application with the following features:

- **Integration with Permit.io for access control (RBAC)**
- **A simple Node.js/Express backend to handle permission checks**
- **A dynamic React frontend with three dashboards:**
  - `AdminDashboard.jsx`
  - `TeacherDashboard.jsx`
  - `StudentDashboard.jsx`
- **Deployed to Netlify (Frontend) and localhost/Render (Backend)**
- **Compatible with JWT-authenticated workflows**
- **Ready for production, demo-ready**

---

## Folder Structure

```
Class-Guard/
├── backend/
│   └── server.js                 # Node.js server with Permit.io integration
├── frontend/
│   ├── public/
│   │   └── _redirects            # Netlify redirects for SPA
│   ├── src/
│   │   ├── pages/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── StudentDashboard.jsx
│   │   │   └── TeacherDashboard.jsx
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── App.jsx
│   │   └── index.js
├── .gitignore
└── README.md
```

---

## Installation & Setup

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/Class-Guard.git
cd Class-Guard
```

### 2. Backend Setup (Node.js + Permit.io)

#### Install Dependencies

```sh
cd backend
npm install
```

#### Start the Server

```sh
node server.js
```

> **Server runs at:** `http://localhost:5000`

#### Update Permit.io Credentials

You must update your Permit.io API key and PDP URL inside `server.js`.

```js
const permit = new Permit({
  pdp: 'https://cloudpdp.api.permit.io',
  token: 'your-permit-api-key',
});
```

### 3. Frontend Setup (React)

#### Install Dependencies

```sh
cd frontend
npm install
```

#### Start the Application

```sh
npm start
```

> **Frontend runs at:** `http://localhost:3000`

---

## Deployment

### Frontend on Netlify

1. **Push Your Code to GitHub:**

   ```sh
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect Your GitHub Repo to Netlify:**
   - Log in to your Netlify account.
   - Click on "New site from Git" and connect your GitHub repository.

3. **Set the Build Settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `build/`

4. **Add `_redirects` Inside `public/` Folder:**

   ```plaintext
   /*    /index.html   200
   ```

5. **Netlify will automatically handle routing for your React SPA.**

---

## Role-Based Access Flow

1. **User Logs In or Accesses a Dashboard:**
   - The user attempts to log in or access a specific dashboard.

2. **Frontend Makes a POST Request to `/api/check-permission` on the Backend:**
   - The frontend sends a POST request to the backend to check if the user has the necessary permissions.

3. **Backend Checks Permission Using Permit.io SDK:**
   - The backend uses the Permit.io SDK to verify the user's permissions.

4. **If Allowed, the Frontend Renders the Dashboard:**
   - If the user is permitted, the frontend renders the requested dashboard.

5. **If Not, the User is Shown an "Access Denied" Message:**
   - If the user is not permitted, an "Access Denied" message is displayed.

---

## Sample Code: `/api/check-permission`

### `server.js` (Backend)

```js
app.post('/api/check-permission', async (req, res) => {
  const resource = req.body.resource;
  const action = req.body.action;
  const user = req.body.user;

  const permitted = await permit.check(user, action, resource);

  if (permitted) {
    res.json({ permitted: true });
  } else {
    res.json({ permitted: false });
  }
});
```

### `AdminDashboard.jsx` (Frontend Sample)

```jsx
import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/check-permission', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resource: 'admin-dashboard', action: 'view', user: 'user2345' }),
    })
      .then(res => res.json())
      .then(data => {
        if (!data.permitted) {
          setAccessDenied(true);
        }
      });
  }, []);

  if (accessDenied) {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin!</p>
    </div>
  );
}

export default AdminDashboard;
```

> Similar code is used in `StudentDashboard.jsx` and `TeacherDashboard.jsx`.

---

## Tech Stack

- **Frontend:** React, JSX, Netlify
- **Backend:** Node.js, Express
- **RBAC:** [Permit.io](https://www.permit.io/)
- **Deployment:** GitHub + Netlify
- **Development OS:** Kali Linux

---

## How to Contribute

1. **Fork the Repository:**

   ```sh
   git fork https://github.com/your-username/Class-Guard.git
   ```

2. **Clone Your Fork:**

   ```sh
   git clone https://github.com/your-username/Class-Guard.git
   cd Class-Guard
   ```

3. **Create a New Branch:**

   ```sh
   git checkout -b feat/featureName
   ```

4. **Make Your Changes:**

   Commit your changes and push to your branch:

   ```sh
   git add .
   git commit -m "feat: add new feature"
   git push origin feat/featureName
   ```

5. **Submit a Pull Request:**
   - Go to the original repository and submit a pull request.

---

## Challenge Team Credentials

-Admin
**Username:** `admin`
**User ID:** `2025DEVChallenge`

-Teacher
**Username:** `teacher`
**User ID:** `2025DEVChallenge`

-Student
**Username:** `Student`
**User ID:** `2025DEVChallenge`

These credentials are preconfigured in the backend for the RBAC challenge demo.

---

## License

MIT License © Collins Joel

---

## Acknowledgements

- Big thanks to [Permit.io](https://www.permit.io/) for providing the RBAC SDK and challenge.
- Built with ❤️ on Kali Linux using Node.js, React, and Netlify.

---

## Contact

- **GitHub:** [@Collins](https://github.com/Contractor-x)
- **Email:** `dada4ash@gmail.com`

