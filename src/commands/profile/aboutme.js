const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('aboutme')
        .setDescription('Aboutme'),
    async execute(client, interaction, args) {


    const aboutme = interaction.options.getString('text');

    if (aboutme.length > 1024) return client.errNormal({ error: "Your about me cannot be longer than 1024 characters", type: 'editreply' }, interaction);

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            data.Aboutme = aboutme;
            data.save();

            client.succNormal({
                text: "Your about me is set",
                fields: [{
                    name: "📘┆About Me",
                    value: `\`\`\`${aboutme}\`\`\``,
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
