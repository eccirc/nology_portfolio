const projectSection = window.document.getElementById("Projects");

const project = window.document.createElement("div");

project.classList.add("project");

project.innerHTML = `
         <img
            class="project__image"
            src="./assets/placeholder.jpg"
            alt="placeholder"
          />
          <h3 class="project__title">
            Project Title
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fas fa-external-link-alt"></i
            ></a>
            <a href="www.example.com" target="_blank" rel="noopener noreferrer"
              ><i class="fas fa-code"></i
            ></a>
          </h3>
          <div class="project__sub">
            <span>technologies</span>
            <div class="icons__tech fa-2x">
              <i class="fab fa-react"></i>
              <i class="fab fa-html5"></i>
              <i class="fab fa-sass"></i>
              <i class="fab fa-js"></i>
            </div>
          </div>

          <p class="project__info">
            Kombucha try-hard cronut iPhone snackwave. Activated charcoal trust
            fund leggings man bun authentic cardigan swag pickled mlkshk kogi.
            Umami mlkshk edison bulb kickstarter freegan pop-up. Try-hard
            drinking vinegar subway tile artisan trust fund tofu twee live-edge
            YOLO.
          </p>
  `;

projectSection.appendChild(project);
