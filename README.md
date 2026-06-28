# Bistro Bliss - Restaurant Website

A modern, responsive restaurant website built with HTML5, CSS3, Bootstrap 5, and JavaScript. The site features a complete menu system, shopping cart functionality, and a dashboard for product management.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Product Menu**: Browse and filter menu items by category (Breakfast, Main Dishes, Drinks, Desserts)
- **Shopping Cart**: Add items to cart with quantity management and real-time total calculation
- **Search Functionality**: Search for menu items by name
- **Dashboard**: Admin panel to add and manage products
- **Checkout Page**: Complete checkout form with order summary
- **Modern UI**: Clean and professional design with smooth animations

## Project Structure

```
Restaurant-project/
├── index.html              # Main homepage
├── pages/
│   ├── about.html         # About page
│   ├── contact.html       # Contact page
│   ├── menu.html          # Menu page
│   ├── login.html         # Login page
│   ├── signup.html        # Sign up page
│   ├── dash.html          # Admin dashboard
│   └── checkout.html      # Checkout page
├── assets/
│   ├── css/
│   │   ├── header.css     # Header and footer styles
│   │   ├── index.css      # Homepage styles
│   │   ├── menu_page.css  # Menu page styles
│   │   ├── about.css      # About page styles
│   │   ├── contact.css    # Contact page styles
│   │   ├── dash.css       # Dashboard styles
│   │   ├── signup.css     # Login/Signup styles
│   │   └── bootstrap.min.css
│   ├── js/
│   │   ├── produ.js       # Product data and rendering
│   │   ├── cart.js        # Shopping cart logic
│   │   ├── menu_logic.js  # Menu filtering logic
│   │   ├── search.js      # Search functionality
│   │   ├── dash.js        # Dashboard logic
│   │   ├── checkout.js    # Checkout form validation
│   │   ├── products.json  # Product data
│   │   └── bootstrap.bundle.min.js
│   └── images/            # Product and site images
└── README.md
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/eng-ali-ramadan/Restaurant-project.git
cd Restaurant-project
```

2. Open `index.html` in your web browser or deploy to a web server.

### Deployment on GitHub Pages

1. Push your changes to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/root` folder
5. Your site will be available at `https://yourusername.github.io/Restaurant-project`

## Usage

### For Customers
- Browse the menu on the homepage or dedicated menu page
- Use the search bar to find specific items
- Add items to cart and manage quantities
- Proceed to checkout to complete order

### For Administrators
- Access the dashboard at `/pages/dash.html`
- Add new products with name, price, category, and image
- View all products in the management table
- Delete products as needed

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **Bootstrap 5**: Responsive framework
- **JavaScript (ES6+)**: Interactive functionality
- **LocalStorage**: Client-side data persistence

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Minified CSS and JavaScript files
- Optimized images
- Smooth scrolling behavior
- Efficient DOM manipulation
- LocalStorage for cart persistence

## Accessibility Features

- Semantic HTML structure
- ARIA labels for icons
- Keyboard navigation support
- High contrast colors
- Proper heading hierarchy

## Future Enhancements

- Payment gateway integration
- User authentication system
- Order tracking
- Email notifications
- Multi-language support
- Dark mode theme

## License

This project is open source and available under the MIT License.

## Author

FITU Developer

## Contact

Email: asd583129@gmail.com

---

**Note**: This is a front-end only application. For production use, integrate with a backend server for order processing and payment handling.
