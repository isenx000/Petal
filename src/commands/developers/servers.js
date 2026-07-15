const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('servers')
        .setDescription('Servers'),
    async execute(client, interaction, args) {

    var list = "";
    client.guilds.cache.forEach(guild => {
        list += `${guild.name} (${guild.id}) | ${guild.memberCount} members | Owner: ${guild.ownerId}\n`
    })

    const output = new Discord.AttachmentBuilder(Buffer.from(list), { name: 'servers.txt'});
    interaction.editReply({ files: [output] });
    }
};
