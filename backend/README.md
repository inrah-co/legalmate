# Express Mongo App

This project is an Express.js application that connects to a MongoDB database. It provides various endpoints for user authentication, settings management, data entry, and user queries.

## Project Structure

```
express-mongo-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes                # Contains route definitions
│   │   ├── login.js          # User login route
│   │   ├── settings.js       # User settings routes
│   │   ├── dataEntry.js      # Data entry routes
│   │   └── userQuery.js      # User query route
│   ├── controllers           # Contains business logic for routes
│   │   ├── loginUser.js      # Handles user login logic
│   │   ├── getSettings.js     # Retrieves user settings
│   │   ├── setSettings.js     # Updates user settings
│   │   ├── setData.js        # Adds new data entries
│   │   ├── getAllData.js     # Retrieves all data entries
│   │   └── askAI.js          # Processes user queries
│   ├── models                # Mongoose schemas
│   │   ├── user.js           # User schema
│   │   └── data.js           # Data entry schema
│   └── utils                 # Utility functions for vector operations
│       ├── textToVector.js   # Converts text to vector
│       ├── vectorToText.js   # Converts vector to text
│       ├── vectorSimilarity.js # Calculates cosine similarity
│       └── processLongText.js # Processes long text into vectors
├── package.json              # NPM configuration file
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd express-mongo-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up MongoDB:**
   Ensure you have MongoDB installed and running. Update the connection string in `src/app.js` to point to your MongoDB instance.

4. **Run the application:**
   ```
   npm start
   ```

5. **API Endpoints:**
   - **Login:** `POST /login` - Authenticates a user.
   - **Settings:**
     - `GET /settings` - Retrieves user settings.
     - `POST /settings` - Updates user settings.
   - **Data Entry:**
     - `POST /data` - Adds a new data entry.
     - `GET /data` - Retrieves all data entries.
   - **User Query:** `POST /query` - Processes user queries.

## Usage

You can use tools like Postman or curl to interact with the API endpoints. Make sure to send the appropriate request body for each endpoint as specified in the API documentation.