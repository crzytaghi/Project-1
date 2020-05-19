// console.log($);

$(() => {




    $.ajax({
      url: 'https://opentdb.com/api.php?amount=10&type=boolean'
    }).then(
      (data) => {
        // console.log(data.results);

        const $openBtn = $('#openModal');
        const $modal = $('.modal');
        const $closeBtn = $('#close');

        let $win = 0;
        let $lose = 0;

        const openModal = () => {
          $modal.css('display', 'block');
          $('body').css('background-color', "rgb(0,0,0,0.8)");
          $('a').css('color', 'white');
          for (let i=0; i<data.results.length; i++) {
            const $div = $('<div>').addClass(`question`).appendTo('.modal')
            // const $question = $('<h3>').text(`Question No. ${i+=1}`).appendTo($div)
            const $h3 = $('<h3>').text(`Category: ${data.results[i].category}`).appendTo($div)
            const $h4 = $('<h4>').text(`Difficulty: ${data.results[i].difficulty}`).appendTo($div)
            const $h2 = $('<h2>').text(`True or False: ${data.results[i].question}`).appendTo($div)
            const $ul = $('<ul>').appendTo($div)
            const $incorrectAnswer = $('<button>').text(data.results[i].incorrect_answers).addClass(`answer${i}`).appendTo($div);
            const $correctAnswer = $('<button>').text(data.results[i].correct_answer).addClass(`answer${i}`).appendTo($div);
            const $checkAnswer = $(`.answer${i}`)

            // ALLOWS THE USER TO CLICK ON THE ANSWER AND DISPLAYS A MODAL STATING SO
            $checkAnswer.on('click', (event) => {

              if ($win + $lose === 9 && $win > $lose) {
                alert(`Great Job! You got ${$win} correct and ${$lose} wrong, you're not a complete idiot!`)
              } else if ($win + $lose === 9 && $lose > $win) {
                alert(`Boy Bye! You got ${$win} correct and ${$lose} wrong, You Trash!`)
              }


              if ($(event.target).text() === $incorrectAnswer.text()) {
                console.log('Fail');
                $lose++
                console.log($lose);

              } else  {
                console.log('Success');
                $win++
                console.log($win);
              }
            })

            const $showAnswer = $('<button>').text('Show Answer').css('background-color','black').css('color','white').appendTo($div)
            $showAnswer.on('click', (event) => {
              $(event.currentTarget).text(data.results[i].correct_answer).appendTo($div).off();
            })

          }
        }

        const closeModal = (event) => {
          // $modal.css('display', 'none');
          // $('body').css('background-color', 'white');
          window.location.reload();
        }

        $openBtn.on('click', openModal);
        $closeBtn.on('click', closeModal);
      },
      (error) => {
        console.error(error);
      }
    )

    // ADDS A CLICK HANDLER TO EACH IMAGE TO GENERATE THE CATEGORY ID AND ASSIGN IT TO THE URL
  $('img').on('click', (event) => {
    event.preventDefault();

    let $category = $(event.target).attr('id')
    console.log($category);

    $.ajax({
      url: `https://opentdb.com/api.php?amount=10&type=boolean&category=${$category}`,
      type: 'GET'
    }).then(
      (data) => {
        console.log(data);

        const $openBtn = $('img');
        const $modal = $('.modal');
        const $closeBtn = $('#close');

        let $win = 0;
        let $lose = 0;

            // FUNCTION DISPLAYS ALL OF THE QUESTIONS AND ANSWER CHOICES.
        const openModal = () => {
          $modal.css('display', 'block');
          $('body').css('background-color', "rgb(0,0,0,0.8)");
          $('a').css('color', 'white');
          for (let i=0; i<data.results.length; i++) {
            const $div = $('<div>').addClass(`question`).appendTo('.modal')
            // const $question = $('<h3>').text(`True or False No. ${i+=1}`).appendTo($div)
            // const $h3 = $('<h3>').text(`Category: ${data.results[i].category}`).appendTo($div)
            const $h4 = $('<h4>').text(`Difficulty: ${data.results[i].difficulty}`).appendTo($div)
            // attempting to replace &quot; with ""
            const $h2 = $('<h2>').text(`True or False: ${data.results[i].question}`).appendTo($div)

            const $ul = $('<ul>').appendTo($div)
            const $incorrectAnswer = $('<button>').text(data.results[i].incorrect_answers).addClass(`answer${i}`).appendTo($div);
            const $correctAnswer = $('<button>').text(data.results[i].correct_answer).addClass(`answer${i}`).appendTo($div);
            const $checkAnswer = $(`.answer${i}`)


            // ALLOWS THE USER TO CLICK ON THE ANSWER AND DISPLAYS A MODAL STATING SO
            $checkAnswer.on('click', (event) => {

              if ($win + $lose === 9 && $win > $lose) {
                alert(`Great Job! You got ${$win} correct and ${$lose} wrong, you're not a complete idiot!`)
              } else if ($win + $lose === 9 && $lose > $win) {
                alert(`Boy Bye! You got ${$win} correct and ${$lose} wrong, You Trash!`)
              }


              if ($(event.target).text() === $incorrectAnswer.text()) {
                console.log('Fail');
                $lose++
                console.log($lose);

              } else  {
                console.log('Success');
                $win++
                console.log($win);
              }
            })

            const $showAnswer = $('<button>').text('Show Answer').css('background-color', 'black').css('color', 'white').appendTo($div)
            $showAnswer.on('click', (event) => {
              $(event.currentTarget).text(data.results[i].correct_answer).appendTo($div).off();
            })
          }
        }

        // ADDS A CLOSE BUTTON TO THE MODAL TO ALLOW THE USER TO CLOSE OUT THE MODAL AND SELECT A NEW CATEGORY. ALSO REFERESHES THE PAGE SO THAT THE USER CAN SELECT THE SAME CATEGORY BUT IT WILL DISPLAY A NEW SET OF QUESTIONS.
        const closeModal = (event) => {

          window.location.reload();
        }
        // RUNS THE FUNCTION THAT DISPLAYS ALL OF THE QUESTIONS IN A MODAL
        openModal();

        $closeBtn.on('click', closeModal);
      },
      (error) => {
        console.error(error);
      }
    )
  })











}) // END OF ON LOAD
