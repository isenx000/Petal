const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Avatar'),
    async execute(client, interaction, args) {

  const user = interaction.options.getUser('user') || interaction.user;

  client.embed({
    title: `🖼・User avatar`,
    image: user.displayAvatarURL({ dynamic: false, size: 1024 }),
    type: 'editreply'
  }, interaction)
    }
};
