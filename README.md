# Solita Dev Academy January 2024 pre-assignment

A full stack application showing station data for Helsinki Capital area city bikes.

This is a pre-assignment for Solita Dev Academy January 2024.

# How to run

1. Install Docker Desktop on your computer (https://docs.docker.com/desktop/)
2. Clone this repository
3. On command line on cloned repository root run:

```
docker compose up --build --renew-anon-volumes -d
```

Please note that it might take a while for that to run

4. Access app:

   - Frontend: http://localhost:5713
   - Backend: http://localhost:3000/api (this endpoint opens swagger ui api documentation)

5. When finished you can bring containers down with this command line command on repository root:

```
docker-compose down
```

# Screenshots

# Features

## App

- Dockerization

## Frontend

- Mobile friendly UI

### Station List

- List all stations
  - Search stations
  - Sort alphabetically by station name
  - Paginate results
- Link to single station views

### Station View

- Total number of journeys starting from the station
- Total number of journeys ending at the station
- Average distance of journeys starting from the station
- Avarage duration of journeys starting from the station

## Backend

- Get all stations
  - paginate
  - sort
  - search
- Get station by ID
- Get journey stats by ID
- Swagger API documentation

## Database

- Provided by Solita

# Tech/Frameworks used

### App

- Docker

### Frontend

- React
- React router
- Tailwind CSS
- Javascript

### Backend

- Express
- Node.js
- cors
- node-postgres
- swagger-jsdoc
- swagger-ui-express
