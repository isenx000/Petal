const { SlashCommandBuilder } = require('discord.js');

// const { } = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('antispam')
        .setDescription('Antispam'),
    async execute(client, interaction, args) {

    const boolean = interaction.options.getBoolean('active');

    const data = await Schema.findOne({ Guild: interaction.guild.id });
    if (data) {
        data.AntiSpam = boolean;
        data.save();
    }
    else {
        new Schema({
            Guild: interaction.guild.id,
            AntiSpam: boolean,
        }).save();
    }

    client.succNormal({
        text: `Anti spam is now **${boolean ? 'enabled' : 'disabled'}** in this guild`,
        type: 'editreply'
    }, interaction);
    }
};
