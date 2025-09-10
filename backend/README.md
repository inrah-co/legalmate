# Express Mongo App

This project is an Express.js application that connects to MongoDB and provides various endpoints for user management and data entry. 

## Project Structure

```
express-mongo-app
├── src
│   ├── app.ts                # Entry point of the application
│   ├── routes                # Contains route definitions
│   │   ├── login.ts          # Route for user login
│   │   ├── settings.ts       # Routes for user settings
│   │   ├── dataEntry.ts      # Routes for data entries
│   │   └── userQuery.ts      # Route for AI queries
│   ├── controllers           # Contains business logic for routes
│   │   ├── loginController.ts # Handles user login logic
│   │   ├── settingsController.ts # Manages user settings
│   │   ├── dataEntryController.ts # Manages data entries
│   │   └── userQueryController.ts # Handles AI queries
│   ├── models                # Contains Mongoose models
│   │   ├── user.ts           # User schema
│   │   └── data.ts           # Data schema
│   └── types                 # TypeScript interfaces
│       └── index.ts          # Defines data structures
├── package.json              # NPM dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-mongo-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your MongoDB connection in `src/app.ts`.

## Usage

To start the application, run:
```
npm start
```

The server will start and listen for requests on the specified port.

## API Endpoints

- **Login**
  - `POST /login` - Login a user

- **Settings**
  - `GET /settings` - Get user settings
  - `POST /settings` - Set user settings

- **Data Entry**
  - `POST /data-entry` - Set data entry
  - `GET /data-entry` - Get all data entries

- **User Query**
  - `POST /user-query` - Ask AI a question

## License

This project is licensed under the MIT License.