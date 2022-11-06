const counts = document.querySelectorAll(".count");

counts.forEach(count => {
    const step = 1;
    let counter = 0;
    let ct = Number(count.textContent);
    const clearTimer = setInterval(() => {
        if(counter >= ct){
            clearInterval(clearTimer);
            return count.textContent = ct;
        }
    
        counter += Math.floor((step / 100) * ct);
        count.textContent = counter;
    }, 10);
});
