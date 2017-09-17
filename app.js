new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function () {
      var max = 10;
      var min = 3;
      var damage = this.calculateDamage(max, min)
      this.monsterHealth -= damage;

      if (this.checkWin()) return;

      max = 12;
      min = 5;
      var damage = this.calculateDamage(max, min)
      this.playerHealth -= damage;

      this.checkWin()
    },
    specialAttack: function () {

    },
    heal: function () {

    },
    giveUp: function () {

    },
    calculateDamage: function (max, min) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm('You woon, new game?'))
          this.startGame();
        else
          this.gameIsRunning = false;
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You woon, new game?'))
          this.startGame();
        else
          this.gameIsRunning = false;
        return true;
      }
      return false;
    }
  }
});