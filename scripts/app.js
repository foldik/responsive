'use strict';

document.querySelector( '.header' )
  .addEventListener( 'click', function () {
    document.querySelector( '.sidebar ul' ).classList.toggle( 'show' )
  } )
