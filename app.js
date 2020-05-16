// console.log($);

$(() => {

  // $('button').on('click', (event) => {
  //   event.preventDefault();




    $.ajax({
      url: 'https://opentdb.com/api.php?amount=10&type=multiple'
    }).then(
      (data) => {
        // console.log(data.results);

        const $openBtn = $('#openModal');
        const $modal = $('.modal');
        const $closeBtn = $('#close');

        const openModal = () => {
          $modal.css('display', 'block');
          for (let i=0; i<data.results.length; i++) {
            const $div = $('<div>').addClass(`question`).appendTo('.modal-textbook')
            const $h3 = $('<h3>').text(`Category: ${data.results[i].category}`).appendTo($div)
            const $h4 = $('<h4>').text(`Difficulty: ${data.results[i].difficulty}`).appendTo($div)
            const $h2 = $('<h2>').text(`Question: ${data.results[i].question}`).appendTo($div)
            const $ul = $('<ul>').appendTo($div)
            const $li = $('<li>').text(data.results[i].incorrect_answers).appendTo($ul);
            const $li2 = $('<li>').text(data.results[i].correct_answer).appendTo($ul)
          }
        }

        const closeModal = () => {
          $modal.css('display', 'none');
        }

        $openBtn.on('click', openModal);
        $closeBtn.on('click', closeModal);

        // for (let i=0; i<data.results.length; i++) {
        //   const $div = $('<div>').addClass(`question`).appendTo('.modal-textbook')
        //   const $h3 = $('<h3>').text(`Category: ${data.results[i].category}`).appendTo($div)
        //   const $h4 = $('<h4>').text(`Difficulty: ${data.results[i].difficulty}`).appendTo($div)
        //   const $h2 = $('<h2>').text(`Question: ${data.results[i].question}`).appendTo($div)
        //   const $ul = $('<ul>').appendTo($div)
        //   const $li = $('<li>').text(data.results[i].incorrect_answers).appendTo($ul);
        //   const $li2 = $('<li>').text(data.results[i].correct_answer).appendTo($ul)
        // }

      },
      (error) => {
        console.error(error);
      }
    )
// })




  $('img').on('click', (event) => {
    event.preventDefault();

    let $category = $(event.target).attr('id')
    console.log($category);

    $.ajax({
      url: `https://opentdb.com/api.php?amount=10&category=${$category}`
    }).then(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    )
  })








}) // END OF ON LOAD
