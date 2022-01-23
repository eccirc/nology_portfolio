export const loadProjects = () => {
  const projectSection = window.document.getElementById("Projects");

  const project = window.document.createElement("div");

  project.classList.add("project");

  project.innerHTML = `
         <div class="project">
          <img
            class="project__image"
            src="./assets/placeholder.jpg"
            alt="placeholder"
          />
          <h2 class="project__title">
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
          </h2>
          <div class="project__sub">
            <span>technologies</span>
            <div class="icons__tech">
              <img src="./assets/react-original.svg" alt="react" />
              <img src="./assets/javascript-original.svg" alt="javascript" />
              <img src="./assets/sass-original.svg" alt="sass" />
              <img src="./assets/html5-original-wordmark.svg" alt="html5" />
            </div>
          </div>
          <span class="project__info">
            Kombucha try-hard cronut iPhone snackwave. Activated charcoal trust
            fund leggings man bun authentic cardigan swag pickled mlkshk kogi.
            Umami mlkshk edison bulb kickstarter freegan pop-up. Try-hard
            drinking vinegar subway tile artisan trust fund tofu twee live-edge
            YOLO.
          </span>
        </div>
  `;

  projectSection.appendChild(project);
};
