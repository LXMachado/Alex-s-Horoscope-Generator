function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function generateRandomWisdom() {
  let wisdom = [];
  for (let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length);
    switch (prop) {
      case 'signInfo':
        wisdom.push(`If your sign is ${collectiveWisdom[prop][optionIdx]}`);
        break;
      case 'fortuneOutput':
        wisdom.push(`You are having ${collectiveWisdom[prop][optionIdx]}.`);
        break;
      case 'advice':
        wisdom.push(`You should ${collectiveWisdom[prop][optionIdx]}.`);
        break;
      default:
        wisdom.push('There is not enough info.');
    }
  }
  return wisdom.join('\n');
}

document.addEventListener('DOMContentLoaded', function() {
  const wisdomButton = document.querySelector('#wisdomButton');
  const wisdomOutput = document.querySelector('#wisdom');

  wisdomButton.addEventListener('click', updateWisdom);

  function updateWisdom() {
    const formatted = generateRandomWisdom();
    wisdomOutput.textContent = formatted;
  }

  // Initial wisdom display
  updateWisdom();
});

const collectiveWisdom = {
  signInfo: ['Cancer', 'Aquarius', 'Capricorn', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagitarius'],
  fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck', 'diarrhea'],
  advice: ['pray, something sinister is about to happen', 'Run to the nearest church','summon your guard angel', 'trust no one', 'eat pizza at the cemetery', 'beware of strangers', 'go to the nearest church', 'do not trust your friends']
};
  
