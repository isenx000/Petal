const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('profile-delete')
        .setDescription('Profile Delete'),
    async execute(client, interaction, args) {


    Schema.findOne({ User: interaction.user.id }, async (err, data) => {

        if (data) {
            Schema.findOneAndDelete({ Guild: interaction.guild.id, User: interaction.user.id }).then(() => {
                client.succNormal({
                    text: "Your profile was deleted!",
                    type: 'editreply'
                }, interaction);
            })
        }
        else {
            client.errNormal({
                error: 'No profile found!',
                type: 'editreply'
            }, interaction)
        }
    })
    }
};
