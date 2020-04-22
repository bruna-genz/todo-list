export const projectBoardView = (project) => {
    return `<div class="tests" data-projectid="${project.id}">${project.title}</div>`
}