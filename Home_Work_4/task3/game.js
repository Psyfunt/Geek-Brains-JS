let game = {
   /**
    * Запускает игру.
    */
   run() {
      for (let x = 0; x < rounds.length; x++) {
         const question = `
         ${rounds[x].question}
  
        Варианты ответа:
          ${this.getOptions(rounds[x])}
      `;
         let userAnswer = prompt(question);
         if (userAnswer === null) {
            console.log("Игра окончена.");
            return;
         } else if (rounds[x].rightAnswer.includes(userAnswer)) {
            player.score++;
         }
      }
      alert(`Ваш счет: ${player.score}`);
      if (confirm("Хотите повторить игру?")) {
         this.run();
      } else {
         console.log('До новых встречь!')
      }

   },
   getOptions(question) {
      let options = '';
      for (let i = 0; i < question.answerOptions.length; i++) {
         options += `${i + 1}. ${question.answerOptions[i]}\n`;
      }
      return options;
   },

   // Этот метод выполняется при открытии страницы.
   init() {
      console.log("Поиграем в игру Кто хочет стать миллионером)))");
      // Отображаем нашу игру.
      console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
   }
};

game.init();