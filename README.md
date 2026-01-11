# Hustly

![Version](https://img.shields.io/badge/status-Alpha_v0.1.3-orange)

Hustly is a modern productivity dashboard designed to help you track, manage, and progress on your personal projects and "hustles". Whether you're building a startup, learning a new skill, or managing freelance work, Hustly provides a clean and intuitive interface to keep everything organized.

## 🆕 What's New in v0.1.3
- **Progress Visualization**: Added interactive Area Charts to the Progress page to visualize hustle activity over time.
- **Real-time Data Integration**: Charts are now connected to live Supabase data, showing daily hustle counts.
- **UI Improvements**: Polished chart styling with card layouts and optimized height for better dashboard density.
- **Theme Fixes**: Resolved dark mode color regressions for a consistent visual experience.

### Previous Updates (v0.1.2)
- **Full Editing Capabilities**: Users can now update all hustle details (Title, Description, Status, Progress, Tags) directly from the popup.
- **Delete Functionality**: Added the ability to permanently delete hustles.

## 🚀 Features

- **Project Management**: Create new hustles with detailed information including title, description, and category.
- **Progress Tracking**: Visual progress bars to track how far along you are with each hustle.
- **Status Workflow**: Manage the lifecycle of your projects with statuses like Active, Paused, and Completed.
- **Organization**: Use tags and categories to keep your workspace sorted.
- **Search & Filter**: Instantly find the hustle you're looking for with real-time search filtering.
- **Authentication**: Secure user accounts powered by Supabase.
- **Responsive Design**: A beautiful, dark-themed UI built with Tailwind CSS.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Authentication)
- **State Management**: React Hooks & Context API

## 📦 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/markomoev/Hustly.git
    cd Hustly
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory and add your Supabase credentials:
    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

## 📄 License

This project is licensed under the MIT License.
