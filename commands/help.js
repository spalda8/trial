const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "Shows all the commands of this bot.",
  usage: "(command name)",
  cooldown: 3,
  async execute(message, args, prefix) {
    console.log(args);
    if (args.length === 0 || args[0] === "" || args === undefined) {
      const helpEmbed = new Discord.MessageEmbed()
      .setTitle("Commands");
      message.channel.send(helpEmbed);
    } else {
      try {
        const command = require(`${__dirname}/${args}.js`);
      } catch {
        message.reply("Command not found!");
        return;
      }
      let arg, usage;
      const command = require(`${__dirname}/${args}.js`);
      if (command.args) {
        arg = "True";
      } else {
        arg = "False";
      }
      if (command.usage) {
        usage = command.usage;
      } else {
        usage = "No usage specified.";
      }
      const commandEmbed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle(`${prefix}${command.name}`)
        .setDescription(`${command.description}`)
        .addField("**Arguments**", arg)
        .addField("**Usage**", "`" + usage + "`")
        .addField("**Cooldown**", command.cooldown + "s");

      message.channel.send(commandEmbed);
      console.log(command);
    }
  },
};
