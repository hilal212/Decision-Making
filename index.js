function displayMessage() {
    //get a reference to menu drop down.
    var menuOptions = document.getElementById("menu-options");

    //get a reference to the message text area
    var display = document.getElementById("message");

    var text = '';

    //compare selected option and display the corresponding message
    //accordingly

    if (menuOptions.value === "carol-burnett") {

        text = "Only I can change my life.";
        text += "No one can do it for me.";

    } else if (menuOptions.value === "st-jerome") {

        text = "Good ,better,best.";
        text += "Never let it rest.";
        text = "Till your good is better and your better is best.";

    } else if (menuOptions.value === "eleanor-roosevelt") {
        text = "With the new day comes,";
        text += "new strength and new thoughts.";
    } else if (menuOptions.value === "nelson-mandela") {
        text = "It always seems impossible,";
        text += "until it's done.";

    } else {
        text = "";
    }
    display.value = text;

}




