# Accessible Dialog Component in React

## Overview
This project involves building a reusable Dialog component in React that ensures accessibility while leaving design and UI choices up to the component's consumer. The component addresses various concerns such as focus management, accessibility, and user interaction (e.g., opening, closing, focus trapping, overlay behavior). The implementation ensures that the dialog behaves like a modal, but without enforcing any particular design.

## Key Features

### Accessibility Compliance:
- Uses the `<dialog>` element or `role="dialog"` for accessibility.
- **Focus management**: When the dialog opens, focus is set to the first interactive element inside the dialog.
- Tab-cycled focus should be trapped inside the dialog (cycling through interactive elements using Tab and Shift+Tab).
- `aria-hidden="true"` is applied to the content behind the dialog to prevent assistive technology from reading it.
- When the dialog closes, focus is returned to the element that was focused before the dialog opened.

### User Interaction:
The dialog should close when:
1. The user clicks outside the dialog (on the overlay).
2. The user presses the Esc key.
3. The user clicks the "close" button.

### React Implementation:
- Built using React hooks and render props.
- React's Portal feature is used to render the dialog outside of the parent component’s DOM hierarchy, allowing the dialog to overlay on top of the UI.

## Requirements

### Focus Management:
- When the dialog opens, focus should be given to the first interactive element within the dialog.
- Focus should be trapped within the dialog (cycling through interactive elements using Tab and Shift+Tab).
- On closing the dialog, the focus should return to the element that was focused before the dialog opened.

### Interaction Management:
- The dialog should close when:
  1. The user clicks outside the dialog (on the overlay).
  2. The user presses the Esc key.
  3. The user clicks the "close" button.

### Accessibility:
- The dialog should use the `<dialog>` element or `role="dialog"`.
- When the dialog is open, the content behind the dialog should be visually obscured by an overlay.
- When the dialog is open, the element wrapping the content (e.g., the `div` with `sectionContent` id) should be assigned `aria-hidden="true"`, and removed when the dialog closes.

---

## Props

### `handleClose` (required)
- **Type**: `function`
- **Description**: This callback function is triggered when the dialog is closed. It’s typically used to update the state (e.g., setting `isOpen` to `false`).
- **Usage**: Use `handleClose` to close the dialog when the user interacts with it (e.g., clicking the close button or pressing Esc).

### `isOpen` (required)
- **Type**: `boolean`
- **Description**: This boolean prop controls the visibility of the dialog. If `isOpen` is `true`, the dialog is displayed; if `false`, the dialog is hidden.
- **Usage**: Use this prop to manage the state of the dialog (open or close it based on the value of `isOpen`).

### `className` (optional)
- **Type**: `string`
- **Default**: `""` (no styles applied by default)
- **Description**: A custom CSS class for styling the dialog box itself. Use this to control the dialog's appearance (e.g., size, background color, padding, border, etc.).
- **Usage**: Pass a custom class name to style the dialog content.

### `backdropClassName` (optional)
- **Type**: `string`
- **Default**: `""` (no styles applied by default)
- **Description**: A custom CSS class for styling the backdrop (the semi-transparent overlay behind the dialog). Use this to control the backdrop's appearance (e.g., color, opacity, blur).
- **Usage**: Pass a custom class name to style the backdrop overlay.

---

## Installation
1. Clone the repository: `git clone https://github.com/linbm123/Dialog-project.git`.
2. Install dependencies: `npm install`.
3. Start the development server: `npm run start`.