// eslint-disable-next-line import/prefer-default-export
export const checklistView = (title, id) => {
  const checklistHtml = `
    <form id="checklist-form" data-checklistID=${id}>
        <h2><img src="assets/images/grid.svg" alt="">${title}</h2>
        <div class="checklist-items">
        
        </div>
        <input type="text" id="checklist-add-item" name="checklist-item" placeholder="Add an item"><br>
        <input type="submit" class="save-btn" id="add-checkbox-btn" placeholder="checklist title" value="send">
        <img id="checklist-image" src="assets/images/close.svg" alt="">
    </form>`;

  return checklistHtml;
};
