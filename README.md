# Fan Engagement Idea Generator

A web application that helps sports teams and brands generate tailored fan engagement ideas based on specific criteria such as product/service type, target audience demographics, budget constraints, and goals.

## Features

- **Customized Idea Generation:** Form-based interface for specifying engagement criteria
- **Filtered Results:** Ideas filtered to match your specific needs and constraints
- **Implementation Tips:** Practical guidance for implementing each idea
- **Local Storage:** Save your favorite ideas for future reference
- **Responsive Design:** Works on desktop and mobile devices

## Live Demo

[View the live demo](https://dxaginfo.github.io/fan-engagement-app-2025/) (coming soon)

## Screenshots

![Fan Engagement Idea Generator Screenshot](docs/screenshot.png) (placeholder)

## Technologies Used

- HTML5
- CSS3 with custom animations
- JavaScript (ES6+)
- Bootstrap 5
- Local Storage API
- SVG Graphics

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dxaginfo/fan-engagement-app-2025.git
   ```

2. Open `index.html` in your browser, or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js with http-server
   npx http-server
   ```

## Usage

1. Select your product/service type from the dropdown
2. Specify target audience age ranges
3. Choose your budget level
4. Select your primary goal
5. Check preferred engagement types
6. Click "Generate Ideas" to receive tailored engagement suggestions
7. Save your favorite ideas using the bookmark icon
8. Access saved ideas from the "Saved Ideas" button

## Documentation

Additional documentation is available in the `docs` folder:

- [Architecture Overview](docs/architecture.md)
- [Setup Guide](docs/setup.md)

## Extending the Application

### Adding New Engagement Ideas

To add more engagement ideas to the database, edit the `js/data.js` file and add new objects to the `engagementIdeas` array following the existing format.

### Customizing Categories

To modify or add categories, update:
1. The category values in `js/data.js`
2. The category display mappings in `js/app.js` (getCategoryDisplayName function)
3. The category badge styles in `css/styles.css`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Bootstrap team for the responsive UI framework
- The open-source community for inspiration and resources