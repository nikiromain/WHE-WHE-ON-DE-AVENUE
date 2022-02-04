

const app = ()=>
{
    const confirm = document.querySelector("#confirm")
    const totalBet = document.querySelector(".total")
    const chosenNumbers = document.querySelector("#markOutput")

    confirm.addEventListener("click", ()=>
    {
        location.href = "/html/bill.html"
        const numBtns = []
        let betAmount = []
        const mark = 0
        numBtns.push(mark)
        chosenNumbers.innerHTML +=  `<div>Mark: ${mark} </div>`
        total = betAmount.reduce(( previousValue, currentValue ) => 
        previousValue + currentValue, 0)
        totalBet.innerText = `Total: $${total}`
    })


}
app()