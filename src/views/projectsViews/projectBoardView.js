export const projectBoardView = (project) => `<div class="tests project-board" data-projectid="${project.id}">
    <p>${project.title}</p>
    <button class="delete-btn"><img src="../src/assets/images/bin.svg" alt="menu icon" class="nav-icon"></button>
    </div>`;