// Selection id 
const inputValue = document.getElementById('input-value');
const addButton = document.getElementById('add-btn');
const parentItem = document.getElementById('parent-item');
const successButton = document.getElementById('success-btn');
const dangerButton = document.getElementById('danger-btn');


// items addition event 
addButton.addEventListener('click',function(){
    if(inputValue.value == ''){
        alert('please input your shop item !');
    }else if(inputValue.value.length <3){
        alert('Item name 3 character greater than!');
    }
    else if(inputValue.value.length > 20){
        alert('Item name  20 character less than !');
    }

    else{
        const othersItem = document.createElement('div');
    othersItem.innerHTML = `
                        <div class="item flex justify-between pt-2  items-center">
                        <div class="item-icons">
                            <div class="h-3 w-3 bg-red-600 rounded-2xl"></div>
                        </div>
                        <div class="item-text">
                            <span class=" text-1xl md:text-2xl text-white font-normal md:font-bold  tracking-widest ">${inputValue.value}</span>
                        </div>
                        <div class="item-action flex items-center">
                            <button id="success-btn">
                                <img src="./image/success-icon-png-22.jpg" class="w-6 md:w-8 mr-2 ease-out duration-300 hover:opacity-[.8] " alt="">
                            </button>
                            <button id="danger-btn">
                                <img src="./image/cross-removebg-preview.png" class="w-6 md:w-8 ease-out duration-300 hover:opacity-[.8]" alt="">
                            </button>
                        </div>
    
                    </div>`;
    parentItem.appendChild(othersItem);
    inputValue.value = '';
    }
});
