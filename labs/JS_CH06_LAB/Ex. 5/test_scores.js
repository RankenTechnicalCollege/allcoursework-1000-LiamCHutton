document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const addToArrayButton = document.getElementById('addToArray');
  const displayResultsButton = document.getElementById('displayResults');
  const displayScoresButton = document.getElementById('displayScores');

  const scoresArray = [];

  addToArrayButton.addEventListener('click', function () {
    const name = nameInput.value;
    const score = parseInt(scoreInput.value, 10);

    let isValid = true;
    document.querySelector('.nameSpan').textContent = "*";
    document.querySelector('.scoreSpan').textContent = "*";

    if (!name) {
      document.querySelector('.nameSpan').textContent = "Please enter a name.";
      isValid = false;
    }
    
    if (isNaN(score)) {
      document.querySelector('.scoreSpan').textContent = "Score must be between 0 and 100.";
      isValid = false;
    }

    if (isValid) {
      const scoreObject = {
        name: name,
        score: score
      };

      scoresArray.push(scoreObject);

      nameInput.value = '';
      scoreInput.value = '';
    }
  });

  displayResultsButton.addEventListener('click', function () {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    if (scoresArray.length > 0) {
      const totalScore = scoresArray.reduce((sum, scoreObject) => sum + scoreObject.score, 0);
      const averageScore = totalScore / scoresArray.length;

      const highestScorePerson = scoresArray.reduce((max, scoreObject) => {
        return scoreObject.score > max.score ? scoreObject : max;
      });

      resultsContainer.innerHTML = `
        <h3>Results</h3>
        <p>Average score = ${averageScore}<br>
        The highest score is: ${highestScorePerson.name} with a score of ${highestScorePerson.score}</p>
      `;
    } else {
      resultsContainer.innerHTML = '';
    }
  });

  displayScoresButton.addEventListener('click', function () {
    if (scoresArray.length > 0) {
      let scoresList = '<h3>Scores</h3><ul>';
    scoresArray.forEach(scoreObject => {
      scoresList += `<li><span class="scoreName">${scoreObject.name}</span><span class="scoreObject">${scoreObject.score}</span></li>`;
    });
    scoresList += '</ul>';
  
      scoresContainer.innerHTML = scoresList;
    } 
    else {
      scoresContainer.innerHTML = '';
    }
  });
});
