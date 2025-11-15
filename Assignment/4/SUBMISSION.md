# Assignment 4 Submission

**Name:** Papat Thanitkhunkitti  
**Student ID:** 924975464

## Links

- **GitHub Repository:** https://github.com/lRPNSl/CSC317/tree/main/Assignment/4  
- **Live GitHub Pages URL:** https://lrpnsl.github.io/CSC317/

## Implementation Description

For this assignment, I implemented a portfolio website and a fully functional calculator. The portfolio site showcases my skills, projects, and personal information, while allowing users to switch between multiple color themes using a dynamic theme switcher. The calculator is responsive and supports standard arithmetic operations, special functions like ±, percentage, clear, and backspace, and also has a separate theme switcher. I utilized HTML, CSS, and JavaScript for interactivity and styling, and implemented localStorage to save the user’s preferred theme across sessions. The layout is mobile-responsive and designed with modern UI aesthetics inspired by Cyberpunk and Monokai terminal themes.

## Challenges Faced

One of the main challenges was managing multiple themes for different pages without conflicts. Initially, switching themes on the calculator would overwrite the portfolio theme due to using the same localStorage key. I resolved this by using unique storage keys for each page and ensuring default themes load correctly if no preference exists. Additionally, I worked on fine-tuning button hover effects and responsive layouts to ensure usability on different screen sizes.

## Additional Features

- Added smooth transitions and neon/glow effects for the calculator and portfolio themes.  
- Implemented a persistent theme selection using localStorage.  
- Created a dropdown-style project description section in the portfolio for better user experience.  
- Added active state indicators for theme buttons for clarity.

## Acknowledgments

- Mozilla Developer Network (MDN) Web Docs for guidance on `localStorage` and DOM manipulation.  
- Various online CSS tutorials for gradient and neon/glow effects.  
- Stack Overflow discussions for debugging theme switcher issues.  
