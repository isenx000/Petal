const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('profile-create')
        .setDescription('Profile Create'),
    async execute(client, interaction, args) {

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            return client.errNormal({ error: "You already have a Bot profile", type: "editreply" }, interaction);
        }
        else {
            new Schema({
                User: interaction.user.id
            }).save();

            client.succNormal({ text: "Profile created! View your profile by running \`profile\`", type: "editreply" }, interaction);
        }
    })
    }
};
