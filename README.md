# Git Commit History - Backend

This is the readme for the "backend" project, built using NestJS, a powerful Node.js framework for building scalable and maintainable server-side applications. This project provides an authentication system and an endpoint for making requests to retrieve GitHub commit history.

## Prerequisites

Before you can run this project, make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (at least version 16)
- [npm](https://www.npmjs.com/) (usually comes with Node.js installation)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. Install project dependencies using npm:

   ```bash
   npm install
   ```


## Scripts

The project includes several scripts to help you with development, linting, testing, and running the application.

- **Build**: To build the project, use the following command:

  ```bash
  npm run build
  ```

  This command transpiles the TypeScript code into JavaScript.

- **Start**: To start the application, use the following command:

  ```bash
  npm run start
  ```

  This command runs the application in a production environment.

- **Start (Development)**: To start the application in development mode with watch mode, use:

  ```bash
  npm run start:dev
  ```

  This is useful for development and will automatically reload the application when code changes are detected.


## API Endpoints

The application provides the following API endpoints:

- **Login**:

  - URL: `http://localhost:3031/auth/login`
  - Method: `POST`
  - Request Body:

    ```json
    {
        "username": "user",
        "password": "password"
    }
    ```

  This endpoint allows users to log in and receive a bearer token.

- **GitHub Commit History**:

  - URL: `http://localhost:3031/github/commit-history/{user}/{name of repository}`
  - Method: `GET`
  - Request Headers:

    ```
    Authorization: Bearer <your-access-token>
    ```

  This endpoint allows users to retrieve commit history from a GitHub repository. You must include the bearer token received upon logging in.

## Dependencies

The project relies on several dependencies, including:

- NestJS modules for building web applications.
- Axios for making HTTP requests.
- Passport and JWT for authentication.
- Jest for testing.

Make sure to check the `package.json` file for the complete list of dependencies and their versions.

## Feedback and Issues

If you encounter any issues with the project or have feedback, please feel free to [create an issue](https://github.com/your-repository-url/issues) on the project's GitHub repository.

Happy coding!