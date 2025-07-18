# Hydration Tracker - Version 0
 

A mobile application for tracking daily water intake, built for AP Computer Science Principles Create Performance Task.

## Overview

This hydration tracker application helps users monitor their daily water consumption and set personalized hydration goals. The app features a multi-screen interface with intuitive navigation and comprehensive logging capabilities.

## Features

### Core Functionality
- **Daily Water Intake Tracking**: Log water consumption in liters with real-time progress updates
- **Goal Setting**: Set and adjust daily hydration goals (default: 2.0 liters)
- **Visual Progress**: Slider display showing progress toward daily goal
- **Historical Logging**: View past hydration entries with date and goal information
- **Input Validation**: Ensures valid numeric input with user-friendly error messages

### User Interface
- **Multi-Screen Navigation**: Four screens for different functions
  - Screen 1: Main tracking interface
  - Screen 2: User guide/information
  - Screen 3: Historical log viewer
  - Screen 4: Goal setting interface
- **Responsive Design**: Adapts to user input and provides immediate feedback
- **Goal Protection**: Prevents lowering goals below already logged intake

### Technical Features
- **Event-Driven Architecture**: Uses event handlers for user interactions
- **Data Persistence**: Maintains hydration log across sessions
- **Date Management**: Automatic date progression and daily resets
- **Input Sanitization**: Validates and processes user input safely

## Code Structure

The application is organized into logical sections:

### Variables
- `hydrationLog[]`: Array storing daily hydration entries
- `currentGoal`: Current daily goal in liters
- `goalUnits`: Goal converted to slider units (1L = 10 units)
- `currentDate`: Current tracking date
- `totalUnitsToday`: Today's logged intake

### Event Handlers
- **Screen Management**: Screen loading and navigation events
- **Input Processing**: Submit button and input validation
- **Goal Setting**: Slider interaction and goal confirmation
- **Navigation**: Button clicks for screen transitions

### Core Functions
- `resetDay()`: Initializes new day tracking
- `logToday()`: Records current day's intake
- `incrementDate()`: Advances to next day
- `updateLogDisplay()`: Shows historical data
- `checkLogsForGoal()`: Validates log entries
- `showGoalMessage()`: Displays user feedback

## Technical Requirements

This application was designed for a mobile development platform (likely App Inventor) and uses:
- JavaScript for logic implementation
- Event-driven programming patterns
- Array manipulation and data structures
- Date handling and string formatting
- Input validation and user feedback systems

## Development Notes

- **Independent Development**: All code written independently during AP CSP Create PT
- **AI Assistance**: General syntax support and logic structure feedback provided via ChatGPT
- **Original Work**: No specific code or algorithms were copied or externally authored
- **Educational Purpose**: Demonstrates understanding of programming concepts required for AP CSP

## File Structure

```
hydration-tracker/
├── README.md              # Project documentation
└── src/
    └── hydration-tracker.js  # Main application code
```

## Usage

1. **Start Tracking**: Open the app to begin daily hydration tracking
2. **Log Intake**: Enter water consumption in liters and submit
3. **Monitor Progress**: View real-time progress on the slider
4. **Set Goals**: Navigate to goal screen to adjust daily targets
5. **View History**: Check past entries in the log viewer
6. **Next Day**: Use "Next Day" button to advance and reset tracking

## Acknowledgments

This project was developed as part of the AP Computer Science Principles Create Performance Task. The code demonstrates proficiency in programming concepts including variables, functions, loops, conditionals, and event handling.
