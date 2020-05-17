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
            // const $li = $('<li>').text(data.results[i].incorrect_answers).appendTo($ul);
            const $answer = $('<button>').text('Click to show answer').appendTo($div)
            $answer.on('click', (event) => {
              $(event.currentTarget).text(data.results[i].correct_answer).appendTo($div).off();
            })

          }
        }

        const closeModal = (event) => {
          $modal.css('display', 'none');
          $('body').css('background-color', 'white');
          window.location.reload();
        }

        $openBtn.on('click', openModal);
        $closeBtn.on('click', closeModal);
      },
      (error) => {
        console.error(error);
      }
    )


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

        const openModal = () => {
          $modal.css('display', 'block');
          $('body').css('background-color', "rgb(0,0,0,0.8)");
          $('a').css('color', 'white');
          for (let i=0; i<data.results.length; i++) {
            const $div = $('<div>').addClass(`question`).appendTo('.modal')
            // const $question = $('<h3>').text(`True or False No. ${i+=1}`).appendTo($div)
            const $h3 = $('<h3>').text(`Category: ${data.results[i].category}`).appendTo($div)
            const $h4 = $('<h4>').text(`Difficulty: ${data.results[i].difficulty}`).appendTo($div)
            // attempting to replace &quot; with ""
            const $h2 = $('<h2>').text(`True or False: ${data.results[i].question}`).appendTo($div)
            // const $ul = $('<ul>').appendTo($div)
            // const $li = $('<li>').text(data.results[i].incorrect_answers).appendTo($ul);
            const $answer = $('<button>').text('Click to show answer').appendTo($div)
            $answer.on('click', (event) => {
              $(event.currentTarget).text(data.results[i].correct_answer).appendTo($div).off();
            })
          }
        }

        const closeModal = (event) => {
          $modal.css('display', 'none');
          $('body').css('background-color', 'white');
          window.location.reload();
        }

        openModal();
        // $openBtn.on('click', openModal);
        $closeBtn.on('click', closeModal);
      },
      (error) => {
        console.error(error);
      }
    )
  })








}) // END OF ON LOAD
