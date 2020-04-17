export const dashboardView = (currentProject) => { 
    const dashboardHtml = `
<div class="to-dos">
<div id="sub-nav">
    <div>
        <div id="title" data-projectID=${currentProject.id}>${currentProject.title}</div>
        <div><img src="../src/assets/images/star.svg" alt=""></div>
        <div>Personal</div>
        <div><img src="../src/assets/images/lock.svg" alt=""><p>Público</p></div>
        <div id="user"><img src="../src/assets/images/user.svg" alt=""></div>
        <div>Invitar</div>
    </div>
    <div>
        <div><img src="../src/assets/images/bell.svg" alt=""><p>Buttler</p></div>
        <div><img src="../src/assets/images/grid.svg" alt=""><p>Show menu</p></div>
    </div>
</div>
<div id="list-container">
     <div class="list">
         <h1>My firlst tittle</h1>
         <div class="items-container">
             <div class="items">sadfasdfasdf</div>
             <div class="items">asdfasdf</div>
             <div class="items">sadfasdfasdf</div>
             <div class="items">asdfasdf</div>
             <div class="items">sadfasdfasdf</div>
             <div class="items">asdfasdf</div>
             <div class="items">sadfasdfasdf</div>
             <div class="items">asdfasdf</div>
             <div class="items">sadfasdfasdf</div>
             <div class="items">asdfasdf</div>
             <div class="items">sadfasdfasdf</div>
             <div class="items">asdfasdf</div>
             <div class="items">sadfasdfasdf</div>
             <div class="items">asdfasdf</div>
         </div>    
         <button class="add-item">
            <img src="../src/assets/images/plus.svg" alt=""> 
            <p>Add Item</p> 
         </button>
     </div>
     
     <button id="add-list">
        <img src="../src/assets/images/plus.svg" alt="">
        <p>Add list</p>
     </button>
</div>
</div>
`
    return dashboardHtml
}