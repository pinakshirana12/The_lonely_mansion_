const story = document.getElementById("story");
function horrorEffect() {

    document.body.classList.add("shake");
    document.body.classList.add("blood");

    setTimeout(() => {

        document.body.classList.remove("shake");
        document.body.classList.remove("blood");

    }, 600);
}
const choices = document.getElementById("choices");
const statusText = document.getElementById("status");


function showScene(title, text, buttons) {

    story.innerHTML = `
        <h2>${title}</h2>
        ${text}
    `;

    choices.innerHTML = "";

    buttons.forEach(button => {

        const btn = document.createElement("button");

        btn.innerHTML = button.text;

        btn.onclick = button.action;

        choices.appendChild(btn);

    });
}


// START

function startGame() {

    showScene(

        "The Long Drive",

        `
        <p>
        Lisna, Avi, Pinu and Berry get into their car.
        </p>

        <p>
        The night is unusually quiet.
        </p>

        <p>
        After driving for a while,
        Berry suddenly notices a strange sign.
        </p>

        <p>
        <strong>555 — SHORTCUT</strong>
        </p>
        `,

        [
            {
                text: "🚗 Take the 555 Shortcut",
                action: shortcut
            },

            {
                text: "🛣️ Continue on the main road",
                action: mainRoad
            }
        ]
    );
}


// MAIN ROAD

function mainRoad() {

    showScene(

        "Something Is Wrong...",

        `
        <p>
        They continue driving.
        </p>

        <p>
        Suddenly, the car begins to slow down.
        </p>

        <p>
        The road ahead disappears into darkness.
        </p>
        `,

        [
            {
                text: "🔄 Turn back",
                action: turnBack
            },

            {
                text: "🚗 Take the 555 Shortcut",
                action: shortcut
            }
        ]
    );
}


// SHORTCUT

function shortcut() {

    showScene(

        "The 555 Road",

        `
        <p>
        Lisna decides to take the strange shortcut.
        </p>

        <p>
        Ten minutes pass...
        </p>

        <p>
        Thirty minutes...
        </p>

        <p>
        One hour...
        </p>

        <p>
        Suddenly, the road ends.
        </p>

        <p>
        There is nothing around them.
        </p>

        <p>
        Except one enormous mansion.
        </p>
        `,

        [
            {
                text: "🏚️ Go toward the mansion",
                action: mansion
            }
        ]
    );
}


// TURN BACK

function turnBack() {

    showScene(

        "The Impossible Road",

        `
        <p>
        They turn the car around.
        </p>

        <p>
        After several minutes,
        Lisna notices something terrifying.
        </p>

        <p>
        The same <strong>555 sign</strong>
        is standing in front of them.
        </p>

        <p>
        They haven't moved.
        </p>
        `,

        [
            {
                text: "🏚️ Go to the mansion",
                action: mansion
            }
        ]
    );
}


// MANSION

function mansion() {

    showScene(

        "The Lonely Mansion",

        `
        <p>
        The mansion stands alone in the darkness.
        </p>

        <p>
        Pinu becomes frightened.
        </p>

        <p>
        "No. I'm not going inside."
        </p>

        <p>
        Pinu decides to return home.
        </p>

        <p>
        Berry stays outside with her.
        </p>

        <p>
        Lisna and Avi walk toward the mansion.
        </p>
        `,

        [
            {
                text: "🚪 Enter the mansion",
                action: enterMansion
            }
        ]
    );
}


// ENTER MANSION

function enterMansion() {

    showScene(

        "Inside the Mansion",

        `
        <p>
        Lisna slowly opens the enormous wooden door.
        </p>

        <p>
        <strong>CREAAAAK...</strong>
        </p>

        <p>
        The door closes behind them.
        </p>

        <p>
        There is complete silence.
        </p>
        `,

        [
            {
                text: "🔦 Search the room",
                action: searchRoom
            },

            {
                text: "🚪 Look for an exit",
                action: searchExit
            }
        ]
    );
}


// SEARCH ROOM

function searchRoom() {
horrorEffect();


    showScene(

        "The Empty Room",

        `
        <p>
        Lisna looks around.
        </p>

        <p>
        There is an old table,
        a broken mirror and a locked door.
        </p>

        <p>
        Lisna turns around.
        </p>

        <p>
        <strong>Avi is gone.</strong>
        </p>
        `,

        [
            {
                text: "😨 Call Avi",
                action: callAvi
            },

            {
                text: "🔍 Search for clues",
                action: clues
            }
        ]
    );
}


// SEARCH EXIT

function searchExit() {

    showScene(

        "The Locked Door",

        `
        <p>
        Lisna tries the entrance door.
        </p>

        <p>
        It won't open.
        </p>

        <p>
        Suddenly...
        </p>

        <p>
        Someone whispers:
        </p>

        <p>
        <strong>"Lisna..."</strong>
        </p>
        `,

        [
            {
                text: "🔍 Follow the voice",
                action: clues
            }
        ]
    );
}


// CALL AVI

function callAvi() {
horrorEffect();

    showScene(

        "No Answer",

        `
        <p>
        "AVI!"
        </p>

        <p>
        Lisna screams his name.
        </p>

        <p>
        Nothing.
        </p>

        <p>
        Then...
        </p>

        <p>
        <strong>Knock... Knock... Knock...</strong>
        </p>
        `,

        [
            {
                text: "🔍 Follow the sound",
                action: clues
            }
        ]
    );
}


// CLUES

function clues() {

    showScene(

        "The Photograph",

        `
        <p>
        Lisna finds an old photograph.
        </p>

        <p>
        It shows three people standing
        outside the mansion.
        </p>

        <p>
        On the back, someone has written:
        </p>

        <p>
        <strong>
        "THE HOUSE TAKES ONE EVERY FRIDAY."
        </strong>
        </p>
        `,

        [
            {
                text: "🕯️ Continue searching",
                action: hiddenRoom
            }
        ]
    );
}


// HIDDEN ROOM

function hiddenRoom() {

    showScene(

        "The Hidden Door",

        `
        <p>
        Lisna notices something strange
        about the broken mirror.
        </p>

        <p>
        She moves it.
        </p>

        <p>
        Behind the mirror is a hidden door.
        </p>

        <p>
        On the door is the number:
        </p>

        <h2>555</h2>

        <p>
        Suddenly, Lisna hears Avi.
        </p>

        <p>
        <strong>
        "Lisna... help me..."
        </strong>
        </p>
        `,

        [
            {
                text: "🚪 Enter the hidden room",
                action: finalRoom
            }
        ]
    );
}


// FINAL ROOM

function finalRoom() {
horrorEffect();

    showScene(

        "Avi!",

        `
        <p>
        Lisna enters the room.
        </p>

        <p>
        Avi is trapped inside.
        </p>

        <p>
        But there is something standing behind him.
        </p>

        <p>
        A dark figure slowly turns toward Lisna...
        </p>
        `,

        [
            {
                text: "🏃 Run with Avi",
                action: escape
            },

            {
                text: "👻 Face the figure",
                action: ghost
            }
        ]
    );
}


// ESCAPE ENDING

function escape() {

    showScene(

        "RUN!",

        `
        <p>
        Lisna grabs Avi's hand.
        </p>

        <p>
        They run through the mansion.
        </p>

        <p>
        The front door suddenly opens.
        </p>

        <p>
        They escape into the darkness.
        </p>

        <h2>TO BE CONTINUED...</h2>
        `,

        [
            {
                text: "🔄 Play Again",
                action: startGame
            }
        ]
    );

    statusText.innerHTML =
        "ENDING 1 — THE ESCAPE";
}


// GHOST ENDING

function ghost() {
horrorEffect();

    showScene(

        "The Figure",

        `
        <p>
        Lisna looks directly at the figure.
        </p>

        <p>
        Suddenly, the lights go out.
        </p>

        <p>
        When they come back...
        </p>

        <p>
        <strong>Avi is gone again.</strong>
        </p>

        <p>
        The mansion door slams shut.
        </p>
        `,

        [
            {
                text: "🔄 Try Again",
                action: startGame
            }
        ]
    );

    statusText.innerHTML =
        "ENDING 2 — THE MANSION WINS";
}