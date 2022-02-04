//creating the number button array
const numBtnsArray = []
const addNumbers = (numDiv)=>
{
    for (let i = 1; i < 21; i++)
    {
       const numBtnsArray = []
       numDiv.innerHTML +=`<button type = "button" value = "${i}"> ${i} </button>`
     
    }
}

/*const generateChosenNumbers = (chosenNumbers, numDiv)=>
{
    const mark = numDiv.push(mark)
    chosenNumbers.innerHTML +=  `<div>Mark: ${mark} </div>`
    alert(mark)
}*/
const calBetAmt = (betArray)=>
{
    betArray.reduce((num1, num2) => num1 + num2, 0)
}

const main = (()=>
{
    const numbersBtnDiv = document.querySelector("#numbtn")
    const chosenNumbers = document.querySelector("#markOutput")
    const betContainer = document.querySelector("#bet")
    const totalBet = document.querySelector(".total")
    const registerBtns = document.querySelector("#cashNumbers")
    const cashReceived = document.querySelector("#cashReceived")
    const change= document.querySelector("#change")
    const modal = document.querySelector(".hide")

    const clearBtn = document.querySelector("#clear")
    const cashBtn = document.querySelector("#cash")

    clearBtn.disabled = true
    cashBtn.disabled = true


    const numBtns = []
    let betAmount = []
    let total = 0 
    addNumbers(numbersBtnDiv)

    numbersBtnDiv.addEventListener("click", (event)=>
    {
        
        const element = event.target

            if(element.tagName=="BUTTON" && numBtns.length < 5)
            {   
               const mark = element.value
               numBtns.push(mark)
               element.disabled = true
               element.classList.add("selected")
               chosenNumbers.innerHTML +=  `<div>Mark: ${mark} </div>`
               if(numBtns.length == 5)
               {
               clearBtn.disabled = false
               cashBtn.disabled = false
               }
            }
    
    })

    betContainer.addEventListener("click", (event)=>
    {
        const element = event.target

        if(element.tagName == "BUTTON" && numBtns.length == 5)
        {
            let betPlaced = 0;
            element.classList.add("selectedBtns")
            betPlaced += parseInt(element.value)
            betAmount.push(betPlaced)

             cashBtn.addEventListener("click",()=>
             {
                 modal.classList.remove("hide")
                 total = betAmount.reduce(( previousValue, currentValue ) => 
                 previousValue + currentValue, 0)
                 totalBet.innerText = `Total: $${total}`
        
    })
}

})

    registerBtns.addEventListener("click", (event)=>
    {
        const totalBet = document.querySelector("#totalRead")
        const element = event.target
        if(element.tagName == "BUTTON")
        { 
            total = betAmount.reduce(( previousValue, currentValue ) => 
                    previousValue + currentValue, 0)
            totalBet.innerText = `$${total.toFixed(2)}`
            const selected = element.value
            cashReceived.value += `${selected.toFixed(2)}`
            change.value = `${(cashReceived.value - total).toFixed(2)}`
        }

    })

    clearBtn.addEventListener("click", ()=>
    {
        betAmount = []
        totalBet.innerText = ""
        chosenNumbers.innerHTML = "Total:$0"
    })

})()





































 


































