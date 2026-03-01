// This is needed to know where to go
const apiBaseUrl = "https://gray-bush-02b9c4a10.2.azurestaticapps.net";

// "Waking up" The server is being awoken
async function WakeUpServer() {
    try {
        await fetch(`${apiBaseUrl}/roll?dice=1d6`);
        console.log("Server is awake!");
    } catch (error) {
        console.error("Error waking up the server:", error);
    }
}

window.addEventListener("load", WakeUpServer);

// Rolling just one die
// This is needed to role all the die
async function rollSingleDie() {
    try {
        const response = await fetch(`${apiBaseUrl}/roll?dice=1d6`);
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error("Error rolling the die:", error);
        return null;
    }
}

// Now we roll all the die and then update it 
async function rollMultipleDice() {
    for (let i=1; i<=5; i++) {
        const roll = await rollSingleDie();
        if (roll !== null) {
            document.getElementById("die" + i).value = roll;
            document.getElementById("img" + i).src = "DiceImages/" + roll + ".png";
        } else {
            document.getElementById("die" + i).value = "Error";
        }
    }
}

// The button needs to roll the die however it needs to connect
document.getElementById("RollButton").addEventListener("click", rollMultipleDice);