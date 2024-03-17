const app = Vue.createApp({
  data() {
    return {
      guess: '',
      message: 'Start guessing',
      numberToGuess: null,
    }
  },
  methods: {
    generateNumber() {
      // Generate a random number between 1 and 100
      this.numberToGuess = Math.floor(Math.random() * 100) + 1;
      // Reset input and message
      this.guess = '';
      this.message = 'Start guessing';
    },
    checkGuess() {
      // Check user's guess and update message
      if (this.guess < this.numberToGuess) {
        this.message = 'Guess higher';
      } else if (this.guess > this.numberToGuess) {
        this.message = 'Guess lower';
      } else {
        this.message = 'You got it!';
      }
    },
    giveUp() {
      // Show answer and update message
      this.message = `The answer is ${this.numberToGuess}`;
    },
    startOver() {
      // Reset input, message and number to guess
      this.guess = '';
      this.message = 'Start guessing';
      this.numberToGuess = null;
      this.generateNumber(); // Call generateNumber 
    }
  },
  mounted() {
    this.generateNumber(); // Call generateNumber when game starts
  }
})

app.mount('#app');