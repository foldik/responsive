'use strict';

( function () {
  const containers = document.querySelectorAll( '.collapsible-code' )

  containers.forEach( function ( container ) {
    let closedStateButton = container.querySelector( '.toggle-button .closed' )
    let openedStateButton = container.querySelector( '.toggle-button .opened' )

    closedStateButton.addEventListener( 'click', function () {
      container.classList.remove( 'closed' )
    } )

    openedStateButton.addEventListener( 'click', function () {
      container.classList.add( 'closed' )
    } )
  } )
}() )
