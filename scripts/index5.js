'use strict';

( function () {
  const randomNumber = function ( upperEnd ) {
    return Math.floor( Math.random() * upperEnd )
  }

  const randomColor = function () {
    return 'rgba(' + randomNumber( 255 ) + ',' + randomNumber( 255 ) + ',' + randomNumber( 255 ) + ', ' + Math.random() + ')'
  }

  const randomPercentage = function () {
    return 2 + Math.floor( Math.random() * 50 ) + '%'
  }

  document.querySelector( '.black' )
    .addEventListener( 'click', function addElements( event ) {
      event.target.classList.remove( 'black' );
      event.target.classList.add( 'grid-4' );
      for ( let i = 0; i < 16; i++ ) {
        const nextElement = document.createElement( 'div' );
        if ( Math.random() > 0.4 ) {
          nextElement.classList.add( 'black' );
          nextElement.addEventListener( 'click', addElements )
        } else {
          nextElement.style.backgroundColor = randomColor()
        }
        event.target.appendChild( nextElement )
      }
      event.target.removeEventListener( 'click', addElements )

    } )
}() )
