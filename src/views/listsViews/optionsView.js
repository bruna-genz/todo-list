export const optionsView = (listName) => { 
    const optionsHTML = `<div class="dark-background">
        <div id="item-options">
            <div id="left-options">
                <div id="item-title">
                    
                    <h1><img src="../src/assets/images/tick.svg" alt=""><input id="list-name-input" type="text" placeholder="Item title"></h1>
                    <p>in list ${listName}</p>
                </div>
                <form id="description-form">
                    <h2><img src="../src/assets/images/grid.svg" alt="">Description</h2>
                    <input type="text" id="description" name="description" placeholder="Add detailed description"><br><br>
                </form>
                <form id="priority-form">
                    <h2><img src="../src/assets/images/grid.svg" alt="">Activity</h2>
                    <label for="priority">Priority Level:</label>
                    <select id="priority" name="priority">
                        <option value="urgent">Urgent</option>
                        <option value="very important">Very important</option>
                        <option value="important">Important</option>
                        <option value="normal">Normal</option>
                    </select>
                </form>
            </div>
            <div id="right-options">
                
                <button id="checklist-btn">
                    <img src="../src/assets/images/tick.svg" alt="">
                    <p>Checklist</p>
                </button>
                <form id="checklist-title-form">
                    <h3>Add Checklist</h3>
                    <label for="checklist-title">Title</label>
                    <input type="text" id="checklist-title" placeholder="checklist title" name="checklist-title">
                    <input type="submit" class="save-btn" id="checklist-button" placeholder="checklist title">
                </form>
                <button id="due-date-btn">
                    <div id="title-timebtn">
                        <img src="../src/assets/images/clock.svg" alt="">
                        <p>Due date</p>
                    </div>
                    <div>
                        <input type="date" class='date'>    
                    </div>
                    
                </button>
                <button class="save-btn">
                    <p>Save</p>
                </button>
            </div>
        </div>
    </div>
`

    return optionsHTML
}