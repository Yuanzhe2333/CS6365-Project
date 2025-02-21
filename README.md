# Healthy Meal Planning App with Grocery Ad Integration

## 📌 Overview
Healthy eating is a growing concern for individuals and families, especially given the rising costs of nutritious food options. Our application aims to bridge the gap between affordability and nutrition by integrating grocery store discounts with AI-powered meal planning. By leveraging **web scraping** and **computer vision**, the app extracts weekly grocery ads and suggests budget-friendly, healthy meals tailored to user preferences.

## ✨ Features
- 🛒 **Grocery Discount Scraper**: Extracts weekly sales and discounts from grocery stores.
- 📸 **Computer Vision Integration**: Uses OCR to process non-text-based grocery ads.
- 🍽 **Smart Meal Planning Engine**: Recommends affordable, nutritious meals based on real-time discounts.
- 📱 **User-Friendly Mobile Application**: Allows users to customize diets, view meal plans, and generate shopping lists.
- 💰 **Cost-Saving Insights**: Displays estimated meal costs and potential savings.

## 🔧 System Architecture
The project consists of four main components:

### 1️⃣ Web Scraper Module
- Scrapes weekly grocery store ads from publicly available sources.
- Extracts item names, prices, and discount data.
- Stores structured data in a database for meal plan generation.

### 2️⃣ Computer Vision Module
- Uses **Optical Character Recognition (OCR)** to analyze images and non-text grocery ads.
- Converts promotional images into structured ingredient lists.
- Ensures high accuracy in product name and price extraction.

### 3️⃣ Meal Planning Engine
- Generates personalized meal plans based on dietary preferences and restrictions.
- Matches meal ingredients with grocery store discounts.
- Calculates estimated costs and savings for each meal.

### 4️⃣ Mobile Application
- **React Native**-based UI for an intuitive user experience.
- Interactive grocery list with cost breakdowns and savings insights.
- Ability to save favorite recipes and plan meals for the week.

## 🏗 Technology Stack
| Component         | Technology Used |
|------------------|----------------|
| Frontend        | React Native    |
| Backend        | Node.js + Express.js |
| Database        | Firebase / PostgreSQL |
| Web Scraping   | Python (BeautifulSoup/Scrapy) |
| Computer Vision | OpenCV, Tesseract OCR |

## 📅 Development Timeline
| Week | Task |
|------|------|
| 1    | Research and finalize tech stack |
| 2    | Design UI mockups and wireframe |
| 3-4  | Develop frontend structure, implement web scraping module |
| 5    | Integrate grocery ad data into database |
| 6-7  | Develop and refine computer vision module |
| 8    | Connect meal planning engine to grocery ad data |
| 9-10 | Finalize UI/UX and integrate all components |
| 11   | Testing and debugging |
| 12   | User testing and improvements |
| 13   | Final demo and project submission |

## 🏆 Team Roles
| Role                 | Responsibilities |
|----------------------|----------------|
| Frontend Developer | Implements React Native UI |
| Backend Developer | Develops APIs, manages database |
| Computer Vision Specialist | Implements OCR-based grocery ad processing |
| Project Manager | Coordinates tasks, manages deadlines |

## 📚 Learning Outcomes
This project enhances skills in:
- **Web Scraping** (extracting structured data from websites)
- **Computer Vision** (OCR-based text extraction)
- **Full-Stack Development** (React Native, Node.js, Express.js)
- **Database Management** (Firebase/PostgreSQL)
- **UX/UI Design** (developing a seamless user experience)

## 📌 Collaboration Tools
- **Version Control**: GitHub (branches, pull requests, CI/CD workflows)
- **Task Management**: Trello/Notion (Kanban boards, to-do lists, sprint planning)
- **Communication**: Slack/Discord (real-time messaging and discussions)
- **Documentation**: Google Docs (real-time collaboration)

## 🚀 Conclusion
The **Healthy Meal Planning App** integrates AI-driven meal planning with grocery store discounts, enabling users to eat healthier while saving money. Our approach leverages **web scraping**, **computer vision**, and **full-stack development** to create a practical and user-friendly solution. Future enhancements may include retailer collaborations and expanded dietary features to improve functionality and user experience.

Stay tuned for updates and contributions! 🎯

