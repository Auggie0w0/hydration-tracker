/**
 * Hydration Tracker Application
 * 
 * This JavaScript code was written independently during the AP CSP Create PT.
 * General syntax support and feedback on logic structure was provided via ChatGPT,
 * but no specific code or algorithms were copied or externally authored.
 * 
 * Features:
 * - Daily water intake tracking
 * - Goal setting and management
 * - Historical log viewing
 * - Multi-screen navigation
 * - Input validation and user feedback
 */

// ==========================
// VARIABLES
// ==========================

var hydrationLog = []; // list of daily hydration entries
var currentGoal = 2.0; // default goal in liters
var goalUnits = 20; // goal in slider units (1L = 10 units)
var currentDate = new Date(); // current date for daily tracking
var totalUnitsToday = 0; // intake logged for current day
var defaultPlaceholder = "___ Liters"; // placeholder for text input

// ==========================
// INITIALIZE SCREEN1
// ==========================

// Resets the tracker when screen1 loads
onEvent("screen1", "screenLoad", function() {
  resetDay();
});

// ==========================
// SUBMIT WATER INTAKE
// ==========================

// User submits input (in liters), converted to slider units
onEvent("submit-btn", "click", function() {
  var intakeLiters = getNumber("input");
  if (intakeLiters > 0) {
    var intakeUnits = intakeLiters * 10;
    totalUnitsToday += intakeUnits;
    var sliderDisplay = Math.min(totalUnitsToday, goalUnits);
    setNumber("slider", sliderDisplay);
    setText("input", "");
  } else {
    // If invalid, give feedback via placeholder
    setProperty("input", "placeholder", "Enter a number like 0.5 or 1.0");
  }
});

// ==========================
// PREVENT MANUAL SLIDER DRAG
// ==========================

// Overrides user interaction with slider, making it display-only
onEvent("slider", "input", function() {
  setNumber("slider", Math.min(totalUnitsToday, goalUnits));
});

// ==========================
// NEXT DAY BUTTON
// ==========================

// Stores current day, moves to next, resets values
onEvent("next-btn", "click", function() {
  logToday();
  incrementDate();
  resetDay();
});

// ==========================
// GOAL SETTING SCREEN (screen4)
// ==========================

// Updates selected goal label as slider is adjusted
onEvent("setgoal-slider", "input", function() {
  var sliderVal = getNumber("setgoal-slider");
  var liters = sliderVal / 10;
  setText("goalset-lbl", "Selected Goal: " + liters.toFixed(1) + " L");
  currentGoal = liters;
  goalUnits = sliderVal;
});

// Confirm goal, disallow setting goal lower than already logged
onEvent("confirm-btn", "click", function() {
  if (totalUnitsToday > 0 && goalUnits < totalUnitsToday) {
    showGoalMessage("You can't lower the goal below what you've already logged today.");
  } else {
    setText("goal-lbl", "Goal: " + currentGoal.toFixed(1) + " Liters");
    setScreen("screen1");
    setProperty("slider", "max", goalUnits);
    setNumber("slider", Math.min(totalUnitsToday, goalUnits));
    showGoalMessage("New goal set to " + currentGoal.toFixed(1) + " L!");
  }
});

// ==========================
// NAVIGATION BUTTONS
// ==========================

// Button navigation across the app screens
onEvent("guide-btn", "click", function() {
  setScreen("screen2");
});

onEvent("log-btn", "click", function() {
  updateLogDisplay();
  setScreen("screen3");
});

onEvent("goal-btn", "click", function() {
  setScreen("screen4");
});

onEvent("return1-btn", "click", function() {
  setScreen("screen1");
});

onEvent("return2-btn", "click", function() {
  setScreen("screen1");
});

onEvent("return3-btn", "click", function() {
  setScreen("screen1");
});

// ==========================
// RESET FUNCTION
// ==========================

// Resets values and labels for a new day
function resetDay() {
  totalUnitsToday = 0;
  setNumber("slider", 0);
  setProperty("slider", "max", goalUnits);
  setText("goal-lbl", "Goal: " + currentGoal.toFixed(1) + " Liters");
  setProperty("input", "placeholder", defaultPlaceholder);
  hideElement("goal-msg");
}

// ==========================
// LOGGING FUNCTION
// ==========================

// Appends current day intake and goal to hydration log
function logToday() {
  var dateStr = currentDate.toDateString();
  var litersLogged = totalUnitsToday / 10;
  var logEntry = dateStr + " — " + litersLogged.toFixed(1) + " L / Goal: " + currentGoal.toFixed(1) + " L";
  appendItem(hydrationLog, logEntry);
}

// ==========================
// DATE INCREMENT FUNCTION
// ==========================

// Moves the currentDate forward by one day
function incrementDate() {
  currentDate.setDate(currentDate.getDate() + 1);
}

// ==========================
// UPDATE LOG DISPLAY
// ==========================

// Displays the full hydration log and checks for goal tagging
function updateLogDisplay() {
  var logText = "";
  for (var i = 0; i < hydrationLog.length; i++) {
    logText += hydrationLog[i] + "\n";
  }
  setText("log-text", logText);
  checkLogsForGoal(hydrationLog);
}

// ==========================
// FUNCTION WITH PARAMETER, LOOP, IF/ELSE
// ==========================

// Checks if each entry in the log includes a goal
function checkLogsForGoal(logList) {
  for (var i = 0; i < logList.length; i++) {
    if (logList[i].includes("Goal")) {
      console.log("Goal entry found in: " + logList[i]);
    } else {
      console.log("Goal missing in: " + logList[i]);
    }
  }
}

// ==========================
// SHOW GOAL MESSAGE (TEMPORARY DISPLAY)
// ==========================

// Displays feedback near the goal controls
function showGoalMessage(msg) {
  setText("goal-msg", msg);
  showElement("goal-msg");
}

// ==========================
// CLICK ANYWHERE TO HIDE GOAL MESSAGE
// ==========================

// Clears message when user clicks or types
onEvent("screen1", "click", function() {
  hideElement("goal-msg");
});

onEvent("screen1", "keydown", function() {
  hideElement("goal-msg");
}); 