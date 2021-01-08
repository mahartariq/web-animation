    
    var elementShape = document.querySelector(".di");
    console.log(elementShape);
    
    var frames = [
        {background:"pink",transform:"translateX(0px)"},
        {background:"skyblue"},
        {background:"skyblue"},
        {background:"green"},
        {background:"skyblue",transform:"translateX(1300px)"},
        
    ];
    var timing = {
        duration : 16000,
        iterations:Infinity,
        direction: "alternate",
    };
    var animateElement = elementShape.animate(frames,timing);

    document.querySelector(".play").addEventListener("click",()=>{
        animateElement.play();
    });
    document.querySelector(".pause").addEventListener("click",()=>{
        animateElement.pause();
    });
    document.querySelector(".reverse").addEventListener("click",()=>{
        animateElement.reverse();
    });
    document.querySelector(".update").addEventListener("click",()=>{
        console.log(animateElement.playbackRate);
        animateElement.updatePlaybackRate(animateElement.playbackRate*1.5);
    });

