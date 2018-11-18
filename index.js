const discord = require("discord.js");
const randomWord = require("random-words")
 
const TOKEN = "NTEyMzA2OTU2MTU3OTc2NTc5.DtMkVg.8VX3g6Qw0pz9nI91d1SUmPjHNkw";
 
const bot = new discord.Client();
 
bot.on("ready",()=>{
    console.log("Ready!");
    var server = bot.guilds.find("id","512597206071509002")
    var chan = new discord.TextChannel(server,{"id":"513755810665594914"});
    bot.setInterval(()=>
    {
        chan.send("a")
        });
 
    },20000);
 
bot.login(TOKEN);
 
// You can run the program by typing node index in cmd
// The program starts after the time interval is once over
// That's all
// You can press CTRL + C in command prompt to stop the program
// Mine won't stop cause I used a host to keep it alive 24/7
// You can search how to host a node.js app on YouTube.