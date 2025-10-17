const timeElement = document.querySelector('[data-testid="test-user-time"]');

// Get the accurate time at render
const renderTime = Date.now();

// Format it to a readable string
const formatted = new Date(renderTime).toLocaleString();
git
// Show both in the element
timeElement.textContent = `${renderTime} ms (${formatted})`;
