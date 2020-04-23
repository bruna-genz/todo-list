export const projectBoardView = (project) => {
    return `<div class="tests project-board" data-projectid="${project.id}">${project.title}</div>`
}