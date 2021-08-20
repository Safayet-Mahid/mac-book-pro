    //grand total -bonus part
    document.getElementById("promo-apply-btn").addEventListener("click",function(){
        const grandTotalElement = document.getElementById("grand-total");
        const typedCode = document.getElementById("promo-code-input");
        const totalCost = updatingTotalCost();
        const promoCode = "stevekaku";
        if(typedCode.value == promoCode){
            const discountedPrice = totalCost - (totalCost * .2);
            grandTotalElement.innerHTML = discountedPrice;
            
        }
        else{
            grandTotalElement.innerHTML = totalCost;
        }
        typedCode.value= "";
    })
// updating total cost function 
function updatingTotalCost(){
    const previousCostElement = document.getElementById("total-price"); 
    const memoryCost = parseFloat(document.getElementById("extra-memory-cost").innerHTML);
    const storgaeCost = parseFloat(document.getElementById("extra-storage-cost").innerHTML);
    const deliveryCost =parseFloat(document.getElementById("delivery-cost").innerHTML) ;
    const totalCost =  memoryCost + storgaeCost + deliveryCost + 1299 ;
    previousCostElement.innerHTML = totalCost;
    const grandTotalElement = document.getElementById("grand-total");
    grandTotalElement.innerHTML = previousCostElement.innerHTML;
    return totalCost;


    
}
// clicking function

function setValue(optionName,optionCost,price){
    document.getElementById(optionName).addEventListener("click",function(){
        const costElement = document.getElementById(optionCost);
        costElement.innerHTML = price;
        updatingTotalCost()
    })
    
}



// 8GB Unidied Memory button handler
setValue("8gb-memory-btn","extra-memory-cost",0);
// 16GB Unidied Memory button handler
setValue("16gb-memory-btn","extra-memory-cost",180);

//256gb storage button handler
setValue("256gb-storage-btn","extra-storage-cost",0);
//512gb storage button handler
setValue("512gb-storage-btn","extra-storage-cost",100);
//256gb storage button handler
setValue("1tb-storage-btn","extra-storage-cost",180);
//free delivery button handler
setValue("free-delivery","delivery-cost",0)
//free delivery button handler
setValue("paid-delivery","delivery-cost",20)
