const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "gay",
    description: "use this command if you're gay",
    usage: "[gay]",
    aliases: ["gay"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37088832;
    
    let invite = new MessageEmbed()
    .setTitle(`Congrats`)
    .setDescription(`u are gay`)
    .setColor("#f2ee77")
    return message.channel.send(invite);
  },
};