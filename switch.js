function greetings(wish){
    switch (wish){
        case "gm":
            {
                console.log("Good Morning");
            }
            break;
        case "gf":
            {
                console.log("Good Afternoon");
            }
        case "ge":
            {
                console.log("good Evening");
            }
        case "gn":
            {
                console.log("good Night");
            }
        default:
            {
                console.log("thank you");
            }

    }

}

greetings("gm");