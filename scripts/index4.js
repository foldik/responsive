'use strict';

( function () {
  const checkButton = document.getElementById( 'check-button' )
  const testResult = document.querySelector( '.test-result' )

  const questions = new Map( [
    [ 'question-1', [ 'ans-11' ] ],
    [ 'question-2', [ 'ans-23' ] ],
    [ 'question-3', [ 'ans-31', 'ans-34' ] ],
    [ 'question-4', [ 'ans-42' ] ]
  ] )

  checkButton.addEventListener( 'click', function () {
    let numberOfGoodAnswers = 0
    Array.from( questions.keys() ).forEach( function ( question ) {
      let form = document.getElementById( question )
      let answers = form.querySelectorAll( '.answer' )
      let goodAnswers = questions.get( question )
      let wellAnswered = true
      answers.forEach( function ( answer ) {
        const input = answer.querySelector( 'input' )
        if ( ( input.checked && !goodAnswers.includes( input.value ) ) ) {
          answer.classList.add( 'bad' )
          wellAnswered = false
        } else if ( !input.checked && goodAnswers.includes( input.value ) ) {
          answer.classList.add( 'good' )
          wellAnswered = false
        } else if ( input.checked ) {
          answer.classList.add( 'good' )
        }
      } )
      if ( wellAnswered ) {
        numberOfGoodAnswers++;
      }
    } )
    testResult.innerText = questions.size + ' / ' + numberOfGoodAnswers
    testResult.classList.add( 'show' )
    console.log( numberOfGoodAnswers );
  } )
}() )
