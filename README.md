# cognitive-debt-management
Cognitive Debt Management System is a web-based mental wellness platform that helps users identify mental overload, analyze thoughts, visualize stress levels, and receive personalized recovery guidance using interactive assessments and charts.
# Cognitive Debt Manager

A full-stack web-based platform that helps users measure, understand, and reduce their cognitive debt (mental overload caused by stress, procrastination, and overthinking) using assessment, visualization, and personalized recovery planning.

---

## Problem Statement

People today face increasing mental overload due to multitasking, academic pressure, work deadlines, and constant digital exposure.  
This unresolved mental load accumulates as "Cognitive Debt", leading to:

- Reduced focus  
- Anxiety  
- Burnout  
- Poor productivity  

There is no simple, unified system that allows users to measure cognitive debt, understand its causes, and actively work toward recovery.

---

## Solution Overview

Cognitive Debt Manager is a full-stack web application that:

- Allows users to register and log in  
- Conducts a cognitive debt assessment  
- Calculates a Cognitive Debt Score  
- Visualizes category-wise breakdown  
- Stores user data securely in database  
- Generates recovery plans  
- Tracks user progress over time  

---

## Key Features

- User authentication (login system)  
- Cognitive Debt assessment  
- Automatic score calculation  
- Cognitive Debt level classification  
- Category-wise breakdown (fatigue, procrastination, overthinking)  
- Animated progress bars  
- Charts and graphs visualization  
- Recovery plan suggestions  
- Progress tracking  
- Mind analysis using keyword-based stress detection  
- Data persistence using MongoDB  
- Mobile responsive UI  

---

## Tech Stack

### Frontend
- HTML5  
- CSS3  
- JavaScript  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  

### Libraries
- Chart.js  

---

## Folder Structure
---

## How to Run the Project

### 1. Clone Repository
### 2. Install Backend Dependencies
### 3. Start MongoDB

Make sure MongoDB service is running.

### 4. Start Server
### 5. Run Frontend

Open:
in browser.

---

## How It Works

1. User registers / logs in  
2. User completes assessment  
3. Backend stores responses in MongoDB  
4. Score is calculated  
5. Results and charts displayed  
6. Recovery plan generated  
7. Progress saved in database  

---

## Scoring Logic

Each question has values:

- Never = 1  
- Sometimes = 2  
- Often = 3  
- Always = 4  

Total Score Range: 4 – 16  

Classification:

- 4 – 6 → Low Cognitive Debt  
- 7 – 11 → Medium Cognitive Debt  
- 12 – 16 → High Cognitive Debt  

---

## Data Storage

MongoDB stores:

- User credentials  
- Assessment scores  
- Progress history  

---

## Security Considerations

- Passwords can be hashed  
- No sensitive medical data stored  

---

## Limitations

- Basic keyword stress detection  
- Prototype-level security  

---

## Future Enhancements

- AI-powered text analysis  
- Personalized dynamic recovery plans  
- Dark mode  
- PDF report download  
- Mobile app version  

---

## Team Members

- B.Sahasra
- A.Varshini 
- V.Bhavya Sri 
- Ch.Tejaswi
- Ch.Lakshmi chaitanya  

---

## License

This project is developed for hackathon and educational purposes.
