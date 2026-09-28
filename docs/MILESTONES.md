# 🏆 Milestones

> *"No harvest begins with the final bloom."*

---

## Milestone 001

### 🌿 The Garden Awakens

**Date**

July 30, 2026

**Achievement**

The first JavaScript successfully executed inside the project.

```javascript
console.log("🌿 The Garden awakens...");
```

**Skills Learned**

- Creating JavaScript files
- Linking JavaScript to HTML
- Relative file paths
- Browser Developer Tools
- Console logging

**Why It Matters**

This marks the moment Nurgle's Garden transitioned from a static webpage into an interactive web application.

---

## Milestone 002

### 🌿 The Garden Learns to Listen

**Date**

September 27, 2026

**Achievement**

The first interactive feature in the project. Clicking a chamber in the sidebar moves the active state to the chamber that was chosen.

```javascript
const allLinks = document.querySelectorAll(".navigation-link");

for (const link of allLinks) {
  link.addEventListener("click", function () {
    for (const otherLink of allLinks) {
      otherLink.classList.remove("active");
    }
    link.classList.add("active");
  });
}
```

**Skills Learned**

- Variables with `const`
- Data types: strings, numbers, and booleans
- Functions, parameters, and arguments
- Selecting elements with `querySelectorAll()`
- Looping through a list with `for...of`
- Listening for clicks with `addEventListener()`
- Adding and removing CSS classes with `classList`

**Why It Matters**

This marks the moment Nurgle's Garden began responding to the person using it, instead of only displaying content.