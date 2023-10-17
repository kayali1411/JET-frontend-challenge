## Important Note

- I updated `socket.io` version on the backend because I had a few issues with the backend service with the old version of `socket.io`
- This is a clone for the backend service with the changes [repo-link](https://github.com/kayali1411/JET-backend-service).
- Fix connectivity issue with older `socket.io` version and changes for updated version compatibility
- Emit `activateYourTurn` event to activate opponent turn when `sendNumber` is triggered by the other player.
- Not emitting `randomNumber` by CPU player when the last result is 1



## Installation and Commands

### **Clone The Project**
```
> git clone git@github.com:kayali1411/JET-frontend-challenge.git
> cd JET-frontend-challenge
```

### **Docker Users**

- Rename `.env.local` to `.env`
- Run `docker-compose up --build`

### **Non Docker Users**

- Prerequisites
	- nodejs (latest LTS version , >= 16.15.0)
- Rename `.env.local` to `.env`
- In the root folder of the project run `npm install`
- Start the app using `npm start`

### **Unit Testing**

- Run `npm run test`
- To get the coverage report run `npm run test:coverage`



## Technical Description

This project uses [vite](https://vitejs.dev/) as build tool and development server.

### **Major Dependencies**

-	TypeScript
-	React
-	`react-router-dom` for app routing
-	`tailwindcss` for UI styling
-	`socket.io-client` for socket communicatoin
-	`react-redux` and `@redux/toolkit` for state management
-	`@testing-library/react` and `vitest` for unit testing


## Application Demo

https://github.com/kayali1411/JET-frontend-challenge/assets/15734859/29b16912-08b7-4a42-b4cd-d2cfaef7fbc6

