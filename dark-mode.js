// Get the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode is enabled in localStorage
const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

// Apply dark mode if it's already enabled
if (darkModeEnabled) {
  document.body.classList.add('dark-mode');
  darkModeToggle.textContent = 'Switch to Light Mode';  // Change button text
} else {
  darkModeToggle.textContent = 'Switch to Dark Mode';
}

// Event listener for toggling dark mode on button click
darkModeToggle.addEventListener('click', () => {
  // Toggle the dark mode class
  document.body.classList.toggle('dark-mode');

  // Save the current state in localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');

  // Update the button text based on the mode
  darkModeToggle.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});