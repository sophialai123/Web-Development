# Vue 2.0 Guidelines

## Component Design

### Single Responsibility Principle
- Each component should have a single responsibility. If a component does more than one thing, consider refactoring.

### Component Naming
- Use meaningful names for components.
- For tightly-coupled component relationships, use the parent name as a prefix.

### Prop Definitions
- Clearly define props with types and, if applicable, validators.
- Avoid using the generic `Object` or `Array` prop types. Be specific.

## Template Style

### Data Binding
- Use `v-bind` for attribute binding and `v-on` for event binding.
- Use shorthand, `:` for `v-bind` and `@` for `v-on`.

### Conditional Rendering
- Use `v-if` with `v-else-if` and `v-else` for conditional rendering.
- Avoid using `v-if` on the same element as `v-for`.

### List Rendering
- Always use the `key` attribute with `v-for` for a unique identifier.

## Script Style

### Component Options Order
- Follow a consistent order for component options: `props`, `data`, `computed`, `watch`, `methods`, and lifecycle hooks (`created`, `mounted`, etc.).

### Method Naming
- Use descriptive names for component methods, such as `fetchUserData` instead of `get`.

### Computed Properties
- Use computed properties when you need to compute derived state based on reactive data.
- Computed properties are cached, so they only re-evaluate when one of their reactive dependencies has changed.
- They are more efficient than methods for calculations that are used in multiple places in your template.

### Watchers
- Use `watch` when you need to perform asynchronous or expensive operations in response to changing data.
- Watchers are useful when you want to perform side-effects in response to data changes.

### Lifecycle Hooks
- `created`: This hook runs after the instance is created. Use it for logic that does not require DOM or child components, like fetching data or setting initial data values.
- `mounted`: This hook runs after the component’s template is rendered and its DOM is attached. Use it for logic that requires interacting with the DOM, like using a jQuery plugin or setting up a UI library.

## CSS and Styling

### Scoped Styles
- Use `<style scoped>` to limit styles to the current component only.

### Component-Level Styles
- Avoid global styles; try to keep styles within individual components.

## Performance

### Lazy Load Components
- Use async components to lazily load components when they are needed.

### Avoid Inline Functions in Templates
- Inline functions can cause unnecessary re-renders.

## Miscellaneous

### Custom Events
- Emit custom events using the `$emit` method. Keep event names kebab-case.

### Props over Events for Parent-Child Communication
- Use props for parent-to-child communication and events for child-to-parent.

### Clean Up
- Remove any watchers, intervals, or event listeners in the `beforeDestroy` lifecycle hook.

