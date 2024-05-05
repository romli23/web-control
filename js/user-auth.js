const container = document.querySelector(".container");


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
     
    
    } else {
       
    }
  });

  const Landing = () => {
    const element = document.createElement("div");
    element.classList.add('Landing');
    element.innerHTML = ('');

  }