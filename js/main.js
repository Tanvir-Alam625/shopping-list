// Selection id 
const inputValue = document.getElementById('input-value');
const addButton = document.getElementById('add-btn');
const parentItem = document.getElementById('parent-item');
const successButton = document.getElementById('success-btn');
const allClearButton = document.getElementById('all-clear-btn');


// items addition event 
addButton.addEventListener('click',function(){
    if(inputValue.value == ''){
        alert('please input your shop item !');
    }else if(inputValue.value.length <3){
        alert('Item name 3 character greater than!');
    }
    else if(inputValue.value.length > 15){
        alert('Item name  20 character less than !');
    }

    else{
        const othersItem = document.createElement('div');
    othersItem.innerHTML = `
                <div id="my-item" class="item flex justify-around pt-2 px-2 items-center">
                    <div class="h-3 w-3 bg-red-600  rounded-2xl"></div>
                    <span class=" capitalize text-1xl md:text-2xl text-white font-normal md:font-bold  tracking-widest ">${inputValue.value}</span>
                    <div class="item-action flex items-center">
                        <button  class="success-btn">
                            <img src="./image/success-icon-png-22.jpg" class="w-6 md:w-8 mr-2 ease-out duration-300 hover:opacity-[.8] " alt="">
                        </button>
                        <button class="delete-btn">
                            <img src="./image/cross-removebg-preview.png" class="w-6 md:w-8 ease-out duration-300 hover:opacity-[.8]" alt="">
                        </button>
                    </div>
            </div>
                    `;
    parentItem.appendChild(othersItem);
    inputValue.value = '';
    // success event handler
    const successButton =document.getElementsByClassName('success-btn');
    for(const success of successButton){
        success.addEventListener('click', function(event){
            event.target.parentNode.parentNode.style.display = "none";
            event.target.parentNode.parentNode.parentNode.style.justifyContent = 'space-between';
            const circleStyle = event.target.parentNode.parentNode.parentNode.childNodes[1].style.backgroundColor = 'green';
            // console.log(circleStyle);
        });
    }
    // delete one element event 
    const deleteButton = document.getElementsByClassName("delete-btn");
        for (const button of deleteButton) {
            button.addEventListener("click", function (event) {
                console.log('hello');
                event.target.parentNode.parentNode.parentNode.style.display = "none";
                // console.log(e.target.parentNode.parentNode);
            });
        }
    }
    // end the else block
});
// all clear event 
allClearButton.addEventListener('click',function (){
    const shopItems = document.getElementsByClassName('item');
    for(const shopItem of shopItems){
        shopItem.style.display = 'none';
    }
})
// successButton event
// const dangerButton = document.getElementsByClassName('danger-btn');
// console.log(dangerButton);
// for( const dangerBtn of dangerButton ){
//     console.log(dangerBtn)
//     dangerBtn.addEventListener('click', function (e){
//         console.log('hello');
//         // event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode);
//         // e.target.parentNode.parentNode.parentNode.style.display = "none";

//     })

// }




