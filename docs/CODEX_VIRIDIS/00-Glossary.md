# 📚 Glossary

> *"Every unfamiliar word is only knowledge waiting to be claimed."*

This glossary contains the programming and development terms introduced while building **Nurgle's Garden**.

The entries are arranged alphabetically so they are easier to find and review.

---

## Accessibility

Designing software so it can be used by as many people as possible, including people who use screen readers, keyboard navigation, or other assistive technology.

---

## Attribute

Additional information placed inside an HTML opening tag.

Example:

```html
<a href="#sanctuary" class="navigation-link">
```

In this example, `href` and `class` are attributes.

---

## Browser

A program that reads and displays websites.

Examples include Microsoft Edge, Google Chrome, Firefox, and Safari.

The browser is where HTML, CSS, and JavaScript are executed.

---

## Class

A reusable name assigned to one or more HTML elements.

Classes are commonly used by CSS and JavaScript.

Example:

```html
<a class="navigation-link">
```

A class is selected in CSS with a period:

```css
.navigation-link {
    text-decoration: none;
}
```

---

## Console

A tool inside the browser's Developer Tools where developers can view messages, errors, and debugging information.

Example:

```javascript
console.log("🌿 The Garden awakens...");
```

---

## CSS

CSS stands for **Cascading Style Sheets**.

It controls the appearance and layout of a webpage, including colors, fonts, spacing, borders, and responsive behavior.

---

## Developer Tools

A collection of tools built into a web browser for inspecting and debugging websites.

Developer Tools can be opened by pressing **F12 inside the browser**.

Common panels include:

- Elements
- Console
- Sources
- Network
- Issues

---

## Element

A complete piece of HTML, usually consisting of an opening tag, content, and a closing tag.

Example:

```html
<h1>Nurgle's Garden</h1>
```

---

## File Name

The name of a specific file.

Example:

```text
app.js
```

This is different from a file path.

---

## File Path

The route used to locate a file or folder.

Example:

```text
js/app.js
```

This path means:

1. Enter the `js` folder.
2. Find the file named `app.js`.

---

## Git

A version-control system used to record changes to files over time.

Git allows developers to create commits, inspect history, compare changes, and restore earlier versions.

---

## GitHub

An online platform used to store and share Git repositories.

Git runs locally on the computer.

GitHub stores a remote copy of the repository online.

---

## HTML

HTML stands for **HyperText Markup Language**.

It provides the structure and meaning of a webpage.

---

## ID

A unique name assigned to one HTML element.

Example:

```html
<main id="sanctuary">
```

An ID is selected in CSS with a hash symbol:

```css
#sanctuary {
    min-height: 100vh;
}
```

IDs can also be used as link destinations:

```html
<a href="#sanctuary">Sanctuary</a>
```

---

## JavaScript

A programming language used to add behavior and interaction to a webpage.

JavaScript can respond to clicks, update content, store information, and change the page while it is running.

---

## Live Server

A VS Code extension that runs a local development server and automatically reloads the browser after saved changes.

The current project runs at an address similar to:

```text
127.0.0.1:5500
```

---

## Markdown

A lightweight formatting language used for documentation files such as `README.md`.

Markdown supports headings, lists, links, tables, quotes, task lists, and code blocks.

---

## Relative Path

The location of one file compared with another file.

From the root-level `index.html`, this path:

```text
js/app.js
```

points to `app.js` inside the `js` folder.

---

## Repository

A project folder tracked by Git.

A repository contains project files and the history of changes made to them.

---

## Responsive Design

Designing a website so it adapts to different screen sizes, including desktop computers, tablets, and phones.

---

## Semantic HTML

Using HTML elements according to their meaning instead of using `<div>` for everything.

Examples include:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Semantic HTML improves organization, accessibility, and maintainability.

---

## Source Code

The human-readable instructions written by a developer.

HTML, CSS, JavaScript, and Markdown files are all forms of source code in this project.

---

## VS Code

Visual Studio Code is the code editor used to create and manage Nurgle's Garden.

VS Code is where the code is written.

The browser is where the website runs.

---

## Viewport

The visible area of a webpage inside the browser.

This HTML setting helps the page display correctly on mobile devices:

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```