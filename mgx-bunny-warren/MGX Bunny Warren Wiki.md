# Project Summary
The project focuses on creating a multiplayer, real-time web application based on the physical card game "Bunny Warren." It leverages Next.js, Tailwind CSS 4, and Radix UI to deliver an interactive platform where players can join game rooms, engage with friends, and enjoy the core mechanics of the original game while incorporating modern web functionalities like user authentication and social features.

# Project Module Description
- **GameRoom**: Manages the game state and player interactions.
- **Player**: Handles player actions and maintains player-specific data.
- **Card**: Represents the game cards and their properties.
- **App**: The main application component that integrates all functionalities.
- **Authentication**: Integrates user sign-up, login, and profile management using Clerk.
- **Friend Requests**: Allows users to follow each other and manage friend requests.

# Directory Tree
```
app/
├── package.json          # Project dependencies and scripts
├── src/
│   ├── App.jsx          # Main application component
│   ├── Card.jsx         # Card component representation
│   ├── GameRoom.jsx     # Game room management
│   ├── Player.jsx       # Player actions management
│   ├── abc.js           # New module implementation
│   └── app.js           # Main app logic
docs/
├── prd.json             # Product Requirement Document
└── system_design.json    # Software architecture design
react_template/
├── README.md            # Project overview and setup instructions
├── eslint.config.js     # ESLint configuration
├── index.html           # Main HTML file
├── package.json         # React template dependencies
├── postcss.config.js    # PostCSS configuration
├── public/
│   └── data/
│       └── example.json # Example data for testing
├── src/
│   ├── App.jsx          # Template application component
│   ├── index.css        # Template styles
│   └── main.jsx         # Entry point for the template app
└── vite.config.js       # Vite configuration for building the app
uploads/
├── bunny-warren-card-game.jpg
├── bunny-warren-fox-card.jpg
├── bunny-warren-project-description.md
├── image_fx_ (2).jpg
├── image_fx_ (3).jpg
├── image_fx_ (7).jpg
├── new-rules-2-816x1110 (1).png
├── new-rules-2-816x1110.png
├── new-rules-original-816x1110 (1).png
├── new-rules-original-816x1110.png
└── non-action-cards (1).jpg
```

# File Description Inventory
- **prd.json**: Contains the product requirements for the web app, including user stories and competitive analysis.
- **system_design.json**: Outlines the software architecture, including implementation approach and data structures.
- **src/**: Contains the source code for the web application components, including newly added authentication and friend request functionalities.

# Technology Stack
- **Frontend**: Next.js, React, JavaScript, Tailwind CSS 4, Radix UI, Framer Motion, Anime.js
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Real-time Communication**: WebSocket with Socket.IO
- **Authentication**: Clerk for user management

# Usage
1. Install dependencies:
   ```bash
   cd app
   npm init -y
   pnpm install next react react-dom socket.io-client tailwindcss postcss autoprefixer framer-motion animejs eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react @clerk/nextjs
   ```
2. Run linting (ensure ESLint is configured):
   ```bash
   pnpm run lint
   ```
3. Build and run the application.
