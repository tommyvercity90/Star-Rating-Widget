# ⭐ Star Rating Widget

An interactive and responsive **Star Rating Widget** built using **HTML, CSS, and JavaScript**.

Users can hover over the stars to preview a rating and click a star to select a rating from **1 to 5**. The selected rating is stored in JavaScript state and displayed dynamically.

---

## 📌 Features

* ⭐ 5 clickable stars
* 🖱️ Hover preview effect
* ✅ Select a rating from 1 to 5
* 💾 Selected rating stored in JavaScript state
* 🔄 Dynamic star filling using `classList`
* 📊 Displays the current selected rating
* 📱 Responsive and simple UI
* 🎨 Clean and minimal design

---

## 🎯 Objective

The main objective of this project is to practice:

* DOM event handling
* `data-*` attributes
* Dynamic class toggling
* JavaScript state management
* Mouse events
* DOM manipulation
* Separating hover state from selected state

---

## 🛠️ Technologies Used

| Technology | Purpose                           |
| ---------- | --------------------------------- |
| HTML5      | Structure of the widget           |
| CSS3       | Styling and responsive design     |
| JavaScript | Rating logic and DOM interactions |

---

## 📂 Project Structure

```text
star-rating-widget/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/star-rating-widget.git
```

### 2. Navigate to the Project

```bash
cd star-rating-widget
```

### 3. Open the Project

Open `index.html` directly in your browser.

No installation or external dependencies are required.

---

## ⭐ How It Works

The widget contains five stars:

```html
<span class="star" data-value="1">★</span>
<span class="star" data-value="2">★</span>
<span class="star" data-value="3">★</span>
<span class="star" data-value="4">★</span>
<span class="star" data-value="5">★</span>
```

Each star has a `data-value` attribute that represents its rating.

For example:

```text
Star 1 → data-value="1"
Star 2 → data-value="2"
Star 3 → data-value="3"
Star 4 → data-value="4"
Star 5 → data-value="5"
```

JavaScript reads this value using:

```javascript
star.dataset.value
```

---

## 🧠 Rating State

The project keeps the selected rating separately from the temporary hover rating.

```javascript
let selectedRating = 0;
let hoverRating = 0;
```

### `selectedRating`

Stores the rating that the user actually clicked.

### `hoverRating`

Stores the rating currently being previewed while the mouse is over the stars.

This separation prevents the hover effect from accidentally changing the user's selected rating.

---

## 🖱️ Hover Preview

When the user moves the mouse over a star:

```javascript
star.addEventListener("mouseenter", () => {
    hoverRating = Number(star.dataset.value);
    updateStars(hoverRating);
});
```

The stars up to the hovered star become filled.

For example:

```text
Hover over ⭐⭐⭐

⭐ ⭐ ⭐ ☆ ☆
```

The selected rating is not changed during this process.

---

## 🖱️ Selecting a Rating

When the user clicks a star:

```javascript
star.addEventListener("click", () => {
    selectedRating = Number(star.dataset.value);

    ratingText.textContent =
        `You rated us ${selectedRating} out of 5 ⭐`;

    updateStars(selectedRating);
});
```

The clicked star's value becomes the new `selectedRating`.

For example, clicking the fourth star results in:

```text
⭐⭐⭐⭐☆
```

And the text changes to:

```text
You rated us 4 out of 5 ⭐
```

---

## 🎨 Dynamic Class Toggling

The `filled` class controls whether a star appears selected.

```javascript
star.classList.add("filled");
```

removes the empty appearance and fills the star.

When the star should not be filled:

```javascript
star.classList.remove("filled");
```

The CSS controls the appearance:

```css
.star {
    color: #ccc;
}

.star.filled {
    color: gold;
}
```

---

## 🔄 Updating the Stars

The `updateStars()` function handles the visual state of all five stars.

```javascript
function updateStars(rating) {
    stars.forEach((star) => {
        const value = Number(star.dataset.value);

        if (value <= rating) {
            star.classList.add("filled");
        } else {
            star.classList.remove("filled");
        }
    });
}
```

If the rating is `3`:

```text
⭐⭐⭐☆☆
```

If the rating is `5`:

```text
⭐⭐⭐⭐⭐
```

---

## 🖱️ Mouse Leave Behavior

When the mouse leaves the rating area:

```javascript
document.getElementById("stars").addEventListener("mouseleave", () => {
    hoverRating = 0;
    updateStars(selectedRating);
});
```

The widget returns to the previously selected rating.

This is important because the hover preview should not permanently change the selected rating.

---

## 📋 Deliverables

* [x] 5 clickable stars
* [x] Hover preview effect
* [x] Selected rating stored in state
* [x] Current rating displayed
* [x] Dynamic class toggling
* [x] `data-*` attributes
* [x] Separate HTML, CSS, and JavaScript files

---

## 📚 Concepts Practiced

### HTML

* Semantic structure
* `data-*` attributes
* External CSS and JavaScript files

### CSS

* Flexbox
* Transitions
* Hover effects
* Dynamic classes
* Responsive layout

### JavaScript

* `querySelectorAll()`
* `getElementById()`
* `addEventListener()`
* `dataset`
* `Number()`
* `classList.add()`
* `classList.remove()`
* `forEach()`
* State management

---

## 🔮 Future Improvements

Some features that could be added later:

* 💾 Save the rating using `localStorage`
* 📊 Display rating statistics
* 🔢 Show the numerical rating
* 🔄 Add a reset rating button
* 📱 Improve mobile interactions
* ⭐ Support half-star ratings
* 🎨 Add different themes
* 🔔 Show a confirmation message after rating

---
