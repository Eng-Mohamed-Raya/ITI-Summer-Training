var progress=document.querySelector('progress');
var progressCounter=document.querySelector('.progress-counter');

progressCounter.innerText = `0 %`;

setInterval(() => {
    if(progress.value < 100) {
        progress.value += 1;
        progressCounter.innerText = `${progress.value} %`;
        if(progress.value == 100) {
            progress.value = 0; 
            progressCounter.innerText = `0 %`;
        }
    }
}, 50);
