# Wanderlust Travel Website

A modern two-page travel website built using advanced CSS Grid, Flexbox, and SASS/SCSS features.

## Features

### CSS Layout

- CSS Grid layouts for:
  - Destination cards grid
  - Features section
  - Footer sections
  - Destinations page grid
- Flexbox layouts for:
  - Navigation menu
  - Hero content
  - Filter buttons
  - Social links

### SASS/SCSS Features Implemented

1. **Variables**

   - Colors
   - Typography
   - Spacing
   - Breakpoints
   - Grid settings

2. **Custom Properties**

   - Root-level CSS variables for theme colors
   - Dynamic property access

3. **Nesting**

   - Hierarchical style organization
   - BEM methodology support

4. **Interpolation**

   - Dynamic selector generation
   - Variable interpolation in values

5. **Placeholder Selectors**

   - Reusable card styles
   - Container layouts
   - Button base styles
   - Image cover styles

6. **Mixins**

   - Flexbox configurations
   - Grid layouts
   - Media queries
   - Typography styles
   - Button styles
   - Card shadows

7. **Functions**

   - PX to REM conversion
   - Z-index management
   - Fluid typography calculation
   - Color manipulation (tint/shade)

8. **Additional SASS Features**
   - Maps for breakpoints and z-index
   - Control directives (@if, @else)
   - Parent selector references (&)
   - Import directives for modularity

## Project Structure

```
project/
├── scss/
│   ├── utilities/
│   │   ├── _variables.scss
│   │   ├── _functions.scss
│   │   ├── _mixins.scss
│   │   └── _placeholders.scss
│   ├── layout/
│   │   ├── _grid.scss
│   │   ├── _header.scss
│   │   └── _footer.scss
│   ├── components/
│   │   ├── _buttons.scss
│   │   └── _cards.scss
│   └── main.scss
├── css/
│   └── main.css
├── js/
│   └── main.js
├── images/
├── index.html
└── destinations.html
```

## Setup Instructions

1. Install SASS:

   ```bash
   npm install -g sass
   ```

2. Compile SCSS to CSS:

   ```bash
   sass scss/main.scss css/main.css --watch
   ```

3. Open `index.html` in your browser to view the website.

## Features

- Responsive design with mobile-first approach
- Interactive destination filtering
- Smooth scroll navigation
- Animated components
- Modern card-based UI
- Dynamic header behavior

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Images: Replace placeholder images with your own
- Fonts: Google Fonts (Poppins, Playfair Display)
