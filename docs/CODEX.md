# The Codex Viridis

## The Green Codex of Nurgle's Garden

The Codex Viridis is the official development handbook for Nurgle's Garden.

It records what the Cheeky Nurgling learns while building the project.

Each new feature should add new knowledge to the Codex.

---

# Table of Contents

1. The Purpose of HTML
2. The Purpose of CSS
3. The Structure of an HTML Document
4. Semantic HTML
5. Classes and IDs
6. The Fortress Layout
7. CSS Variables
8. CSS Grid
9. Flexbox
10. Pseudo-classes and Pseudo-elements
11. Responsive Design
12. Accessibility
13. Git Workflow
14. Common Mistakes
15. Development Glossary

---

# 1. The Purpose of HTML

HTML stands for:

> HyperText Markup Language

HTML creates the structure and content of a webpage.

HTML tells the browser what each piece of content represents.

Examples include:

- A heading
- A paragraph
- A navigation menu
- A section
- A button
- A link
- A list
- A footer

Example:

```html
<h1>Nurgle's Garden</h1>

<p>From decay comes growth.</p>

---

# 2. The Purpose of CSS

CSS stands for:

Cascading Style Sheets

CSS controls how HTML looks and how it is arranged.

CSS can control:

Colors
Fonts
Borders
Shadows
Spacing
Width
Height
Position
Animation
Responsive layouts

Example:

h1 {
    color: #aab66d;
    font-size: 64px;
}
This selects every <h1> element and gives it:

A green color
A font size of 64 pixels

CSS is the architecture, lighting, decoration, and atmosphere of the fortress.

---

# 3. The Structure of an HTML Document

A basic HTML page looks like this:

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>

<body>
    <h1>Visible Page Content</h1>
</body>

</html>

<!DOCTYPE html>

Tells the browser that the document uses modern HTML.

<html>

Contains the entire webpage.

<head>

Contains information about the webpage.

This can include:

The page title
Metadata
Fonts
CSS connections
<body>

Contains everything visible on the webpage.

# 4. Semantic HTML

Semantic HTML uses tags that describe the purpose of their content.

Nurgle's Garden currently uses:

<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
   
   <header>

Introduces a page or section.

<nav>

Contains important navigation links.

<main>

Contains the primary content of the page.

A page should usually contain only one <main> element.

<section>

Groups content about one topic.

<article>

Contains a self-contained piece of content.

Each dashboard card is an article.

<aside>

Contains supporting content beside the primary content.

The fortress sidebar is an aside.

<footer>

Contains closing information for a page or section.

Semantic HTML improves:

Accessibility
Search-engine understanding
Code organization
Readability for developers

# 5. Classes and IDs

Classes and IDs give HTML elements names that CSS and JavaScript can use.

Classes

A class can be used by multiple elements.

Example:

<article class="panel">
    <h2>Current Campaign</h2>
</article>

CSS selects a class by placing a period before its name:

.panel {
    border: 1px solid #786842;
}

Many elements can use the panel class.

Multiple Classes

One element can have more than one class:

<article class="panel panel-wide">

This element receives styling from both:

.panel {
}

and:

.panel-wide {
}
IDs

An ID should identify one unique element.

Example:

<main id="sanctuary">

A link can jump to that element:

<a href="#sanctuary">Sanctuary</a>

CSS selects an ID using a number sign:

#sanctuary {
}

Classes are usually used for styling.

IDs are commonly used for unique locations, labels, or JavaScript targets.

# 6. The Fortress Layout

The main page is wrapped inside:

<div class="fortress">

Inside the fortress are two major areas:

Fortress
├── Sidebar
└── Main Content

The HTML structure is:

<div class="fortress">

    <aside class="sidebar">
        Sidebar content
    </aside>

    <main class="main-content">
        Main page content
    </main>

</div>

CSS Grid creates the two-column layout:

.fortress {
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
}

The first column is 280 pixels wide.

The second column uses the remaining space.

# 7.CSS Variables

CSS variables store reusable design values.

They are created inside :root.

Example:

:root {
    --plague-light: #aab66d;
    --bronze: #786842;
    --bone: #d7cfad;
}

They are used with var():

h1 {
    color: var(--plague-light);
}

Advantages of variables:

Colors stay consistent
Values are easier to update
The design system becomes easier to understand
Repeated values do not have to be rewritten

The main Nurgle's Garden color groups are:

Stone colors for backgrounds
Plague greens for growth and active states
Bronze colors for borders and structure
Bone colors for readable text

# 8. CSS Grid

CSS Grid is used for layouts containing rows and columns.

Example:

.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
}
display: grid

Turns the element into a grid container.

grid-template-columns

Defines the columns.

repeat(2, ...)

Creates two columns.

1fr

Means one fraction of the available space.

Two columns using 1fr receive equal space.

gap

Adds space between grid items.

The wide Garden Growth card uses:

.panel-wide {
    grid-column: 1 / -1;
}

This makes the card stretch from the first grid line to the final grid line.

# 9. Flexbox

Flexbox is useful for arranging items in one direction.

It is used throughout Nurgle's Garden for:

Icons beside navigation text
The campaign text beside its seal
The progress heading beside its percentage
Statistics with labels on the left and values on the right

Example:

.panel-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
display: flex

Turns the element into a Flexbox container.

justify-content: space-between

Pushes items toward opposite sides.

align-items

Controls vertical alignment.

gap

Adds space between Flexbox items.

# 10. Pseudo-classes and Pseudo-elements
Pseudo-classes

Pseudo-classes style an element during a particular state.

Example:

.navigation-link:hover {
    transform: translateX(3px);
}

:hover applies while the mouse is over the link.

Pseudo-elements

Pseudo-elements create additional decorative content through CSS.

Examples:

body::before {
}
.sidebar::after {
}
.navigation-link.active::before {
}
.panel::after {
}

They are used for:

Page texture
Decorative lines
Active navigation indicators
Panel glows

Pseudo-elements do not need extra HTML.

# 11. Responsive Design

Responsive design allows the page to adapt to different screen sizes.

Nurgle's Garden uses media queries.

Example:

@media (max-width: 760px) {
    .fortress {
        display: block;
    }
}

This means:

When the screen is 760 pixels wide or smaller, apply these rules.

On smaller screens:

The sidebar moves above the content
The dashboard becomes one column
Navigation links reorganize
The campaign seal moves below the text
Large headings become smaller

Responsive design helps the same website work on:

Desktop computers
Laptops
Tablets
Phones

# 12. Accessibility

Accessibility helps people with disabilities use the website.

Nurgle's Garden currently uses several accessibility tools.

aria-label

Provides a readable label for assistive technology.

Example:

<nav aria-label="Primary navigation">
aria-hidden

Tells screen readers to ignore decorative content.

Example:

<span aria-hidden="true">☣</span>
Progress Bar Accessibility
<div
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="10"
>

This tells a screen reader:

The element is a progress bar
Its minimum value is 0
Its maximum value is 100
Its current value is 10

The visual value and accessibility value should always match.

For example:

.progress-fill {
    width: 10%;
}

should match:

aria-valuenow="10"

# Git Workflow

Git records changes to the project.

The basic workflow is:

git status
git add .
git commit -m "Describe the changes"
git push
git status

Shows which files have changed.

git add .

Stages all current changes.

Staging means preparing changes for the next commit.

git commit

Creates a saved version of the project.

Example:

git commit -m "Build fortress navigation and sanctuary dashboard"

The message should briefly explain what changed.

git push

Uploads the commits to GitHub.

A simple way to remember the process is:

Change
Review
Stage
Commit
Push

# 14. Common Mistakes
Forgetting to Save

Use:

Ctrl + S

before checking the browser or committing changes.

Forgetting git add

A file must be staged before it can be committed.

git add .
Missing Closing Tags

Incorrect:

<p>Garden Status

Correct:

<p>Garden Status</p>
Incorrect File Paths

The CSS connection currently uses:

<link rel="stylesheet" href="css/garden.css">

This works because:

index.html is in the main project folder
garden.css is inside the css folder
Missing Period Before a Class

Incorrect:

panel {
}

Correct:

.panel {
}
Missing Number Sign Before an ID

Incorrect:

sanctuary {
}

Correct:

#sanctuary {
}
Progress Values That Do Not Match

If the visible bar is 25%:

.progress-fill {
    width: 25%;
}

then the accessibility value should also be 25:

aria-valuenow="25"

# 15. Development Glossary
Attribute

Additional information placed inside an opening HTML tag.

Example:

<a href="#sanctuary">

href is an attribute.

Browser

The program that reads and displays a webpage.

Examples include Chrome, Firefox, Edge, and Safari.

Class

A reusable name given to an HTML element.

Commit

A saved checkpoint in Git.

CSS

The language that styles and arranges HTML.

Element

A complete piece of HTML.

Example:

<h1>Nurgle's Garden</h1>
HTML

The language that creates webpage structure and content.

ID

A unique name given to one HTML element.

Property

A feature changed by CSS.

Example:

color: green;

color is the property.

Repository

The project and its recorded Git history.

Responsive Design

A layout that adapts to different screen sizes.

Selector

The part of a CSS rule that chooses which element to style.

Example:

.panel {
}

.panel is the selector.

Tag

The opening or closing part of an HTML element.

Example:

<h1>
Value

The setting assigned to a CSS property.

Example:

color: green;

green is the value.