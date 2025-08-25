# Alien Fleet Dashboard 👽

A retro-futuristic terminal-style web application for managing and viewing alien fleet data. Built with React and TypeScript for the Generate Fall 2025 Software Engineering Challenge.

## 🚀 Features

- **Alien Fleet List**: View all aliens in a terminal-style table with their basic information
- **Individual Alien Profiles**: Detailed view of each alien's combat statistics
- **Retro Terminal Design**: Green-on-black aesthetic with custom styling
- **Responsive Layout**: Clean grid-based layout that adapts to different screen sizes
- **Real-time Data**: Fetches alien data from the Generate API

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Custom CSS with terminal aesthetic
- **HTTP Client**: Axios
- **Build Tool**: Create React App

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- A Northeastern email address and NUID for API access

## 🔧 Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd alien-fleet-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Register for API access**

You need to register with your Northeastern credentials to get an API key:

4. **Update API configuration**

Add your registration ID to `src/services/alienApi.ts`:
```typescript
const YOUR_REGISTERED_ID = 'your-uuid-here'; // Replace with your actual ID
```

5. **Start the development server**
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 🎮 Usage

### Home Page
- Displays all aliens in the fleet
- Click on any alien row to view their detailed profile
- Green highlighting on ID numbers and ranks

### Profile Page
- Shows alien's profile image (or placeholder)
- Displays combat statistics (ATK, HP, SPD)
- Visual progress bars for each stat
- Navigate back to the list with the back button

## 🎨 Design Features

- **Terminal Aesthetic**: Monospace fonts, green (#00FF00) on black color scheme
- **Bordered Components**: All major sections have green borders
- **Stat Visualization**: Progress bars with segmented display
- **Hover Effects**: Interactive elements respond to user interaction
- **Consistent Spacing**: Clean grid-based layout

## 📄 License

This project is created for educational purposes as part of the Generate Software Engineering Challenge.

## 🙏 Acknowledgments

- Generate NU for providing the challenge and API
- Figma design team for the UI mockups
- The alien fleet for their cooperation in data collection 👽
