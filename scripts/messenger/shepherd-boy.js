'use strict';

( function () {

  const story = [

    {
      duration: 15,
      content: 'There was once upon a time a shepherd boy whose fame spread far and wide because of the wise answers which he gave to every question.'
    },

    {
      duration: 13,
      content: 'The king of the country heard of it likewise, but did not believe it, and sent for the boy.'
    },

    {
      duration: 17,
      content: 'Then he said to him, if you can give me an answer to three questions which I will ask you, I will look on you as my own child, and you shall dwell with me in my royal palace.'
    },

    {
      duration: 9,
      content: 'The boy said, what are the three questions.'
    },

    {
      duration: 11,
      content: 'The king said, the first is, how many drops of water are there in the ocean.'
    },

    {
      duration: 21,
      content: 'The shepherd boy answered, lord king, if you will have all the rivers on earth dammed up so that not a single drop runs from them into the sea until I have counted it, I will tell you how many drops there are in the sea.'
    },

    {
      duration: 12,
      content: 'The king said, the next question is, how many stars are there in the sky.'
    },

    {
      duration: 23,
      content: 'The shepherd boy said, give me a great sheet of white paper, and then he made so many fine points on it with a pen that they could scarcely be seen, and it was all but impossible to count them, any one who looked at them would have lost his sight.'
    },

    {
      duration: 12,
      content: 'Then he said, there are as many stars in the sky as there are points on the paper.'
    },

    {
      duration: 6,
      content: 'Just count them.'
    },

    {
      duration: 7,
      content: 'But no one was able to do it.'
    },

    {
      duration: 13,
      content: 'The king said, the third question is, how many seconds of time are there in eternity.'
    },

    {
      duration: 15,
      content: 'Then said the shepherd boy, in lower pomerania is the diamond mountain, which is two miles high, two miles wide, and two miles deep.'
    },

    {
      duration: 17,
      content: 'Every hundred years a little bird comes and sharpens its beak on it, and when the whole mountain is worn away by this, then the first second of eternity will be over.'
    },

    {
      duration: 17,
      content: 'The king said, you have answered the three questions like a wise man, and shall henceforth dwell with me in my royal palace, and I will regard you as my own child.'
    }
 ]

  const invitation = document.createElement( 'p' )
  invitation.classList.add( 'message' )
  invitation.innerText = 'Let me tell you a story... (Click on them to see the next part)'
  document.querySelector( '.main' ).insertBefore( invitation, document.querySelector( '.main' ).firstChild )

  let sentenceCount = 0;


  function tellTheStory() {
    const newMessage = document.createElement( 'p' )
    newMessage.classList.add( 'message' )
    newMessage.innerText = story[ sentenceCount ].content
    newMessage.addEventListener( 'click', tellTheStory )
    document.querySelector( '.main' ).insertBefore( newMessage, document.querySelector( '.main' ).firstChild )
    sentenceCount++
    if ( sentenceCount >= story.length ) {
      sentenceCount = 0;
    }
  }

  setTimeout( tellTheStory, 5000 )

}() )
