document.querySelectorAll('.candidate img').forEach(img => {
    img.addEventListener('click', function() {
        const candidateDiv = this.parentElement;
        const votesSpan = candidateDiv.querySelector('.votes');
        let votes = parseInt(votesSpan.textContent);
        votes++;
        votesSpan.textContent = votes;
        updateBackgroundColors();
    });
});

function updateBackgroundColors() {
    const candidates = document.querySelectorAll('.candidate');
    let maxVotes = 0;

    candidates.forEach(candidate => {
        const votes = parseInt(candidate.querySelector('.votes').textContent);
        if (votes > maxVotes) {
            maxVotes = votes;
        }
    });

    candidates.forEach(candidate => {
        candidate.classList.remove('most-voted');
        const votes = parseInt(candidate.querySelector('.votes').textContent);
        if (votes === maxVotes) {
            candidate.classList.add('most-voted');
        }
    });
}