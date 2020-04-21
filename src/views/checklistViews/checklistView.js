export const checklistView = (checklist) => {
    const checklistHtml = `
    <form id="checklist-form" data-checklistID=${checklist.id}>
        <h2><img src="../src/assets/images/grid.svg" alt="">${checklist.title}</h2>
        <div class="checklist-items">
        
        </div>
        <input type="text" id="checklist-add-item" name="checklist-item" placeholder="Add an item"><br>
        <input type="submit" class="save-btn" id="add-checkbox-btn" placeholder="checklist title" value="send">
        <img id="checklist-image" src="../src/assets/images/close.svg" alt="">
    </form>`

    return checklistHtml
}

