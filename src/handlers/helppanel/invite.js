// const {} = require('discord.js');

module.exports = async (client) => {
    // client.on(Discord.Events.InteractionCreate, async (interaction) => {
    //     if (!interaction.isStringSelectMenu()) return;

    //     if (interaction.customId == "Bot-helppanel") {
    //         if (interaction.values == "invite-Bothelp") {
    //             interaction.deferUpdate();

    //             const row2 = new Discord.ActionRowBuilder()
    //                 .addComponents( 
    //                     new Discord.StringSelectMenuBuilder()
    //                         .setCustomId('Bot-helppanel')
    //                         .setPlaceholder('❌┆Nothing selected')
    //                         .addOptions([
    //                             {
    //                                 label: `Commands`,
    //                                 description: `Show the commands of ${client.user.username}!`,
    //                                 emoji: "💻",
    //                                 value: "commands-Bothelp",
    //                             },
    //                             {
    //                                 label: `Invite`,
    //                                 description: `Invite ${client.user.username} to your server`,
    //                                 emoji: "📨",
    //                                 value: "invite-Bothelp",
    //                             },
    //                             {
    //                                 label: `Support server`,
    //                                 description: `Join the suppport server`,
    //                                 emoji: "❓",
    //                                 value: "support-Bothelp",
    //                             },
    //                             {
    //                                 label: `Changelogs`,
    //                                 description: `Show the ${client.user.username} bot changelogs`,
    //                                 emoji: "📃",
    //                                 value: "changelogs-Bothelp",
    //                             },
    //                         ]),
    //                 );

    //             let row = new Discord.ActionRowBuilder()
    //                 .addComponents(
    //                     new Discord.ButtonBuilder()
    //                         .setLabel("Invite")
    //                         .setURL(client.config.discord.botInvite)
    //                         .setStyle(Discord.ButtonStyle.Link),

    //                     new Discord.ButtonBuilder()
    //                         .setLabel("Support server")
    //                         .setURL(client.config.discord.serverInvite)
    //                         .setStyle(Discord.ButtonStyle.Link),
    //                 );

    //             client.embed({
    //                 title: `📨・Invite`,
    //                 desc: `Make your server even better with the ${client.user.username} bot!`,
    //                 image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/dbot_banner_invite.jpg",
    //                 url: client.config.discord.botInvite,
    //                 components: [row2, row],
    //                 type: 'edit'
    //             }, interaction.message)
    //         }
    //     }
    // }).setMaxListeners(0);
}

 