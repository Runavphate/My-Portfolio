document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('login-form');
            const voteForm = document.getElementById('vote-form');
            const results = document.getElementById('results');

            const exampleResults = {
                'BJP': 50,
                'Congress': 30,
                'Other': 20
            };

            loginForm.addEventListener('submit', (event) => {
                event.preventDefault();
                alert('Logged in successfully!');
            });

            voteForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const selectedCandidate = document.getElementById('candidates').value;
                alert(`Voted for ${selectedCandidate}!`);
            });

            for (const [candidate, votes] of Object.entries(exampleResults)) {
                const listItem = document.createElement('li');
                listItem.textContent = `${candidate}: ${votes} votes`;
                results.appendChild(listItem);
            }
        });