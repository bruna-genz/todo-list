// eslint-disable-next-line import/prefer-default-export
export const dashboardView = (currentProject) => {
  const dashboardHtml = `
<div class="to-dos">
<div id="sub-nav">
    <div>
        <div id="title" data-projectID=${currentProject.id}>${currentProject.title}</div>
    </div>
</div>
<div id="list-container">
     
     
     <button class="add-list">
        <img src="../src/assets/images/plus.svg" alt="">
        <p>Add list</p>
     </button>
</div>
</div>
`;
  return dashboardHtml;
};