function checkRUEstado() {
   // const url = "https://ruunifei.free.beeceptor.com/estadoru1";
    const url = "https://ruunifei.free.beeceptor.com/estadoru2";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const estadoElement = document.getElementById("estadoSpan");
        if (data.estado === "vazio") {
          estadoElement.textContent = "vazio";
          estadoElement.style.color = "#5DC460"; 
        } else if (data.estado === "cheio") {
          estadoElement.textContent = "cheio";
          estadoElement.style.color = "#F08080"; 
        } else {
          console.error("Invalid estado received:", data.estado);
        }
      })
      .catch(error => {
        console.error("Error fetching RU estado:", error);
      });
  }
  
  checkRUEstado();