alert("Hello, welcome to the Twenty game. The objective of the game is to get lucky and see if you end up having more than me (the computer)")
do{

    var computer = 0
    var player = 0

    do{

        var ran = Math.floor(Math.random() * 10) + 1

        computer = computer + ran 

        alert(`computer new number is ${ran}.\n\n\n computer new total is ${computer}`)

    } while ( computer < 16 )

    alert(`The computer will stop at ${computer}, it is now your turn`)

    do{

        var ran = Math.floor(Math.random() * 10) + 1

        player = player + ran 

        alert(`player new number is ${ran}.\n\n\n player new total is ${player}`)

        var p = prompt(`Wanna go again? type "n" if want to stop. type "y" if you want to continue`)


    } while (( p != 'n' ) && (player < 20))

    if ((player > computer) || (computer <= 20) || (human <= 20)){
        console.log("player wins!")
    } else if ((computer > player) || (computer <= 20) || (human <= 20)){
        console.log("computer wins!")
    } else if ((computer == player) || (computer <= 20) || (human <= 20)){
        console.log("tie!")
    }

    alert(`game over. final score: Computer: ${computer} You: ${player}`)


    var retry = prompt(`Wanna go again? type "n" if want to stop. type "y" if you want to continue`)

} while ((retry != `n`) && (retry == `y`))



