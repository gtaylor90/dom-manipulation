console.log("hello world")


document.querySelector("#thanks button").addEventListener('click', function() {
    // TASK #1
    // console.log("test")
    alert("youch! don't push me so hard!")
})

document.querySelector("#double button").addEventListener('click', function() {
    // TASK #2
    var pNode = document.querySelector('#compoundInvestment')
    var value = pNode.textContent
    pNode.textContent = parseInt(value) * 2
})


document.querySelector("#color-circle button").addEventListener('click', function() {
    // TASK #3
    var testCirc = document.querySelector("#circle-bw")
    console.log(testCirc)
        // console.log(testCirc.style.backgroundColor)
    if (testCirc.style.backgroundColor === "white") {
        testCirc.style.backgroundColor = "black"
    } else {
        testCirc.style.backgroundColor = "white"
    }

})
var cirProps = {
      width: 40
    }
document.querySelector("#blow-up button").addEventListener('click', function() {
    // TASK #4}

    var redCir = document.querySelector("#blow-up .answer-box .circle-red")
    var cirWidth = redCir.style.width
    var cirStyle = window.getComputedStyle(redCir)
    console.log(cirWidth)
    
    if (cirProps.width < 320){
      cirProps.width = cirProps.width * 2
      redCir.style.width = cirProps.width + "px"
      redCir.style.height = cirProps.width + "px"
    } else {
      cirProps.width = 40
      redCir.style.height = cirProps.width + "px"
      redCir.style.width = cirProps.width + "px"
    }
        // on click it needs to check size
        // double the size 
        // console.log(window.getComputedStyle(redCir))
})



document.querySelector("#remove button").addEventListener('click', function() {
    // TASK #5
    var ulNode = document.querySelectorAll("#userList li")
    var containerNode = document.querySelector("#userList .exerciseItem")
    console.log(ulNode)
    for (var i = 0; i < ulNode.length; i++) {
        var liNode = ulNode[i]
        console.log(liNode)
        if (liNode.classList.contains('inactive')) {
            console.log("inactive user")
            liNode.style.display = "none"
                // containerNode.removeChild(liNode)
                // can't figure out how to accomplish this?
            // alert("inactive user found, but can't figure out how to remove it")
        }
    }
})


document.querySelector("#reverse-squares button").addEventListener('click', function() {
    // TASK #6
    var spanNodes = document.querySelectorAll("#reverse-squares span")
    var containerNode = document.querySelector("#reverse-squares .answer-box")
    for (var i = spanNodes.length - 1; i >= 0; i--) {
        var oneSpan = spanNodes[i]
        containerNode.removeChild(oneSpan)
        containerNode.removeChild(oneSpan)

    }
})

document.querySelector("#pig-latin button").addEventListener('click', function() {
    // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click', function() {
    // TASK #8
})
