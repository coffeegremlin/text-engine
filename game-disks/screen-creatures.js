const screenCreatures = {
  roomId: 'start',
  rooms: [
    {
      name: 'Living Room',
      id: 'start',
      img: `
               
               
           o   o
            \\  |
             \\.|-.
             (\\|  )
    .==================.
    | .--------------. |
    | |--.__.--.__.--| |
    | |--.__.--.__.--| |
    | |--.__.--.__.--| |
    | |--.__.--.__.--| |
    | |--.__.--.__.--| |
    | '--------------'o|
    |     """"""""    o|
    '=================='
      `,
      desc: `You feel the glow of the television washing over you. You haven't yet dared to look directly at the screen.`,
      items: [
        {
          name: ['tv', 'television', 'screen'],
          desc: [
            `You feel something tug at you from the inside of your chest as you look at the screen. You feel an invisible hand pass though your skin as if you were clay and wrap its cold fingers around your lungs. You can’t breathe. 
The screen is filled with so many colors, swirling around in maddening patterns with no rhyme or reason. With each second you stare, it becomes harder and harder to look away. You swear you can see another pair of eyes looking back at you.`,
            `The colors begin to pour out of the screen until they envelop you like a cocoon. You feel the colors press against you, wrapping themselves around you like a second skin. The colors are suddenly seared away by a blinding white light. Yet still you see those eyes, wide and unblinking, seared on to the back of your eyelids. The light dissipates, and the world begins to come back into focus. 
You dare not close your eyes, for you know that if you do, it will be staring back at you.`],
          look() {
            const tv = document.querySelector('.img');
            tv.innerHTML = tv.innerHTML.replaceAll('--.__.--.__.--', '<span class="scanline">--.__.--.__.--</span>');
          },
        },
      ],
    },
  ],
};