function animation(){
      $(document).ready(function() {
        $(".name, .student, .small-intro, .fadeinup").lettering();

        anime({
            targets:'.student span',
            opacity:1,
            duration: 1500,
            easing: 'easeInSine',
            delay: anime.stagger(100,{start:3000})

        })
        anime({
            targets:'.name span',
            opacity:1,
            duration: 3000,
            easing: 'easeInSine',
            delay: anime.stagger(100,{start:4500})
        })

        anime({
            targets:'.name .char2, .name .char4',
            keyframes:[
                  {translateY: 100, duration: 1500}
            ],
            easing: 'easeInOutExpo',
            delay:8000,
        })

        anime({
            targets:'.name .char3',
            keyframes:[
                  {translateY: -100, duration: 1500}
            ],
            easing: 'easeInOutExpo',
            delay:8000,
        })

        anime({
            targets:'.small-intro span',
            opacity:1,
            duration:1000,
            easing:'easeInSine',
            delay: anime.stagger(50, {start:11000})
        })

        anime({
            targets:'.fadeinup span',
            opacity:1,
            duration:1000,
            easing:'easeInSine',
            delay: anime.stagger(30, {start:1000})
        })

        anime({
            targets:'.menu li',
            opacity:1,
            duration:3000,
            delay: anime.stagger(50, {start:11000})
        })

        anime({
            targets:'.workmenu li',
            opacity:1,
            duration:3000,
            delay: anime.stagger(50, {start:999})
        })

        anime({
            targets:'.logo img',
            opacity:1,
            duration:3000,
            delay: anime.stagger(50, {start:11000})
        })

        anime({
            targets:'.worklogo img',
            opacity:1,
            duration:3000,
            delay: anime.stagger(50, {start:999})
        })

      });


}

function fadeUpAnimation(){
    
      AOS.init({
            offset: 300,
            
      });

}

fadeUpAnimation();

animation();