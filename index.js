const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];


  const refs ={
      startBtn: document.querySelector('[data-action="start"]'),
      stopBtn: document.querySelector('[data-action="stop"]'),
      body: document.querySelector('body')
  }

    refs.startBtn.addEventListener('click', onStart);
    refs.stopBtn.addEventListener('click', onStop);

    const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let intervalId = null;

  function onStart(e){
    startListener(); 
    intervalId = setInterval(changeBGColor, 1000);
  }

  function onStop(){
    stopListener();
    clearInterval(intervalId);
  }

  function changeBGColor() {
    const randomColor = randomIntegerFromInterval(0, colors.length);
    refs.body.style.backgroundColor = colors[randomColor];
   }

   function stopListener(){
    if(onStop){
      refs.startBtn.addEventListener('click', onStart);
    refs.stopBtn.removeEventListener('click', onStop);
  }
   }

  function startListener(){
    if(onStart){
      refs.startBtn.removeEventListener('click', onStart);
    refs.stopBtn.addEventListener('click', onStop);
  }
  }