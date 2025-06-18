# Fan Engagement Idea Generator: Setup Guide

This guide will help you set up and run the Fan Engagement Idea Generator application locally or deploy it to a web server.

## Local Development Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A basic code editor (VS Code, Sublime Text, Atom, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/dxaginfo/fan-engagement-app-2025.git
   cd fan-engagement-app-2025
   ```

2. Open the project in your code editor.

3. Launch the application:
   - If you have Python installed:
     ```bash
     # Python 3
     python -m http.server 8000
     # Python 2
     python -m SimpleHTTPServer 8000
     ```
   - If you have Node.js installed:
     ```bash
     # Install a simple server if needed
     npm install -g http-server
     # Run the server
     http-server
     ```
   - Alternatively, you can use any local development server of your choice, or simply open the `index.html` file directly in your browser.

4. Access the application in your browser at `http://localhost:8000` (or the appropriate port).

## Deployment

The application can be easily deployed to any static web hosting service:

### GitHub Pages Deployment

1. In your GitHub repository, go to "Settings" > "Pages".
2. Under "Source", select the branch you want to deploy (e.g., "main").
3. Click "Save" and GitHub will provide you with the URL for your deployed site.

### Netlify Deployment

1. Sign up for a Netlify account at [netlify.com](https://www.netlify.com/).
2. Click "New site from Git" and select your GitHub repository.
3. Configure your build settings (not needed for this project) and click "Deploy site".

### Other Static Hosting Options

The application can be deployed to any static file hosting service, including:
- Vercel
- Firebase Hosting
- Amazon S3
- Azure Static Web Apps

Simply upload the entire repository contents to your hosting service.

## Customization

### Adding More Engagement Ideas

To expand the database of engagement ideas:

1. Open `js/data.js`
2. Add new idea objects to the `engagementIdeas` array, following the existing format:
   ```javascript
   {
       id: [next sequential ID],
       title: "Your Idea Title",
       description: "Description of the engagement idea",
       category: "digital", // Choose from existing categories
       budgetLevel: "low", // low, medium, or high
       difficultyLevel: "easy", // easy, moderate, or complex
       audienceAges: ["18-24", "25-34"], // Target age ranges
       productTypes: ["sports-team", "entertainment"], // Applicable product types
       goals: ["engagement", "loyalty"], // Primary goals
       implementationTips: [
           "First implementation tip",
           "Second implementation tip",
           "Third implementation tip"
       ]
   }
   ```

### Modifying the UI

- Customize the styles by editing `css/styles.css`
- Modify the form inputs by editing the appropriate sections in `index.html`
- Change the filtering logic by updating the `filterIdeas()` function in `js/app.js`

## Troubleshooting

- **Ideas not displaying**: Check the browser console for JavaScript errors
- **Styling issues**: Ensure all CSS files are properly linked and accessible
- **Local storage problems**: Try clearing your browser cache or localStorage

## Browser Compatibility

The application is compatible with:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Support and Issues

For support or to report issues, please use the [GitHub issue tracker](https://github.com/dxaginfo/fan-engagement-app-2025/issues).