# Sharp GBS

## Frontend development

Run frontend commands from the `frontend` directory:

```sh
npm ci
npm run dev
```

The Vite development server prints the local URL when it starts. To check the
production build or run lint:

```sh
npm run build
npm run lint
```

## Contact form API

The contact form sends requests to `http://localhost:5000` by default. Set
`VITE_API_URL` in the frontend environment to use a different backend URL.
Start the API from the `backend` directory with `node server.js`; it requires
`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `EMAIL_USER`, and `EMAIL_PASS` in
its environment.
