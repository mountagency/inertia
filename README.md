# Rails Inertia React Application

A modern web application built with Ruby on Rails 8, Inertia.js, and React, featuring a beautiful UI powered by Tailwind CSS.

## 🚀 Tech Stack

### Backend

- Ruby on Rails 8.0.2
- Inertia Rails 3.8
- SQLite3 Database
- Puma Web Server
- Vite Rails 3.0

### Frontend

- React 19
- TypeScript
- Inertia.js
- TailwindCSS v4
- Shadcn/ui
- Vite

## 🛠️ Prerequisites

- Ruby 3.x
- Node.js 18+
- SQLite3
- Yarn or npm

## 🏗️ Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <your-app-name>
```

2. Install Ruby dependencies:

```bash
bundle install
```

3. Install JavaScript dependencies:

```bash
yarn install
# or
npm install
```

4. Set up the database:

```bash
rails db:create db:migrate
```

5. Start the development server:

```bash
./bin/dev
```

The application will be available at `http://localhost:3000`

## 🏃‍♂️ Development

The application uses Vite for frontend asset compilation and hot module replacement. The development server runs both Rails and Vite in development mode.

### Running Tests

```bash
rails test
```

### Type Checking

```bash
yarn check
# or
npm run check
```
