let index = 0;



function show1(){
    document.getElementById('about-p').style.display ='block';
    document.getElementById('contact-div').style.display ='none';
    document.getElementById('placeholder-p').style.display ='none';
  }

  function show2(){
    document.getElementById('about-p').style.display ='none';
    document.getElementById('contact-div').style.display = 'block';
    document.getElementById('placeholder-p').style.display ='none';
  }

  function show3(){
    document.getElementById('about-p').style.display ='none';
    document.getElementById('contact-div').style.display ='none';
    document.getElementById('placeholder-p').style.display ='block';

  }

// function growBox(){
//   document.getElementById('textbox')
// }

index = 0;
let text = "'The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy My brothers. And you will know I am the Lord when I lay My vengeance upon you.'";
let speed = 15;

function typingText() {
    if (index < text.length) {
      document.getElementById('about-p').innerHTML += text.charAt(index);
      index ++;
      setTimeout(typingText, speed);
    }
  }
  
  let placeIndex = 0;
  let placeText = "Now... I been sayin' that shit for years. And if you ever heard it, that meant your ass. You'd be dead right now. I never gave much thought to what it meant. I just thought it was a cold-blooded thing to say to a motherfucker before I popped a cap in his ass. But I saw some shit this mornin' made me think twice. See, now I'm thinking: maybe it means you're the evil man. And I'm the righteous man. And Mr. 9mm here… he's the shepherd protecting my righteous ass in the valley of darkness. Or it could mean you're the righteous man and I'm the shepherd and it's the world that's evil and selfish. And I'd like that. But that shit ain't the truth. The truth is you're the weak. And I'm the tyranny of evil men. But I'm tryin', Ringo. I'm tryin' real hard to be the shepherd.";
  
  function placeType() {
  if (placeIndex < placeText.length) {
      document.getElementById('placeholder-p').innerHTML += placeText.charAt(placeIndex);
      placeIndex ++;
      setTimeout(placeType, speed);
    }
  }
