const usersEndpoint = 'https://jsonplaceholder.typicode.com/users';
const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts?userId=';
const tabContainer = document.getElementById('tab-container');
const postsContainer = document.getElementById('posts-container');
//=========================================================================================//
async function fetchUsers() {
    try {
       
        const response = await fetch(usersEndpoint);
        const users = await response.json();

        users.forEach(user => {
            const button = document.createElement('button');
            button.classList.add('tab-button');
            button.textContent = user.name;
            button.addEventListener('click', () => {
                fetch_display(user.id);
            });
            tabContainer.appendChild(button);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

//=========================================================================================//
async function fetch_display(userId) {
    try {
        const response = await fetch(postsEndpoint + userId);
        const posts = await response.json();

        postsContainer.innerHTML = ''; 
        posts.forEach(post => {
            const postElement = document.createElement('p');
            postElement.textContent = post.title;
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

fetchUsers();