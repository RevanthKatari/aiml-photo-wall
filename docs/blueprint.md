# **App Name**: AIML Batch Photo Wall

## Core Features:

- Image URL Generation: Dynamically generate image URLs based on the registration number format (VU21CSEN0300XXX) from 001 to 600, and attempt to load them.
- Error Handling: Implement error handling to gracefully skip/hide images that fail to load (404 or other errors).
- Grid Layout: Display valid photos in a responsive grid layout using Tailwind CSS classes. Ensure proper sizing and spacing.
- Dynamic Shuffling and Animation: Shuffle the positions of the images every 5 seconds and smoothly animate the transitions using Framer Motion or CSS transitions.
- Loading Spinner: Display a loading spinner until at least some of the photos are successfully loaded and visible.

## Style Guidelines:

- Primary color: Light background (e.g., #f9f9f9) to make the photos stand out.
- Accent color: Teal (#008080) to bring in a sense of calm and sophistication
- Responsive grid layout that adapts to different screen sizes.
- Smooth transition animations for shuffling images (e.g., fade, slide).
- Simple loading spinner icon (e.g., a rotating circle).

## Original User Request:
Build a React app that displays a dynamic wall of photos for our graduating AIML batch.

Details:

Each student’s photo can be loaded from:
https://doeresults.gitam.edu/photo/img.aspx?id=VU21CSEN0300XXX
where XXX is a number from 001 to 600.
The full registration number is in this format: VU21CSEN0300 + 3-digit number.

Not all registration numbers are valid. The app should try to load the image, and if it fails (onError), it should skip/hide that image.

Display the valid photos in a grid layout using Tailwind CSS.

Shuffle the image positions dynamically and smoothly animate them every 5 seconds using Framer Motion or CSS transitions.

It should look like a "photo wall" — full of moving tiles for display on a big screen during a farewell event.

Bonus: Add a loading spinner until some photos are visible.
  