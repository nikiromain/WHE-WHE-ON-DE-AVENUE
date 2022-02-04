Detailed Specification 

In this lab, you will develop a lottery ticket machine for the fictional lottery game, WHE WHE on D’ Avenue.

In WHE WHE, a player must choose 5 lottery numbers and an “amount” they want to bet.  At a future point in time, the lottery company will draw the winning numbers for the week. If a customer’s ticket contains all of the winning numbers, the customer wins a multiplier of the amount they bet. In other words, the more money you bet, the more money they will win.

You have been hired as an JavaScript Developer to develop the user interface that will allow the cashiers for the lottery ticket company to generate a customers’ ticket (ie: the UI to allow customers to select 5 numbers and assign a money value to it).  You are only required to develop the user interface to generate the ticket. You are not required to implement the logic to choose winning numbers, determining winners, or calculating payouts. 


The user interface you must develop should be similar to the following screenshots:

Figure 1 - Overall interface
THe Cash and Clear Button Should be initially disabled





Figure 2 - Selecting numbers
The “CASH” AND CLEAR button are ONLY enabled after all 5  numbers and the bet amount are selected




Figure 3 - Clearing Screen 
When the cashier presses the CLEAR button, all the numbers selected and bet amount are cleared from the screen.




Figure 4 - Cashing Out & Generating Customer’s Change
After selecting 5 lottery numbers, placing a bet amount and tapping CASH, the cashier will be prompted via a modal (popup screen, as EXACTLY shown in the image) to enter the money received from the customer. The application should automatically generate the customer’s change.





Figure 5 - Generating a Ticket
After tapping the Confirm button, the cashier will be navigated to another page, displaying the customer’s bill. The bill must list the customer’s selected lottery numbers and desired bet amount.

 

Detailed Technical Guidelines

The app MUST be built using HTML5, CSS and JavaScript.  

The look and the feel of the app does not have to be exactly the same as the screenshots shown Figures 1 to 4. However, the app must be reasonably pretty and must be obvious to the user where everything is (eg: number picker, bet selector, etc).  It must also be clear what is clickable vs. disabled. 

When the app loads, the user must be presented with a screen similar to Figure 1. By default, the CASH AND CLEAR button is disabled.  The buttons become enabled when the user selects the customer’s 5 chosen lottery numbers and their bet amount. The app should prohibit the user from selecting more than 5 lottery numbers.

The cashier MUST choose 5 lottery numbers between 1 to 20.  This is done by hitting the appropriate buttons displayed in Figure 1 and 2. If the user tries to choose a sixth number, they cannot.  Also, the cashier can only choose a number ONCE (no duplicate numbers)

Each time the cashier selects a number, the user interface must update to clearly indicate that the number has been selected.  For example, you can change the color of the number button, or add a border around the button.  

The cashier  can reset their number choices by pressing the CLEAR button.  When the CLEAR is pressed, the user interface of each number button must reset to its default styling.

In addition to selecting numbers, the cashier must assign a bet value to the customer chosen numbers. For example, if the customer wants to bet $19 on their ticket, the cashier can press the $10 button once, the $5 button once, and the $1 button four times. 

The total amount the customer wants to bet must be shown in the Numbers Selected section, under the lottery numbers selected. 

After selecting 5 lottery numbers, placing a bet amount and pressing the CASH button, the cashier should be prompted with a customized modal, as displayed in Figure 4.  The cashier would then enter the customer’s payment, via the keypad in the modal. Then the app would automatically calculate and display the customer’s change by applying the appropriate calculations. 

Lastly, the cashier is to generate a customer’s ticket by pressing the confirm button in the popup modal. When the button is pressed, the customer bill is generated displaying the :
The numbers that were selected, sorted, in ascending order
The total amount the customer bet
