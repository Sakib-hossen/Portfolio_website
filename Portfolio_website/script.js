function animation(){
      $(document).ready(function() {
        $(".name, .student, .small-intro, .fadeinup").lettering();

        anime({
            targets:'.student span',
            opacity:1,
            duration: 1500,
            easing: 'easeInSine',
            delay: anime.stagger(100,{start:300})

        })
        anime({
            targets:'.name span',
            opacity:1,
            duration: 3000,
            easing: 'easeInSine',
            delay: anime.stagger(100,{start:800})
        })

        anime({
            targets:'.name .char2, .name .char4',
            keyframes:[
                  {translateY: 100, duration: 1500}
            ],
            easing: 'easeInOutExpo',
            delay:3200,
        })

        anime({
            targets:'.name .char3',
            keyframes:[
                  {translateY: -100, duration: 1500}
            ],
            easing: 'easeInOutExpo',
            delay:3200,
        })

        anime({
            targets:'.small-intro span',
            opacity:1,
            duration:900,
            easing:'easeInSine',
            delay: anime.stagger(50, {start:3600})
        })

        anime({
            targets:'.fadeinup span',
            opacity:1,
            duration:800,
            easing:'easeInSine',
            delay: anime.stagger(20, {start:800})
        })

        anime({
            targets:'.menu li',
            opacity:1,
            duration:3000,
            delay: anime.stagger(50, {start:2100})
        })

        anime({
            targets:'.workmenu li',
            opacity:1,
            duration:3000,
            delay: anime.stagger(50, {start:899})
        })

        anime({
            targets:'.logo img',
            opacity:1,
            duration:3000,
            delay: anime.stagger(50, {start:2100})
        })

        anime({
            targets:'.worklogo img',
            opacity:1,
            duration:3000,
            delay: anime.stagger(50, {start:899})
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