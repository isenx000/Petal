const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('origin')
        .setDescription('Origin'),
    async execute(client, interaction, args) {


    const country = interaction.options.getString('country');

    if (country.length > 50) return client.errNormal({ error: "Your origin cannot be longer than 50 characters", type: 'editreply' }, interaction);

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            data.Orgin = country;
            data.save();

            client.succNormal({
                text: "Your origin is set",
                fields: [{
                    name: "🌍┆Country",
                    value: `\`\`\`${country}\`\`\``,
                    inline: true,
                }],
                type: 'editreply'
            }, interaction);
        }
        else {
            return client.errNormal({ error: "No profile found! Open a profile with createprofile", type:'editreply' }, interaction);
        }
    })
    }
};
