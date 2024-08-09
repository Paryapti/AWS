function fetchGitHubUser(username) {
    fetch(https://api.github.com/users/${username})
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(data => {
            displayUserProfile(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('User not found or API error');
        });
}
function displayUserProfile(user) {
    const profileContainer = document.getElementById('profileContainer');
    profileContainer.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.login}">
        <div>
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <a href="${user.html_url}" target="_blank">View Profile</a>
        </div>
    `;
}
async function fetchGitHubUser(username) {
    try {
        const response = await fetch(https://api.github.com/users/${username});
        if (!response.ok) {
            throw new Error('User not found');
        }
        const data = await response.json();
        displayUserProfile(data);
    } catch (error) {
        console.error('Error:', error);
        alert('User not found or API error');
    }
}
document.getElementById('fetchButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (username) {
        fetchGitHubUser(username);
    } else {
        alert('Please enter a GitHub username');
    }
});
