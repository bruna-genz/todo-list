export const editOptionsView = (item) => {
  const optionsHTML = `<div class="dark-background">
        <div id="item-options">
            <div id="left-options">
                <div id="item-title">
                    <h1><img src="../src/assets/images/tick.svg" alt=""><input id="list-name-input" type="text" placeholder="Item title" value="${item.title}"></h1>
                    <p>in list ${item.listName}</p>
                </div>
                <form id="description-form">
                    <h2><img src="../src/assets/images/grid.svg" alt="">Description</h2>
                    <input type="text" id="description" name="description" placeholder="Add detailed description" value="${item.description ? item.description : ''}"><br><br>
                </form>
                <div class="checklist-container" data-itemid="${item.id}"></div>
                <form id="priority-form">
                    <h2><img src="../src/assets/images/grid.svg" alt="">Activity</h2>
                    <label id="priority-label" for="priority">Priority Level:</label>
                    <select id="priority" name="priority">
                        <option ${item.priority == 'urgent' ? "selected='selected'" : ''} value="urgent">Urgent</option>
                        <option ${item.priority == 'veryimportant' ? "selected='selected'" : ''} value="very important">Very important</option>
                        <option ${item.priority == 'important' ? "selected='selected'" : ''} value="important">Important</option>
                        <option ${item.priority == 'normal' ? "selected='selected'" : ''} value="normal">Normal</option>
                    </select>
                </form>
            </div>
            <div id="right-options">
                <button id="due-date-btn">
                    <div id="title-timebtn">
                        <img src="../src/assets/images/clock.svg" alt="">
                        <p>Due date</p>
                    </div>
                    <div>
                        <input type="date" class='date' value="${item.date ? item.date : ''}">    
                    </div>
                    
                </button>
                <button id ="edit-item-btn" class="save-btn">
                    <p>Edit</p>
                </button>
            </div>
        </div>
    </div>
`;

  return optionsHTML;
};