# Project Structure

- **intern/**: The root directory of the project.  
- **src/**: Contains all the source code for the application.  
- **components/**: Contains reusable components like Header and Footer.  
- **pages/**: Contains different pages of the application, such as Home, StudentPortal, EmployerPortal, AdminPanel, FAQ, Resources, and SuccessStories.  
- **App.tsx**: The main application component that sets up routing for the application.  
- **index.css**: The main CSS file that includes Tailwind CSS directives.  
- **main.tsx**: The entry point of the application where the React app is rendered.  

# Key Components

- **Header.tsx**: Renders the navigation bar with links to different sections of the portal (Students, Employers, Admin, Resources, Success Stories, FAQ).  
- **Footer.tsx**: Displays contact information and quick links at the bottom of the page.  

# Pages

- **Home.tsx**: The landing page that welcomes users and provides links to different portals (Student, Employer, Admin).  
- **StudentPortal.tsx**: Allows students to log in, search for internships, and view their application status.  
- **EmployerPortal.tsx**: Enables employers to log in, post internships, and view their company profile.  
- **AdminPanel.tsx**: Provides admin functionalities like logging in, viewing statistics, and managing users and companies.  
- **FAQ.tsx**: Displays frequently asked questions related to the internship portal.  
- **Resources.tsx**: Lists various resources available for students, including guides, tips, and useful links.  
- **SuccessStories.tsx**: Showcases success stories of students who have completed internships through the portal.  

# Styling

- **index.css**: Utilizes Tailwind CSS for styling the components. The file includes Tailwind's base, components, and utilities.  
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid UI development.  

# Routing

- **App.tsx**: Uses React Router to define routes for the application. Each route corresponds to a different page component.  

# State Management

- **React Hooks**: The application uses React's `useState` hook to manage local state in components like StudentPortal, EmployerPortal, and AdminPanel.  

# Form Handling

- **React Hook Form**: The application uses `react-hook-form` for managing form state and validation in the login forms for students and employers.  
- **Zod**: A TypeScript-first schema declaration and validation library used in conjunction with React Hook Form for form validation.  

# Dependencies

- **package.json**: Lists dependencies such as React, React Router, Tailwind CSS, and various development tools like ESLint and TypeScript.  

# Build and Development

- **Vite**: The project uses Vite as a build tool, which provides fast development and build times.  

# Configuration Files

- **tsconfig.json**: Configures TypeScript settings for the project.  
- **vite.config.ts**: Configures Vite settings for the project.  
