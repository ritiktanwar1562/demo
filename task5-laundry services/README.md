# Laundry Service Landing Page

## Project Overview

This project is a responsive laundry service landing page created using HTML and CSS.

The page contains:

- Navigation bar
- Hero section
- Call-to-action button
- Responsive layout
- Orbit animation on the image

---

## How the Animation Works

I created the orbit animation using CSS @keyframes and transform.

At 0% the image starts at its original position.

At 25% the image rotates to the right side using:

rotate(90deg) translateX(20px)

and is slightly squeezed horizontally using:

scale(1.15, 0.85)

At 50% the image reaches the bottom position.

At 75% the image moves to the left side and is squeezed vertically using:

scale(0.85, 1.15)

At 100% the image completes a full circle using:

rotate(360deg)

This creates a smooth circular orbit effect instead of back-and-forth movement.

---

## Responsive Design

Media queries are used to make the layout work on smaller screens.

The hero section changes from a row layout to a column layout for mobile devices.