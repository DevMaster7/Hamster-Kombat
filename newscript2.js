let username = document.getElementById("username");
let coin = document.getElementById("coins");
let btn = document.getElementById("bttn");
let energy = document.getElementById("energy");
let bar = document.getElementById("arr");
let click = document.getElementById("clck");
let rank_name = document.getElementById("rank_name");
let rank_num = document.getElementById("rank_num");
let energy2 = document.getElementById("energies");
let bolt = document.getElementById("energy_pic");
let loading_screen = document.getElementById("loading_screen");
let main_screen = document.getElementById("main_screen");

setTimeout(() => {
    screen();
}, 8000);

function screen() {
    main_screen.style.display = "flex";
    loading_screen.style.display = "none";

    // Take Username from user 
    let na = prompt("Enter a Username").toLowerCase(); // Convert to lowercase
    while (na == null || na == "") {
        na = prompt("Please!\nEnter a Valid Username").toLowerCase(); // Convert to lowercase
    }

    let savedData = localStorage.getItem(na);
    if (savedData) {
        let userData = JSON.parse(savedData);
        aam = userData.username;
        c = userData.coins;
        e = userData.energy;
        rank_name.innerHTML = userData.rankName;
        rank_num.innerHTML = userData.rankNum;
        energy2.innerHTML = userData.energy2;
        bolt.src = userData.boltSrc;
        click.src = userData.clickSrc;
    } else {
        aam = na.charAt(0).toUpperCase() + na.slice(1); // Capitalize the first letter for display
        c = 2000; // Default initial coin value
        e = 1000; // Default initial energy value
    }

    username.innerHTML = aam;
    coin.innerText = formatNumber(c);
    energy.innerHTML = e;
    localStorage.setItem("name", na);
    updateProgressBar(); // Update progress bar immediately
}

let c = 2000;
let e = 1000;
let f = "+1";

btn.addEventListener("click", function (event) {
    if (e > 0) {
        level(event);
    }
});

function level(event) {
    let previousLevel = rank_num.innerHTML;
    if (c >= 2000 && c < 2999) {
        if (e >= 1) {
            bronze();
            f = "+1";
            num_click(f, event);
        }
    } else if (c >= 2999 && c < 4999) {
        if (e >= 2) {
            silver();
            f = "+2";
            click.src = "assets/levels/2.jpg";
            num_click(f, event);
            if (previousLevel !== "2") {
                e = 1500;
                energy2.innerHTML = "/1500";
                energy.innerHTML = e;
            }
        }
    } else if (c >= 4999 && c < 6999) {
        if (e >= 3) {
            gold();
            f = "+3";
            click.src = "assets/levels/3.jpg";
            num_click(f, event);
            if (previousLevel !== "3") {
                e = 2000;
                energy2.innerHTML = "/2000";
                energy.innerHTML = e;
            }
        }
    } else if (c >= 6999 && c < 8999) {
        if (e >= 4) {
            platinum();
            f = "+4";
            click.src = "assets/levels/4.jpg";
            num_click(f, event);
            if (previousLevel !== "4") {
                e = 2500;
                energy2.innerHTML = "/2500";
                energy.innerHTML = e;
            }
        }
    } else if (c >= 8999 && c < 10999) {
        if (e >= 5) {
            diamond();
            f = "+5";
            click.src = "assets/levels/5.jpg";
            num_click(f, event);
            if (previousLevel !== "5") {
                e = 3000;
                energy2.innerHTML = "/3000";
                energy.innerHTML = e;
            }
        }
    } else if (c >= 10999 && c < 12999) {
        if (e >= 6) {
            epic();
            f = "+6";
            click.src = "assets/levels/6.jpg";
            num_click(f, event);
            if (previousLevel !== "6") {
                e = 3500;
                energy2.innerHTML = "/3500";
                energy.innerHTML = e;
            }
        }
    } else if (c >= 12999 && c < 15999) {
        if (e >= 7) {
            legendary();
            f = "+7";
            click.src = "assets/levels/7.jpg";
            num_click(f, event);
            if (previousLevel !== "7") {
                e = 4000;
                energy2.innerHTML = "/4000";
                energy.innerHTML = e;
            }
        }
    } else if (c >= 15999 && c < 18999) {
        if (e >= 8) {
            master();
            f = "+8";
            click.src = "assets/levels/8.jpg";
            num_click(f, event);
            if (previousLevel !== "8") {
                e = 4500;
                energy2.innerHTML = "/4500";
                energy.innerHTML = e;
            }
        }
    } else if (c >= 18999 && c < 29999) {
        if (e >= 9) {
            grandmaster();
            f = "+9";
            click.src = "assets/levels/9.jpg";
            num_click(f, event);
            if (previousLevel !== "9") {
                e = 5000;
                energy2.innerHTML = "/5000";
                energy.innerHTML = e;
                // bolt.src = "assets/energy2.png";
            }
        }
    } else if (c >= 29999) {
        if (e >= 10) {
            lord();
            f = "+10";
            click.src = "assets/levels/10.jpg";
            num_click(f, event);
            if (previousLevel !== "10") {
                e = 6000;
                energy2.innerHTML = "/6000";
                energy.innerHTML = e;
                bolt.src = "assets/energy2.png";
            }
        }
    }
    saveProgress();
    updateProgressBar();
}

function bronze() {
    c += 1;
    coin.innerText = formatNumber(c);
    e -= 1;
    energy.innerHTML = e;
    rank_name.innerHTML = "Bronze";
    rank_num.innerHTML = "1";
    updateProgressBar();
}

function silver() {
    if (e >= 2) {
        c += 2;
        coin.innerText = formatNumber(c);
        e -= 2;
        energy.innerHTML = e;
        rank_name.innerHTML = "Silver";
        rank_num.innerHTML = "2";
        updateProgressBar();
    }
}

function gold() {
    if (e >= 3) {
        c += 3;
        coin.innerText = formatNumber(c);
        e -= 3;
        energy.innerHTML = e;
        rank_name.innerHTML = "Gold";
        rank_num.innerHTML = "3";
        updateProgressBar();
    }
}

function platinum() {
    if (e >= 4) {
        c += 4;
        coin.innerText = formatNumber(c);
        e -= 4;
        energy.innerHTML = e;
        rank_name.innerHTML = "Platinum";
        rank_num.innerHTML = "4";
        updateProgressBar();
    }
}

function diamond() {
    if (e >= 5) {
        c += 5;
        coin.innerText = formatNumber(c);
        e -= 5;
        energy.innerHTML = e;
        rank_name.innerHTML = "Diamond";
        rank_num.innerHTML = "5";
        updateProgressBar();
    }
}

function epic() {
    if (e >= 6) {
        c += 6;
        coin.innerText = formatNumber(c);
        e -= 6;
        energy.innerHTML = e;
        rank_name.innerHTML = "Epic";
        rank_num.innerHTML = "6";
        updateProgressBar();
    }
}

function legendary() {
    if (e >= 7) {
        c += 7;
        coin.innerText = formatNumber(c);
        e -= 7;
        energy.innerHTML = e;
        rank_name.innerHTML = "Legendary";
        rank_num.innerHTML = "7";
        updateProgressBar();
    }
}

function master() {
    if (e >= 8) {
        c += 8;
        coin.innerText = formatNumber(c);
        e -= 8;
        energy.innerHTML = e;
        rank_name.innerHTML = "Master";
        rank_num.innerHTML = "8";
        updateProgressBar();
    }
}

function grandmaster() {
    if (e >= 9) {
        c += 9;
        coin.innerText = formatNumber(c);
        e -= 9;
        energy.innerHTML = e;
        rank_name.innerHTML = "Grandmaster";
        rank_num.innerHTML = "9";
        updateProgressBar();
    }
}

function lord() {
    if (e >= 10) {
        c += 10;
        coin.innerText = formatNumber(c);
        e -= 10;
        energy.innerHTML = e;
        rank_name.innerHTML = "Lord";
        rank_num.innerHTML = "10";
        updateProgressBar();
    }
}

function num_click(m, event) {
    const parentRect = btn.getBoundingClientRect();
    const offsetX = event.clientX - parentRect.left;
    const offsetY = event.clientY - parentRect.top;
    const floatingText = document.createElement('span');
    floatingText.textContent = m;
    floatingText.classList.add('floating-text');
    floatingText.style.left = `${offsetX - 27}px`;
    floatingText.style.top = `${offsetY - 40}px`;
    btn.appendChild(floatingText);
    setTimeout(() => {
        floatingText.remove();
    }, 1000);
}

function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}

function updateProgressBar() {
    let currentValue = c;
    let levelMaxValues = [2999, 4999, 6999, 8999, 10999, 12999, 15999, 18999, 29999];
    let levelNames = ["Bronze", "Silver", "Gold", "Platinum", "Diamond", "Epic", "Legendary", "Master", "Grandmaster", "Lord"];
    let levelIndex = levelNames.indexOf(rank_name.innerHTML);

    if (levelIndex < 0) {
        return;
    }

    let maxValue = levelMaxValues[levelIndex];
    var progress = (currentValue / maxValue) * 100;
    bar.style.width = progress + "%";

    if (progress >= 100) {
        alert(`Congratulations! You've completed the ${rank_name.innerHTML} level!`);
    }
}

function restore() {
    if (c >= 2000 && c < 2999) {
        if (e < 1000) {
            e += 1;
        }
    } else if (c >= 2999 && c < 4999) {
        if (e <= 1498) {
            e += 2
        } else if (e > 1498 && e < 1500) {
            e += 1
        }
    } else if (c >= 4999 && c < 6999) {
        if (e <= 1997) {
            e += 3
        } else if (e > 1997 && e < 2000) {
            e += 1
        }
    } else if (c >= 6999 && c < 8999) {
        if (e <= 2496) {
            e += 4
        } else if (e > 2496 && e < 2500) {
            e += 1
        }
    } else if (c >= 8999 && c < 10999) {
        if (e <= 2995) {
            e += 5
        } else if (e > 2995 && e < 3000) {
            e += 1
        }
    } else if (c >= 10999 && c < 12999) {
        if (e <= 3494) {
            e += 6
        } else if (e > 3494 && e < 3500) {
            e += 1
        }
    } else if (c >= 12999 && 15999) {
        if (e <= 3993) {
            e += 7
        } else if (e > 3993 && e < 4000) {
            e += 1
        }
    } else if (c >= 15999 && c < 18999) {
        if (e <= 4493) {
            e += 7
        } else if (e > 4493 && 4500) {
            e += 1
        }
    } else if (c >= 18999 && c < 29999) {
        if (e <= 4993) {
            e += 7
        } else if (e > 4993 && 5000) {
            e += 1
        }
    } else if (c >= 29999) {
        if (e <= 5992) {
            e += 8
        } else if (e > 5992 && e < 6000) {
            e += 1
        }
    }
}

setInterval(() => {
    restore();
    energy.innerHTML = e;
}, 750);

function saveProgress() {
    let na = localStorage.getItem("name").toLowerCase(); // Convert to lowercase
    let userData = {
        username: aam,
        coins: c,
        energy: e,
        rankName: rank_name.innerHTML,
        rankNum: rank_num.innerHTML,
        energy2: energy2.innerHTML,
        boltSrc: bolt.src,
        clickSrc: click.src
    }
    localStorage.setItem(na, JSON.stringify(userData));
}
