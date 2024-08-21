// auth.js

// Initialize Netlify Identity
netlifyIdentity.init();

// Function to check if the user is logged in
function checkUserLoggedIn() {
  const user = netlifyIdentity.currentUser();
  if (!user) {
    // Redirect to login page if not logged in
    window.location.href = 'https://staff.karchurch.org/'; // Adjust to your login page URL
  }
}

// Check if user is logged in when the page loads
document.addEventListener('DOMContentLoaded', checkUserLoggedIn);

// Handle login and logout
netlifyIdentity.on('login', user => {
  console.log("User logged in:", user);
  // Redirect to a default page or the originally requested page
  window.location.href = 'https://staff.karchurch.org/games/games/games/games/games/'; // Adjust to your default page URL
});

netlifyIdentity.on('logout', () => {
  // Redirect to login page after logout
  window.location.href = 'https://staff.karchurch.org/'; // Adjust to your login page URL
});
