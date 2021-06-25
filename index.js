let fullQuestion={
Question:"What is the capital city of Kenya?",
CorrectAnswer: "Nairobi",
options: ["Nakuru","Kampala","Mombasa"],
}
let fullQuestion1={
Question:"What is the largest city in Africa ?",
CorrectAnswer: "Kinshasa",
options: ["Cape Town","Nairobi","Cairo"],
}

let fullQuestion2={
  Question:"What is the most dominant religion in Africa?",
  CorrectAnswer: "Islam",
  options: ["Christianity","Paganism","Hindu"],
  }

let fullQuestion3={
Question:"What is the Most Populated country in Africa?",
CorrectAnswer: "Nigeria",
options: ["Algeria","South Africa","Ghana"],
}
let fullQuestion4={
Question:"Angola has more Portugueese speakers than Portugal?",
CorrectAnswer: "True",
options: ["False"],
}
let fullQuestion5={
Question:"What is the smallest country in Africa?",
CorrectAnswer: "Seychelles",
options: ["Madagascar","SaoTome and Principle","Lesotho"],
}
let fullQuestion6={
Question:"How many Landlocked Countries are in Africa?",
CorrectAnswer: "16",
options: ["7","21","3"],
}
let fullQuestion7={
Question:"Which is Africa's biggest lake?",
CorrectAnswer: "Lake Victoria",
options: ["Lake Tanganyika","Lake Malawi","Lake Albert"],
}
let fullQuestion8={
Question:"Which is the most spoken language in Africa?",
CorrectAnswer: "Arabic",
options: ["English","French","Portugueese"],
}
let fullQuestion9={
Question:"Which African Country was never colonized?",
CorrectAnswer: "Ethiopia",
options: ["Egypt","Madagascar","Ghana"],
}
let fullQuestion10={
Question:"What is the capital city of Kenya?",
CorrectAnswer: "Nairobi",
options: ["Nakuru","Kampala","Mombasa"],
}
let fullQuestion11={
  Question:"What is the capital city of Kenya?",
  CorrectAnswer: "Nairobi",
  options: ["Nakuru","Kampala","Mombasa"]
  }
  


let quiz=[fullQuestion,fullQuestion1,fullQuestion2,fullQuestion3,fullQuestion4,fullQuestion5,fullQuestion6, fullQuestion7, fullQuestion8,fullQuestion9]
var container= document.getElementById('container');

quiz.forEach(function(fullQuestion){
  
fullQuestion.options.push(fullQuestion.CorrectAnswer)
  display(fullQuestion)

  function display( fullQuestion){
    
    var div=document.createElement('div')
    div.className='full-question'
    var question=document.createElement('ul')
    question.id='question'
    let li = document.createElement('li');
    var options=document.createElement("ol")
    options.Id='options'
    options.className='options'
    options.type='A'
    question.appendChild(li);
    li.innerHTML=fullQuestion.Question

    
    question.appendChild(options)
    div.appendChild(question)
    container.appendChild(div)

  
  
        options.innerHTML = '';
  
        fullQuestion.options.forEach(function (option) {
        let li = document.createElement('li');
  
        if(option==fullQuestion.CorrectAnswer){
          li.id="correct"
        }
        
        options.appendChild(li);
    
        li.innerHTML += option;
        
    });
  
  for (var i = options.children.length; i >= 0; i--) {
    options.appendChild(options.children[Math.random() * i | 0]);
  }
  }
})


var list = document.querySelectorAll('.options');
console.log(list)
var yourScore=0;
list.forEach(function(userItem) {
    userItem.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('checked');
        }
        console.log(document.getElementsByClassName("checked"))
        if(document.getElementsByClassName("checked")[0].id=="correct"){
          ev.target.classList.toggle('correct');
          var audio = document.getElementById("correctaudio");
          audio.currentTime=0;
        audio.play();
          yourScore=yourScore+1
          var score=document.getElementById('your-score')
          score.innerHTML="Your score is " + yourScore
          var question=userItem.parentElement
          question.parentElement.remove()
        }
        else{
          ev.target.classList.toggle('incorrect');
          var audio = document.getElementById("Wrongaudio");
          audio.currentTime=0;
        audio.play();
          var question=userItem.parentElement
          question.parentElement.remove()
        }
        var newlist = document.querySelectorAll('ol');
        console.log(newlist.length)
  if (newlist.length==0){

    //generate result messages 
    var passMessages=["African Maestro. What don't you know?👏👏👏", "All Hail African Facts Quiz King 👏👏👏", "Igweeeeee, igweeeeee, igweeeeee 👑👑👑👑👑", "You got a Lake.Victoria of knowledge in your head", "Where You can see sitting down, Donald trump cannot see even standing on the peak of Mt. Kilimanjaro"]
    var averageMessages=["With a gun on your head to name a few facts about Africa, you have higher chances of survival than Donald trump😂😂😂","I see you put the CAn in African. yes you CAN", "You are pretty good at this, but it doesn't matter at all in your life", "if Knowledge is power, then you are more powerful than most African countries my friend"]
    var failMessages=["Congratulations on knowing so little about a whole continent and still being alive!", "I guess this is evidence that Knowledge may not be power after all", "I know what you are thinking. None of this matters. You are right", "I don't think of you as a failure. I think of you as someone who has failed a very simple African facts quiz", "Don't worry, there is more to life than these stupid questions"]
    if(yourScore>7)
    {
      var result=document.getElementById('result')
      var randomIndex=Math.floor(Math.random() * passMessages.length)
      result.innerHTML=passMessages[randomIndex]
      const start = () => {
        setTimeout(function() {
            confetti.start()
        }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
    };

    //  Stop

    const stop = () => {
        setTimeout(function() {
            confetti.stop()
        }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    };

    start();
    stop();
    }
    else if(yourScore>4){
      var result=document.getElementById('result')
      var randomIndex=Math.floor(Math.random() * averageMessages.length)
      result.innerHTML=averageMessages[randomIndex]
      //result.innerHTML="With a gun on your head to name a few facts about Africa, you have higher chances of survival than Donald trump😂😂😂"
    }
    else{
      var result=document.getElementById('result')
      var randomIndex=Math.floor(Math.random() * failMessages.length)
      result.innerHTML=failMessages[randomIndex]
      //result.innerHTML="We have nothing to say about you because you Know Nothing About Africa🤦‍♀️🤦‍♂️🤷‍♀️"
    }
  }

      }, false);
  });
  var score=document.getElementById('your-score')
  score.innerHTML="Your score is " + yourScore


  function Refresh(){
    location.reload();
  }

  var confetti = {
    maxCount: 150,		//set max confetti count
    speed: 2,			//set the particle animation speed
    frameInterval: 15,	//the confetti animation frame interval in milliseconds
    alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
    gradient: false,	//whether to use gradients for the confetti particles
    start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
    stop: null,			//call to stop adding confetti
    toggle: null,		//call to start or stop the confetti animation depending on whether it's already running
    pause: null,		//call to freeze confetti animation
    resume: null,		//call to unfreeze confetti animation
    togglePause: null,	//call to toggle whether the confetti animation is paused
    remove: null,		//call to stop the confetti animation and remove all confetti immediately
    isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused
    isRunning: null		//call and returns true or false depending on whether the animation is running
  };
  
  (function() {
    confetti.start = startConfetti;
    confetti.stop = stopConfetti;
    confetti.toggle = toggleConfetti;
    confetti.pause = pauseConfetti;
    confetti.resume = resumeConfetti;
    confetti.togglePause = toggleConfettiPause;
    confetti.isPaused = isConfettiPaused;
    confetti.remove = removeConfetti;
    confetti.isRunning = isConfettiRunning;
    var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
    var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];
    var streamingConfetti = false;
    var animationTimer = null;
    var pause = false;
    var lastFrameTime = Date.now();
    var particles = [];
    var waveAngle = 0;
    var context = null;
  
    function resetParticle(particle, width, height) {
      particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
      particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
      particle.x = Math.random() * width;
      particle.y = Math.random() * height - height;
      particle.diameter = Math.random() * 10 + 5;
      particle.tilt = Math.random() * 10 - 10;
      particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
      particle.tiltAngle = Math.random() * Math.PI;
      return particle;
    }
  
    function toggleConfettiPause() {
      if (pause)
        resumeConfetti();
      else
        pauseConfetti();
    }
  
    function isConfettiPaused() {
      return pause;
    }
  
    function pauseConfetti() {
      pause = true;
    }
  
    function resumeConfetti() {
      pause = false;
      runAnimation();
    }
  
    function runAnimation() {
      if (pause)
        return;
      else if (particles.length === 0) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        animationTimer = null;
      } else {
        var now = Date.now();
        var delta = now - lastFrameTime;
        if (!supportsAnimationFrame || delta > confetti.frameInterval) {
          context.clearRect(0, 0, window.innerWidth, window.innerHeight);
          updateParticles();
          drawParticles(context);
          lastFrameTime = now - (delta % confetti.frameInterval);
        }
        animationTimer = requestAnimationFrame(runAnimation);
      }
    }
  
    function startConfetti(timeout, min, max) {
      var width = window.innerWidth;
      var height = window.innerHeight;
      window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            return window.setTimeout(callback, confetti.frameInterval);
          };
      })();
      var canvas = document.getElementById("confetti-canvas");
      if (canvas === null) {
        canvas = document.createElement("canvas");
        canvas.setAttribute("id", "confetti-canvas");
        canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
        document.body.prepend(canvas);
        canvas.width = width;
        canvas.height = height;
        window.addEventListener("resize", function() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }, true);
        context = canvas.getContext("2d");
      } else if (context === null)
        context = canvas.getContext("2d");
      var count = confetti.maxCount;
      if (min) {
        if (max) {
          if (min == max)
            count = particles.length + max;
          else {
            if (min > max) {
              var temp = min;
              min = max;
              max = temp;
            }
            count = particles.length + ((Math.random() * (max - min) + min) | 0);
          }
        } else
          count = particles.length + min;
      } else if (max)
        count = particles.length + max;
      while (particles.length < count)
        particles.push(resetParticle({}, width, height));
      streamingConfetti = true;
      pause = false;
      runAnimation();
      if (timeout) {
        window.setTimeout(stopConfetti, timeout);
      }
    }
  
    function stopConfetti() {
      streamingConfetti = false;
    }
  
    function removeConfetti() {
      stop();
      pause = false;
      particles = [];
    }
  
    function toggleConfetti() {
      if (streamingConfetti)
        stopConfetti();
      else
        startConfetti();
    }
    
    function isConfettiRunning() {
      return streamingConfetti;
    }
  
    function drawParticles(context) {
      var particle;
      var x, y, x2, y2;
      for (var i = 0; i < particles.length; i++) {
        particle = particles[i];
        context.beginPath();
        context.lineWidth = particle.diameter;
        x2 = particle.x + particle.tilt;
        x = x2 + particle.diameter / 2;
        y2 = particle.y + particle.tilt + particle.diameter / 2;
        if (confetti.gradient) {
          var gradient = context.createLinearGradient(x, particle.y, x2, y2);
          gradient.addColorStop("0", particle.color);
          gradient.addColorStop("1.0", particle.color2);
          context.strokeStyle = gradient;
        } else
          context.strokeStyle = particle.color;
        context.moveTo(x, particle.y);
        context.lineTo(x2, y2);
        context.stroke();
      }
    }
  
    function updateParticles() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var particle;
      waveAngle += 0.01;
      for (var i = 0; i < particles.length; i++) {
        particle = particles[i];
        if (!streamingConfetti && particle.y < -15)
          particle.y = height + 100;
        else {
          particle.tiltAngle += particle.tiltAngleIncrement;
          particle.x += Math.sin(waveAngle) - 0.5;
          particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
          particle.tilt = Math.sin(particle.tiltAngle) * 15;
        }
        if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
          if (streamingConfetti && particles.length <= confetti.maxCount)
            resetParticle(particle, width, height);
          else {
            particles.splice(i, 1);
            i--;
          }
        }
      }
    }
  })();