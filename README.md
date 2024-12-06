# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- React
- Typescript
- Styled Components
- Motion for React
### What I learned

This challenge provided valuable lessons in balancing accessibility, animations, and new tools:

1. **Accessibility and ARIA Best Practices**  
   I aimed to make the accordion as accessible as possible by referencing the [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/). Implementing properties like `aria-expanded` and `aria-hidden` ensured proper screen reader support, while dynamically managing focusable child elements with a custom hook allowed me to exclude hidden content from the tab order.

2. **Combining Animations and Accessibility**  
   I initially struggled to combine smooth animations with content hiding, as `display: none` conflicts with animations. I worked around this by animating `height` and `opacity` using Framer Motion while toggling `aria-hidden` for accessibility. This gave me smoother transitions without compromising usability.

3. **Improving My TypeScript Skills**  
   As someone relatively new to TypeScript, this project was an excellent exercise in type safety. Defining clear types for props and state management helped me better understand the advantages TypeScript brings to React projects, particularly for scalability and readability.

4. **Experimenting with Styled Components**  
   I challenged myself to use Styled Components instead of my usual preference for Tailwind CSS or CSS Modules. While Styled Components provided flexibility, I found myself wishing I was using Tailwind for some of the dynamic styling as I feel I could have implemented it more elegantly. This reinforced my preference for Tailwind when building components with dynamic state.

Overall, this project helped me grow as a developer by deepening my understanding of accessibility patterns, improving my TypeScript skills, and expanding my styling toolkit. It also reinforced the importance of user-centric development, where smooth interactions and inclusive design go hand in hand.

### Continued development

While I made significant progress with this project, there are areas I want to refine and continue focusing on in future work:

1. **Advanced Animations and Accessibility**  
   Combining animations with accessibility presented challenges, particularly around state management and content visibility. I plan to further explore animation libraries like Framer Motion and learn more advanced techniques to achieve seamless, accessible transitions without sacrificing performance.

2. **Deeper Integration of TypeScript**  
   This project gave me a great foundation for using TypeScript in React, but I want to continue improving my confidence with more complex type definitions, generics, and utility types. My goal is to write cleaner, type-safe code that scales well for larger projects.

3. **Optimizing Dynamic Styling Approaches**  
   While experimenting with Styled Components was valuable, I realized how efficient Tailwind CSS can be for managing dynamic styles. In future projects, I want to explore combining utility-first CSS with animation libraries to handle dynamic styles more elegantly while maintaining clarity and reusability.

4. **Focus Management and Accessibility**  
   Managing focusable elements dynamically taught me a lot about accessible design patterns, but there’s more to explore. I want to dive deeper into ARIA roles, live regions, and keyboard navigation for interactive components to ensure an even more polished user experience.

5. **Reusable Component Architecture**  
   Building this accordion reinforced the importance of reusable, modular components. I plan to refine my approach to creating components that are both flexible and accessible, focusing on patterns that can be applied consistently across projects.

By focusing on these areas, I hope to continue leveling up my skills in accessibility, TypeScript, and dynamic UI development while improving the overall structure and maintainability of my code.
