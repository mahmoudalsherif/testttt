var qoutArray = [

    {
        line : "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {
        line : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author: "― Dr. Seuss"
    },
    {
        line : "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi"
    },
    {
        line : "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {
        line : "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain"
    },
    {
        line : "“Without music, life would be a mistake.”",
        author: "― Friedrich Nietzsche, Twilight of the Idols"
    },

];

var perindex; 

var genqout = function(){
    var randomindex = Math.floor(Math.random()*qoutArray.length);
    if (perindex === genqout) {
        randomindex=(randomindex +1 ) %5;
        
    }
    perindex = randomindex ;
    document.getElementById("quote").innerHTML= qoutArray[randomindex].line
    document.getElementById("author").innerHTML= qoutArray[randomindex].author
    console.log(randomindex);
}