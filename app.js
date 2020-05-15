// console.log($);

$(() => {

  $('form').on('click', (event) => {
    event.preventDefault();


    $.ajax({
      url: 'https://opentdb.com/api.php?amount=10'
    }).then(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    )
  })




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
