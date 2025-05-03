# Class-Guard

## Deployment Instructions

### Front-End (React App)

1. Navigate to the `Front-End` directory:
   ```
   cd Front-End
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the React app:
   ```
   npm run build
   ```

4. Deploy the contents of the `build` folder to Netlify.

### Backend (Node.js Server)

The backend server located in the `Back-End` folder cannot be deployed on Netlify directly. You need to deploy it separately on a Node.js hosting platform such as Heroku, Vercel, or any other cloud provider.

### Notes

- The front-end React app uses React Router for client-side routing. The `netlify.toml` file is configured to redirect all requests to `index.html` to support this.
- Make sure the backend server URL is correctly configured in the front-end if applicable.
