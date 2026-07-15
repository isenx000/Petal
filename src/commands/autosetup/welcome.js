const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('welcome')
        .setDescription('Welcome'),
    async execute(client, interaction, args) {

    const choice = interaction.options.getString('setup');

    if (choice == "welcomechannel") {
        interaction.guild.channels.create({
            name: "Welcome",
            type: Discord.ChannelType.GuildText
        }).then((ch) => {
            client.createChannelSetup(welcomeChannel, ch, interaction)
        })
    }

    if (choice == "welcomerole") {
        interaction.guild.roles.create({
            name: 'Member',
            color: client.config.colors.normal
        }).then((rl) => {
            client.createRoleSetup(welcomeRole, rl, interaction)
        })
    }

    if (choice == "leavechannel") {
        interaction.guild.channels.create({
            name: "Bye",
            type: Discord.ChannelType.GuildText
        }).then((ch) => {
            client.createChannelSetup(leaveChannel, ch, interaction)
        })
    }
    }
};
