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
        username.innerHTML = userData.username;
        coin.innerText = formatNumber(userData.coins);
        energy.innerHTML = userData.energy;
        rank_name.innerHTML = userData.rankName;
        rank_num.innerHTML = userData.rankNum;
        energy2.innerHTML = userData.energy2;
        bolt.src = userData.boltSrc;
        click.src = userData.clickSrc;
    } else {
        let capitalizedUsername = na.charAt(0).toUpperCase() + na.slice(1);
        username.innerHTML = capitalizedUsername;
        coin.innerText = formatNumber(2000); // Default initial coin value
        energy.innerHTML = 1000; // Default initial energy value
        rank_name.innerHTML = "";
        rank_num.innerHTML = "";
        energy2.innerHTML = "/1000";
        bolt.src = "";
        click.src = "";
        saveProgress(); // Save initial progress for new user
    }

    localStorage.setItem("name", na);
    updateProgressBar(); // Update progress bar after setting up user data
}

btn.addEventListener("click", function (event) {
    let currentCoins = parseInt(coin.innerText.replace(/,/g, '')); // Remove commas from formatted number
    let currentEnergy = parseInt(energy.innerHTML);
    if (currentEnergy > 0) {
        level(event, currentCoins, currentEnergy);
    }
});

function level(event, c, e) {
    let previousLevel = rank_num.innerHTML;

    if (c >= 2000 && c < 2999) {
        if (e >= 1) {
            bronze(c, e, event);
        }
    } else if (c >= 2999 && c < 4999) {
        if (e >= 2) {
            silver(c, e, event);
        }
    } else if (c >= 4999 && c < 6999) {
        if (e >= 3) {
            gold(c, e, event);
        }
    } else if (c >= 6999 && c < 8999) {
        if (e >= 4) {
            platinum(c, e, event);
        }
    } else if (c >= 8999 && c < 10999) {
        if (e >= 5) {
            diamond(c, e, event);
        }
    } else if (c >= 10999 && c < 12999) {
        if (e >= 6) {
            epic(c, e, event);
        }
    } else if (c >= 12999 && c < 15999) {
        if (e >= 7) {
            legendary(c, e, event);
        }
    } else if (c >= 15999 && c < 18999) {
        if (e >= 8) {
            master(c, e, event);
        }
    } else if (c >= 18999 && c < 29999) {
        if (e >= 9) {
            grandmaster(c, e, event);
        }
    } else if (c >= 29999) {
        if (e >= 10) {
            lord(c, e, event);
        }
    }

    saveProgress(); // Save progress after leveling up
    updateProgressBar(); // Update progress bar after leveling up
}

function bronze(c, e, event) {
    c += 1;
    e -= 1;
    updateValues(c, e);
    num_click("+1", event);
}

function silver(c, e, event) {
    c += 2;
    e -= 2;
    updateValues(c, e);
    num_click("+2", event);
}

function gold(c, e, event) {
    c += 3;
    e -= 3;
    updateValues(c, e);
    num_click("+3", event);
}

function platinum(c, e, event) {
    c += 4;
    e -= 4;
    updateValues(c, e);
    num_click("+4", event);
}

function diamond(c, e, event) {
    c += 5;
    e -= 5;
    updateValues(c, e);
    num_click("+5", event);
}

function epic(c, e, event) {
    c += 6;
    e -= 6;
    updateValues(c, e);
    num_click("+6", event);
}

function legendary(c, e, event) {
    c += 7;
    e -= 7;
    updateValues(c, e);
    num_click("+7", event);
}

function master(c, e, event) {
    c += 8;
    e -= 8;
    updateValues(c, e);
    num_click("+8", event);
}

function grandmaster(c, e, event) {
    c += 9;
    e -= 9;
    updateValues(c, e);
    num_click("+9", event);
}

function lord(c, e, event) {
    c += 10;
    e -= 10;
    updateValues(c, e);
    num_click("+10", event);
}

function updateValues(c, e) {
    coin.innerText = formatNumber(c);
    energy.innerHTML = e;
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
    let currentCoins = parseInt(coin.innerText.replace(/,/g, '')); // Remove commas from formatted number
    let levelMaxValues = [2999, 4999, 6999, 8999, 10999, 12999, 15999, 18999, 29999];
    let levelNames = ["Bronze", "Silver", "Gold", "Platinum", "Diamond", "Epic", "Legendary", "Master", "Grandmaster", "Lord"];
    let levelIndex = levelNames.findIndex(name => name === rank_name.innerHTML);

    if (levelIndex !== -1) {
        let maxValue = levelMaxValues[levelIndex];
        let progress = (currentCoins / maxValue) * 100;
        bar.style.width = `${progress}%`;

        if (progress >= 100) {
            alert(`Congratulations! You've completed the ${rank_name.innerHTML} level!`);
        }
    }
}

function saveProgress() {
    let na = localStorage.getItem("name").toLowerCase(); // Convert to lowercase
    let userData = {
        username: username.innerHTML,
        coins: parseInt(coin.innerText.replace(/,/g, '')),
        energy: parseInt(energy.innerHTML),
        rankName: rank_name.innerHTML,
        rankNum: rank_num.innerHTML,
        energy2: energy2.innerHTML,
        boltSrc: bolt.src,
        clickSrc: click.src
    }
    localStorage.setItem(na, JSON.stringify(userData));
}
