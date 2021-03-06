let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "jsem jen BOT" }})
})
client.on("message", message=> {
  if (message.content === "ping")
    message.channel.send("pong")
  
if(message.content === "bohous") {
  message.channel.send("je best")
}
  
  
if(message.content === "brmbrmbrm") {
  message.channel.send("jede auto brm brm brm")
} 
  
  
  
  
client.on("guildMemberAdd", member => {
  if(member.guild.id === "789454939100282900") {
    client.channels.cache.get("810299203690954772").send(`Welcome ${member}!`)
  }
})
  
  
  
})
client.login("ODE3NjcxNDc1ODM3NTM0MjQw.YEM55w.GFbwItaelKAn1OLUuJs5-UPubCk")

