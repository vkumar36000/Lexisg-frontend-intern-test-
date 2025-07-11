# Lexisg-frontend-intern-test

A minimal AI-powered legal assistant interface inspired by [Lexi AI](https://lexi.io), built using **React.js** and **Tailwind CSS**. This project simulates how AI-generated legal responses can be traced back to real legal documents via citation links and PDF previews.

> ⚖️ This submission is for the Lexi Frontend Internship Assignment.

---

## 🛠 Tech Stack

* ⚛️ **React.js** (with Vite)
* 💨 **Tailwind CSS**
* 🧠 **Manual citation matching** (No backend)
* 📄 **PDF viewing** using native `<iframe>`
* 🣨 **React Modal** for PDF popups

---

## ✨ Features

* Ask legal questions in a chat-like interface
* Get simulated AI answers
* View citations linked to source PDFs
* Open cited documents in a modal (popup)
* Simulated instruction to "scroll to Paragraph 7" in the PDF

---

## 📸 Screenshots

> You can include a screenshot of your landing page and chat interface here

```bash
# example placeholder
/screenshots/chat-interface.png
/screenshots/landing-page.png
```

---

## 💬 Supported Queries

The app supports the following six queries:

1. **Motor accident future prospects**

   ```
   In a motor accident claim where the deceased was self-employed and aged 54–55
   years at the time of death, is the claimant entitled to an addition towards future
   prospects in computing compensation under Section 166 of the Motor Vehicles Act,
   1988? If so, how much?
   ```

2. **Married daughter claim**

   ```
   Is a married daughter entitled to claim compensation under the Motor Vehicles Act if her parents die in an accident?
   ```

3. **Future medical expenses**

   ```
   Can future medical expenses be claimed in a motor accident under Section 166?
   ```

4. **Multiplier for age 30**

   ```
   What is the multiplier applicable for a deceased person aged 30 in accident compensation?
   ```

5. **Loss of consortium (children)**

   ```
   Can compensation include loss of consortium for children after a parent's death in a motor accident?
   ```

6. **Interest on compensation**

   ```
   Can interest be awarded on the compensation amount in motor accident claims?
   ```

❌ For any other queries, the app will respond with:

> *"Sorry, I couldn't find an answer for that query."*

---

## 🚀 Getting Started

### Prerequisites

* Node.js ≥ 16
* npm or yarn

### Installation

```bash
git clone https://github.com/your-username/lexisg-frontend-intern-test.git
cd lexisg-frontend-intern-test
npm install
```

### Running the App

```bash
npm run dev
```

App will start at:
👉 `http://localhost:5173`

---

## 📚 How Citation Linking Works

* Each supported query is matched against a list of hardcoded legal cases
* If matched, a pre-defined answer and citation is shown
* Clicking the **📄 citation** opens a modal containing the PDF (via iframe)
* A hint prompts the user to scroll to the correct paragraph (e.g., Paragraph 7)

> PDFs are served from the `public/` folder and loaded directly in the modal.

---

## 📁 Folder Structure

```
lexisg-frontend-intern-test/
├── public/
│   ├── Dani_Devi_v_Pritam_Singh.pdf
│   ├── Compensation_Case_2021.pdf
│   ├── Future_Medical_Expenses.pdf
│   ├── Sarla_Verma_Multiplier.pdf
│   ├── Magma_Consortium_Case.pdf
│   └── Interest_Award_Ruling.pdf
├── src/
│   ├── pages/
│   │   └── ChatInterface.tsx
│   ├── components/
├── tailwind.config.js
└── ...
```

---

## 🌐 Live Demo

> If deployed, include a link here.

```md
[View the deployed site](https://your-site.netlify.app)
```

---

## 🙏 Acknowledgements

* Assignment by [Lexi.sg](https://lexi.io)
* UI inspired by ChatGPT and Lexi AI
* PDFs referenced are simulated for testing only

---

## 📃 License

This project is for educational and assignment purposes only. Not for production use.
