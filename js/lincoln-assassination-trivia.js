/*jslint browser: true, devel: true, indent: 4, maxlen: 85, todo: true */

var lincolnsBirthPlace,
    lincolnsAssassin,
    main,
    moveToQuestion2,
    moveToQuestion3,
    nameContainer,
    requestUsersName,
    showUsersName,
    submitLincolnsBirthPlace,
    submitNameOfLincolnsAssassin,
    submitUsersName,
    usersName,
    whereWasLincolnBornQuestionContainer,
    whoAssassinatedLincolnQuestionContainer;

/**
 * SHOW MAIN
 *
 * Reveals the <main> element, then, after 50 milliseconds, adds a class that
 * triggers a transition—thus the name—via CSS.
 */
function showMain() {
    "use strict";

    main.style.display = "block";

    setTimeout(
        function () {
            main.setAttribute("class", "transition");
        },
        50
    );
}

/**
 * SHOW QUESTION “WHERE WAS LINCOLN BORN?”
 *
 * The question “Where Was Lincoln Born?” and the <form> used to answer it are both
 * wrapped in a <section> container, which is turned off by default; that is,
 * display is set to “none” in the CSS. This function simply reveals that container.
 */
function showQuestionWhereWasLincolnBorn() {
    "use strict";

    whereWasLincolnBornQuestionContainer.style.display = "block";
}

/**
 *
 */
function showQuestionWhoAssassinatedLincoln() {
    "use strict";

    whoAssassinatedLincolnQuestionContainer.style.display = "block";
    submitLincolnsBirthPlace.style.display = "none";
    moveToQuestion2.style.display = "none";
    lincolnsBirthPlace.setAttribute("disabled", "disabled");
}

/**
 *
 */
function showResults() {
    "use strict";

    submitNameOfLincolnsAssassin.style.display = "none";
    moveToQuestion3.style.display = "none";
    lincolnsAssassin.setAttribute("disabled", "disabled");
}

/**
 *
 */
function checkAnswerToLincolnsBirthPlaceQuestion() {
    "use strict";

    var aside =
            whereWasLincolnBornQuestionContainer.getElementsByTagName("aside")[0],
        p = aside.getElementsByTagName("p")[0],
        moveToQuestion2 = document.getElementById("move-to-question-2");

    switch (lincolnsBirthPlace.value) {
    case "lansing":
        aside.classList.remove("transition");
        setTimeout(
            function () {
                p.innerHTML = '<span class="fa fa-remove"></span> You chose ' +
                    'Lansing, Michigan. This is incorrect, as Lansing wasn’t ' +
                    'settled until 1835, years after Lincoln’s birth.';
                aside.setAttribute("class", "transition");
            },
            250
        );

        break;

    case "hodgenville":
        aside.classList.remove("transition");
        setTimeout(
            function () {
                p.innerHTML = '<span class="fa fa-check"></span> Hodgenville, ' +
                    'Kentucky is correct!';
                aside.setAttribute("class", "transition");
                moveToQuestion2.style.display = "inline";
                setTimeout(
                    function () {
                        moveToQuestion2.setAttribute("class", "transition");
                    },
                    20
                );
            },
            250
        );

        break;

    case "washington":
        aside.classList.remove("transition");
        setTimeout(
            function () {
                p.innerHTML = '<span class="fa fa-remove"></span> Although ' +
                    'Washington <abbr title="District of Columbia">DC</abbr> ' +
                    'eventually becomes his home, Lincoln was not born here.';
                aside.setAttribute("class", "transition");
            },
            250
        );

        break;
    }
}

/**
 *
 */
function checkAnswerToLincolnsAssassinQuestion() {
    "use strict";

    var aside =
            whoAssassinatedLincolnQuestionContainer.getElementsByTagName("aside")[0],
        p = aside.getElementsByTagName("p")[0],
        moveToQuestion3 = document.getElementById("move-to-question-3");

    switch (lincolnsAssassin.value) {
    case "lee-oswald":
        aside.classList.remove("transition");
        setTimeout(
            function () {
                p.innerHTML = '<span class="fa fa-remove"></span> Lee Harvey ' +
                    'Oswald did assassinate a president, but it wasn’t Lincoln. ' +
                    'He took the life of John F Kennedy on 22 November 1963.';
                aside.setAttribute("class", "transition");
            },
            250
        );

        break;
    case "john-booth":
        aside.classList.remove("transition");
        setTimeout(
            function () {
                p.innerHTML = '<span class="fa fa-check"></span> Indeed, the ' +
                    'actor John Wilkes Booth killed Lincoln in a cowardly act, ' +
                    'shooting the president from behind.';
                aside.setAttribute("class", "transition");
                moveToQuestion3.style.display = "inline";
                setTimeout(
                    function () {
                        moveToQuestion3.setAttribute("class", "transition");
                    },
                    20
                );
            },
            250
        );

        break;
    case "john-hinckley":
        aside.classList.remove("transition");
        setTimeout(
            function () {
                p.innerHTML = '<span class="fa fa-remove"></span> John Hinckley ' +
                    'Jr never killed a president, but he attempted to assassinate ' +
                    'Ronald Reagan in 1981.';
                aside.setAttribute("class", "transition");
            },
            250
        );

        break;
    }
}

/**
 *
 */
function setUsersName() {
    "use strict";

    if (usersName.value === "") {
        showUsersName.innerHTML = "<span class=\"error-highlight\">Nothing " +
            "entered. Please try again.</span>";

    } else {
        showUsersName.textContent = "Hi, " + usersName.value;
        nameContainer.style.display = "none";
        showMain();
        showQuestionWhereWasLincolnBorn();

        setTimeout(
            function () {
                showUsersName.setAttribute("class", "transition");
            },
            50
        );
    }
}

/**
 *
 */
window.onload = function () {
    "use strict";

    lincolnsBirthPlace = document.getElementById("lincolns-birth-place");
    lincolnsAssassin = document.getElementById("lincolns-assassin");
    main = document.getElementsByTagName("main")[0];
    moveToQuestion2 = document.getElementById("move-to-question-2");
    moveToQuestion3 = document.getElementById("move-to-question-3");
    nameContainer = document.getElementById("name-container");
    requestUsersName = document.getElementById("request-users-name");
    showUsersName = document.getElementById("show-users-name");
    submitLincolnsBirthPlace = document.getElementById(
        "submit-lincolns-birth-place"
    );
    submitNameOfLincolnsAssassin = document.getElementById(
        "submit-name-of-lincolns-assassin"
    );
    submitUsersName = document.getElementById("submit-users-name");
    usersName = document.getElementById("users-name");
    whereWasLincolnBornQuestionContainer = document.getElementById(
        "where-was-lincoln-born-question-container"
    );
    whoAssassinatedLincolnQuestionContainer = document.getElementById(
        "who-assassinated-lincoln-question-container"
    );

    submitUsersName.addEventListener(
        "click",
        setUsersName,
        false
    );

    submitNameOfLincolnsAssassin.addEventListener(
        "click",
        checkAnswerToLincolnsAssassinQuestion,
        false
    );

    submitLincolnsBirthPlace.addEventListener(
        "click",
        checkAnswerToLincolnsBirthPlaceQuestion,
        false
    );

    moveToQuestion2.addEventListener(
        "click",
        showQuestionWhoAssassinatedLincoln,
        false
    );

    moveToQuestion3.addEventListener(
        "click",
        showResults,
        false
    );
};
