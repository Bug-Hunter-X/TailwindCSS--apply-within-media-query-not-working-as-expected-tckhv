# Tailwind CSS @apply within Media Query Issue

This repository demonstrates an unexpected behavior when using Tailwind CSS's `@apply` directive within media queries. The issue is that the styles are not applied conditionally based on the breakpoint defined in the media query.

## Bug Description:

When using the `@apply` directive to apply multiple Tailwind CSS utility classes within a media query, the classes are not applied conditionally. Instead, they are either applied in all screen sizes or not applied at all.

## Steps to reproduce:

1.  Clone this repository.
2.  Run `npm install` to install dependencies.
3.  Run `npm start` to start the development server.
4.  Observe the rendered HTML and CSS, noting that the background color doesn't change on screen resize (media query does not work).

## Solution:

The solution is to avoid using `@apply` inside media queries and manually apply the styles instead or use responsive utility classes like `bg-gray-100 md:bg-gray-200`.  See the solution file for an implementation of the correct approach.