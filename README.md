# Vocabulary Explorer

A web application to help users learn Cree vocabulary, built for CMPUT 302.

## Features
- **Category Browsing**: Explore words by themes like Body, Food, Family, Animals, and Weather.
- **Search**: Quickly find words in English or Cree.
- **Word Details**: View translations and pronunciation guides.
- **Save Words**: Keep a collection of words you want to practice.
- **Expert Mode**: Toggle advanced linguistic details (word class and morphology).
- **Mobile Friendly**: Minimalist and clean design that works on all devices.

## Tech Stack
- React
- React Router (Navigation)
- Lucide React (Icons)
- CSS (Custom styling)

## Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open the app**:
   Navigate to the URL shown in your terminal (usually `http://localhost:5173`).

## Project Structure
- `src/data/words.js`: Mock data containing the vocabulary.
- `src/context/`: Application state management (Saved words, Expert mode).
- `src/components/`: Shared UI components like SearchBar and Layout.
- `src/pages/`: Main application screens.
- `src/App.css`: Custom minimalist styling.
