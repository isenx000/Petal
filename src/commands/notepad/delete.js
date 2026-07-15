const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const generator = require('generate-password');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('notepad-delete')
        .setDescription('Notepad Delete'),
    async execute(client, interaction, args) {


    let id = interaction.options.getString('id');

    Schema.findOne({ Guild: interaction.guild.id, Code: id }, async (err, data) => {
        if (data) {
            Schema.findOneAndDelete({ Guild: interaction.guild.id, Code: id }).then(() => {
                client.succNormal({ text: `Note **#${id}** has been deleted!`, type: 'editreply' }, interaction);
            })
        }
        else {
            client.errNormal({ error: `No note found with the id **#${id}**`, type: 'editreply' }, interaction);
        }
    })
    }
};
