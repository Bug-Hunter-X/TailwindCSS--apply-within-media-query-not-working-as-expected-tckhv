```javascript
// Example showing an unexpected behavior when using Tailwind's @apply directive within a media query.

.container {
  @apply bg-gray-100;
}

@media (min-width: 768px) {
  .container {
    @apply bg-gray-200;
  }
}
```