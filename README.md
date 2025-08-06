# 👩‍💻 Employee Manager

A simple employee management app built using **HTML**, **CSS**, and **Vanilla JavaScript**.

## 📌 Features

- ✅ Add employees by entering **Name**, **Profession**, and **Age**
- ⚠️ Shows **error message in red** if any field is empty
- ✅ Shows **success message in green** when employee is added
- 🆔 Auto-generated **unique ID** for each employee
- 🔁 Dynamically displays the list of added employees
- ❌ Each employee has a **Delete** button to remove them
- 📉 Updates the list in real-time when employees are deleted

---

## 📁 Project Structure

All files are separated:

```
project-folder/
├── index.html        # HTML structure
├── style.css         # CSS styling
├── script.js         # JavaScript functionality
└── README.md         # Project overview (this file)
```

---

## 💡 How to Use

1. Open `index.html` in your browser
2. Fill in Name, Profession, and Age
3. Click the **Add Employee** button
4. Check the "Added Employees" section
5. Use the **Delete** button to remove any employee

---

## 📸 UI Overview

- 3 input fields: `Name`, `Profession`, `Age`
- Add button: `Add Employee`
- Message area for success/error
- Dynamic section: `Added Employees`
- Delete button for each added employee

---

## 🔧 Tech Stack

- HTML
- CSS
- JavaScript (ES6+)

---

## 🧪 Validation Logic

- **Empty input** → ❌ Error message in red
- **Valid input** → ✅ Success message in green
- Auto-incremented ID using a counter variable
- Employees stored in an **array of objects**:

```javascript
[
  { id: 1, name: "Jack", profession: "Developer", age: 20 },
  { id: 2, name: "John", profession: "Admin", age: 28 }
]
```

---

## 🗑 Delete Function

Each employee has a **Delete** button. On click:
- The specific object is removed from the array
- The employee card is removed from the DOM

---

## 🙌 Author

Developed by **Jeba Parvin** 💻  
Learning Frontend Development at **AccioJob** 🚀

---

## 📎 License

This project is open-source and free to use.
