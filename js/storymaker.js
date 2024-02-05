// Assignment 1 | COMP1073 Client-Side JavaScript

document.addEventListener("DOMContentLoaded", function () {
/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById("choosenNoun1");
const chosenVerb = document.getElementById("choosenVerb");
const chosenAdjective = document.getElementById("choosenAdjective");
const chosenNoun2 = document.getElementById("choosenNoun2");
const chosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyParagraph = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1Array = ["The Turkey", "Mom", "Dad", "The Dog", "My teacher", "The Elephant", "The Cat"];
const verbsArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectivesArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2Array = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settingsArray = ["on the chair", "in my spaghetti", "in my soup", "on the grass", "on the moon", "in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    chosenNoun1.textContent = nouns1Array[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1Array.length;
}

function verb_on_click() {
    chosenVerb.textContent = verbsArray[verbCount];
    verbCount = (verbCount + 1) % verbsArray.length;
}

function adjective_on_click() {
    chosenAdjective.textContent = adjectivesArray[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectivesArray.length;
}

function noun2_on_click() {
    chosenNoun2.textContent = nouns2Array[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2Array.length;
}

function setting_on_click() {
    chosenSetting.textContent = settingsArray[settingCount];
    settingCount = (settingCount + 1) % settingsArray.length;
}

// Concatenate the user story and display
function playback_on_click() {
    const userStory = `${chosenNoun1.textContent} ${chosenVerb.textContent} ${chosenAdjective.textContent} ${chosenNoun2.textContent} ${chosenSetting.textContent}`;
    storyParagraph.textContent = userStory;
}

// Grabbing random element from arrays, concatenate and display
function random_on_click() {
    chosenNoun1.textContent = getRandomElement(nouns1Array);
    chosenVerb.textContent = getRandomElement(verbsArray);
    chosenAdjective.textContent = getRandomElement(adjectivesArray);
    chosenNoun2.textContent = getRandomElement(nouns2Array);
    chosenSetting.textContent = getRandomElement(settingsArray);

    playback_on_click(); // Display the concatenated random story
}

// Function to get a random element from an array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to add student ID on button click
function addStudentId() {
    const studentIdParagraph = document.getElementById("studentId");
    studentIdParagraph.textContent = "Student ID: 200556064";
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);

// Event listener for student ID button
document.getElementById("studentId").addEventListener("click", addStudentId);

// Adding a reset button to reset and allow them to make a new story
function resetStory() {
    chosenNoun1.textContent = "";
    chosenVerb.textContent = "";
    chosenAdjective.textContent = "";
    chosenNoun2.textContent = "";
    chosenSetting.textContent = "";
    storyParagraph.textContent = "";
}

// Event listener for reset button
document.getElementById("reset").addEventListener("click", resetStory);


});