let username = document.getElementById("username")
let coin = document.getElementById("coins")
let btn = document.getElementById("bttn")
let energy = document.getElementById("energy")
let bar = document.getElementById("arr")
let click = document.getElementById("clck")
let rank_name = document.getElementById("rank_name")
let rank_num = document.getElementById("rank_num")
let energy2 = document.getElementById("energies")
let bolt = document.getElementById("energy_pic")
let loading_screen = document.getElementById("loading_screen")
let main_screen = document.getElementById("main_screen")


setTimeout(() => {
    screen()
}, 8000);
function screen() {
    main_screen.style.display = "flex"
    loading_screen.style.display = "none"
    // Take Username from user 
    let na = prompt("Enter a Username")
    while (na == null || na == "") {
        na = prompt("Please!\nEnter a Valid Username")
    }
    nam()
    function nam() {
        let x = na.charAt(0).toUpperCase()
        let y = na.slice(1)
        aam = x + y
        username.innerHTML = aam
    }
}

let c = 2000
let e = 1000
let f = "+1"
btn.addEventListener("click", function () {
    barrr()
    if (e > 0) {
        level(event)
    }
})
function level(event) {
    let previousLevel = rank_num.innerHTML;
    if (c >= 2000 && c < 2099) {
        if (e >= 1) {
            bronze()
            f = "+1"
            num_click(f, event);
        }
        // setInterval(() => {
        //     if (e < 1) {
        //         click.src = "assets/levels/1 (1).jpg"
        //     }
        //     else{
        //         click.src = "assets/levels/1.jpg"
        //     }
        // }, 100);
    }
    else if (c >= 2099 && c < 2199) {
        if (e >= 2) {
            silver()
            f = "+2"
            click.src = "assets/levels/2.jpg"
            num_click(f, event);
            if (previousLevel !== "2") {
                e = 1500;
                energy2.innerHTML = "/1500"
                energy.innerHTML = e;
            }
        }
        // setInterval(() => {
        //     if (e < 2) {
        //         click.src = "assets/levels/2 (1).jpg"
        //     }
        //     else{
        //         click.src = "assets/levels/2.jpg"
        //     }
        // }, 100);
    }
    else if (c >= 2199 && c < 2299) {
        if (e >= 3) {
            gold()
            f = "+3"
            click.src = "assets/levels/3.jpg"
            num_click(f, event);
            if (previousLevel !== "3") {
                e = 2000;
                energy2.innerHTML = "/2000"
                energy.innerHTML = e;
            }
        }
        // setInterval(() => {
        //     if (e < 3) {
        //         click.src = "assets/levels/3 (1).jpg"
        //     }
        //     else{
        //         click.src = "assets/levels/3.jpg"
        //     }
        // }, 100);
    }
    else if (c >= 2299 && c < 2399) {
        if (e >= 4) {
            platinum()
            f = "+4"
            click.src = "assets/levels/4.jpg"
            num_click(f, event);
            if (previousLevel !== "4") {
                e = 2500;
                energy2.innerHTML = "/2500"
                energy.innerHTML = e;
            }
        }
        // setInterval(() => {
        //     if (e < 4) {
        //         click.src = "assets/levels/4 (1).jpg"
        //     }
        //     else{
        //         click.src = "assets/levels/4.jpg"
        //     }
        // }, 100);
    }
    else if (c >= 2399 && c < 2499) {
        if (e >= 5) {
            diamond()
            f = "+5"
            click.src = "assets/levels/5.jpg"
            num_click(f, event);
            if (previousLevel !== "5") {
                e = 3000;
                energy2.innerHTML = "/3000"
                energy.innerHTML = e;
            }
        }
        // setInterval(() => {
        //     if (e < 5) {
        //         click.src = "assets/levels/5 (1).jpg"
        //     }
        //     else{
        //         click.src = "assets/levels/5.jpg"
        //     }
        // }, 100);
    }
    else if (c >= 2499 && c < 2599) {
        if (e >= 6) {
            epic()
            f = "+6"
            click.src = "assets/levels/6.jpg"
            num_click(f, event);
            if (previousLevel !== "6") {
                e = 3500;
                energy2.innerHTML = "/3500"
                energy.innerHTML = e;
            }
        }
        // setInterval(() => {
        //     if (e < 6) {
        //         click.src = "assets/levels/6 (1).jpg"
        //     }
        //     else{
        //         click.src = "assets/levels/6.jpg"
        //     }
        // }, 100);
    }
    else if (c >= 2599 && c < 2699) {
        if (e >= 7) {
            legendary()
            f = "+7"
            click.src = "assets/levels/7.jpg"
            num_click(f, event);
            if (previousLevel !== "7") {
                e = 4000;
                energy2.innerHTML = "/4000"
                energy.innerHTML = e;
            }
        }
        // setInterval(() => {
        //     if (e < 7) {
        //         click.src = "assets/levels/7 (1).jpg"
        //     }
        //     else{
        //         click.src = "assets/levels/7.jpg"
        //     }
        // }, 100);
    }
    else if (c >= 2699 && c < 2799) {
        if (e >= 8) {
            master()
            f = "+8"
            click.src = "assets/levels/8.jpg"
            num_click(f, event);
            if (previousLevel !== "8") {
                e = 4500;
                energy2.innerHTML = "/4500"
                energy.innerHTML = e;
            }
        }
        // setInterval(() => {
        //     if (e < 18) {
        //         click.src = "assets/levels/18 (1).jpg"
        //     }
        //     else{
        //         click.src = "assets/levels/18.jpg"
        //     }
        // }, 100);
    }
    else if (c >= 2799 && c < 2899) {
        if (e >= 9) {
            grandmaster()
            f = "+9"
            click.src = "assets/levels/9.jpg"
            num_click(f, event);
            if (previousLevel !== "9") {
                e = 5000;
                energy2.innerHTML = "/5000"
                energy.innerHTML = e;
                bolt.src = "assets/energy2.png"
            }
        }
        // setInterval(() => {
        //     if (e < 9) {
        //         click.src = "assets/levels/9 (1).jpg"
        //     }
        //     else{
        //         click.src = "assets/levels/9.jpg"
        //     }
        // }, 100);
    }
    else if (c >= 2899) {
        if (e >= 10) {
            lord()
            f = "+10"
            click.src = "assets/levels/10.jpg"
            num_click(f, event);
            if (previousLevel !== "10") {
                e = 5500;
                energy2.innerHTML = "/5500"
                energy.innerHTML = e;
                bolt.src = "assets/energy2.png"
            }
        }
        // setInterval(() => {
        //     if (e < 10) {
        //         click.src = "assets/levels/10 (1).jpg"
        //     }
        //     else{
        //         click.src = "assets/levels/10.jpg"
        //     }
        // }, 100);
    }
    else { }
}

function bronze() {
    c += 1
    coin.innerText = formatNumber(c)
    e -= 1
    energy.innerHTML = e
}
function silver() {
    if (e >= 1) {
        c += 2
        coin.innerText = formatNumber(c)
        e -= 2
        energy.innerHTML = e
        rank_name.innerHTML = "Silver"
        rank_num.innerHTML = "2"
    }
}
function gold() {
    if (e >= 2) {
        c += 3
        coin.innerText = formatNumber(c)
        e -= 3
        energy.innerHTML = e
        rank_name.innerHTML = "Gold"
        rank_num.innerHTML = "3"
    }
}
function platinum() {
    if (e >= 3) {
        c += 4
        coin.innerText = formatNumber(c)
        e -= 4
        energy.innerHTML = e
        rank_name.innerHTML = "Platinum"
        rank_num.innerHTML = "4"
    }
}
function diamond() {
    if (e >= 4) {
        c += 5
        coin.innerText = formatNumber(c)
        e -= 5
        energy.innerHTML = e
        rank_name.innerHTML = "Diamond"
        rank_num.innerHTML = "5"
    }
}
function epic() {
    if (e >= 5) {
        c += 6
        coin.innerText = formatNumber(c)
        e -= 6
        energy.innerHTML = e
        rank_name.innerHTML = "Epic"
        rank_num.innerHTML = "6"
    }
}
function legendary() {
    if (e >= 6) {
        c += 7
        coin.innerText = formatNumber(c)
        e -= 7
        energy.innerHTML = e
        rank_name.innerHTML = "Legendary"
        rank_num.innerHTML = "7"
    }
}
function master() {
    if (e >= 7) {
        c += 8
        coin.innerText = formatNumber(c)
        e -= 8
        energy.innerHTML = e
        rank_name.innerHTML = "Master"
        rank_num.innerHTML = "8"
    }
}
function grandmaster() {
    if (e >= 8) {
        c += 9
        coin.innerText = formatNumber(c)
        e -= 9
        energy.innerHTML = e
        rank_name.innerHTML = "GrandMaster"
        rank_num.innerHTML = "9"
    }
}
function lord() {
    if (e >= 10) {
        c += 10
        coin.innerText = formatNumber(c)
        e -= 10
        energy.innerHTML = e
        rank_name.innerHTML = "Lord"
        rank_num.innerHTML = "10"
    }
}

// For Appearing Number on clicking
function num_click(m, event) {
    const parentRect = btn.getBoundingClientRect();
    const offsetX = event.clientX - parentRect.left;
    const offsetY = event.clientY - parentRect.top;
    const floatingText = document.createElement('span');
    floatingText.textContent = m;
    floatingText.classList.add('floating-text');
    floatingText.style.left = `${offsetX - 27}px`;
    floatingText.style.top = `${offsetY - 45}px`;
    btn.appendChild(floatingText);
    setTimeout(() => {
        floatingText.remove();
    }, 1000);
}

// Use to Convert in the form of (12,345,543,432)
function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}

// For Progress Bar
function barrr() {
    let currentValue = c + 10
    let maxValue = 3000
    function updateProgressBar() {
        var progress = (currentValue / maxValue) * 100;
        bar.style.width = progress + "%";
        // let Int_progress = Math.floor(progress)
        // if (Int_progress == 100) {
        //     alert("Congratulation!")
        // }
    }
    updateProgressBar()
}
barrr()

// Restore Energy
function restore() {
    // if (c >= 2000 && c < 2099) {
    //     if (e < 1000) {
    //         e += 1
    //     }
    // }

    // else if (c>=2099 && c<2199) {
    //     if (e <= 998) {
    //         e += 2
    //     }
    //     else if (e < 1000) {
    //         e += 1
    //     }
    // }

    // else if (c>=2199 && c<2299) {
    //     if (e <= 997) {
    //         e += 3
    //     }
    //     else if (e <= 998) {
    //         e += 2
    //     }
    //     else if (e < 1000) {
    //         e += 1
    //     }
    // }

    if (e < 1000) {
        e += 1
    }
}
setInterval(() => {
    restore()
    energy.innerHTML = e
}, 750);