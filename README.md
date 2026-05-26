# GIFunny

A GIF search app built with an Angular frontend and a Python Flask backend, powered by the [GIPHY API](https://developers.giphy.com/).

## Structure

```
gifunny/
├── backend/     # Flask API — proxies requests to GIPHY
├── frontend/    # Angular app — search, browse, and favourite GIFs
└── docker-compose.yml
```

## Prerequisites

- [Docker](https://www.docker.com/) and Docker Compose
- A [GIPHY API key](https://developers.giphy.com/dashboard/)

## Getting started

1. Copy the example env file and add your GIPHY token:

   ```sh
   cp .env.example .env
   # then edit .env and set GIPHY_TOKEN=your_token
   ```

2. Build and start both services:

   ```sh
   docker compose up --build
   ```

3. Open `http://localhost` in your browser.

## Services

| Service  | URL                    | Description              |
|----------|------------------------|--------------------------|
| Frontend | http://localhost       | Angular app (via nginx)  |
| Backend  | http://localhost:5000  | Flask REST API           |

## Running locally without Docker

See the individual READMEs:
- [backend/README.md](backend/README.md)
- [frontend/README.md](frontend/README.md)
