const upvoteBtn = document.getElementById('upvoteBtn');
const downvoteBtn = document.getElementById('downvoteBtn');
const upvoteCount = document.getElementById('upvoteCount');
const downvoteCount = document.getElementById('downvoteCount');
const voteTotal = document.getElementById('voteTotal');

let upvotes = 0;
let downvotes = 0;

function updateVotes() {
  const totalScore = upvotes - downvotes;
  upvoteCount.textContent = upvotes;
  downvoteCount.textContent = downvotes;
  voteTotal.textContent = totalScore;
}

upvoteBtn.addEventListener('click', () => {
  upvotes++;
  updateVotes();
});

downvoteBtn.addEventListener('click', () => {
  downvotes++;
  updateVotes();
});
