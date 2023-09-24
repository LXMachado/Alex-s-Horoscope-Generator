function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

const horoscopeData = {
  Aries: [
    "Today is a day for new beginnings. Take on challenges with confidence.",
    "You might face unexpected opportunities. Embrace change.",
    "Focus on your personal growth and self-improvement today."
  ],
  Taurus: [
    "Stay grounded and practical in your decisions today.",
    "Your patience will be rewarded. Good things are coming your way.",
    "Take some time for relaxation and self-care."
  ],
  Gemini: [
    "Your communication skills are on point today. Connect with others.",
    "Expect some exciting news or unexpected encounters.",
    "Embrace your curiosity and explore new ideas."
  ],
  // Add horoscope messages for other zodiac signs here
  Cancer:[
    "Your nurturing nature shines today. Show your loved ones you care.",
    "Embrace your intuition. Trust your gut feeling.",
    "Create a cozy and harmonious atmosphere at home.",
  ],
  Leo: [
    "Your confidence is at an all-time high. Take on new challenges.",
    "Your charisma is shining today. Use it to your advantage.",
    "Your creativity is at its peak. Take some time to express yourself.",
  ],
  Virgo: [
    "Your analytical skills are on point today. Use them to your advantage.",
    "Your attention to detail is unmatched. Focus on the task at hand.",
    "Your practicality is your strength. Use it to your advantage.",
  ],
  Libra: [
    "Balance is the key to harmony today. Seek equilibrium.",
    "Your diplomacy and charm will resolve conflicts.",
    "Pursue beauty and artistry in your surroundings.",
  ],
  Scorpio: [
    "Deep emotions guide your actions. Trust your instincts.",
    "Transformative energies are at play. Embrace change.",
    "Your intensity and passion are magnetic today.",

  ],
  Sagittarius: [
    "Adventure calls your name. Explore new horizons.",
    "Optimism and enthusiasm light your path today.",
    "Share your wisdom and inspire others."
  ],
  Capricorn: [
    "Your determination leads to success. Stay committed.",
    "Build strong foundations for your goals. Patience is key.",
    "Practicality and responsibility guide your choices.",
  ],
  Aquarius: [
    "Innovate and break free from the ordinary today.",
    "Your humanitarian spirit shines. Support a cause.",
    "Connect with like-minded individuals for inspiration.",
  ],
  Pisces: [
    "Intuition guides you in creative endeavors. Trust it.",
    "Embrace your dreams and imagination. They're powerful.",
    "Compassion and empathy are your strengths today.",
  ],
};

const horoscopeButton = document.querySelector('#horoscopeButton');
const horoscopeOutput = document.querySelector('#horoscope');

function generateHoroscope() {
  const signs = Object.keys(horoscopeData);
  const randomSign = signs[generateRandomNumber(signs.length)];
  const randomMessage = horoscopeData[randomSign][generateRandomNumber(horoscopeData[randomSign].length)];

  const horoscopeText = `Your horoscope for ${randomSign}: "${randomMessage}"`;
  horoscopeOutput.textContent = horoscopeText;
}

horoscopeButton.addEventListener('click', generateHoroscope);
