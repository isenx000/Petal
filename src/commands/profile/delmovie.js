const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('delmovie')
        .setDescription('Delmovie'),
    async execute(client, interaction, args) {


    const movie = interaction.options.getString('movie');
    const user = { User: interaction.user.id }

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Movies) {
                if (!data.Movies.includes(movie)) {
                    return client.errNormal({ error: `That movie doesn't exist in the database!`, type: 'editreply' }, interaction);
                }

                const filtered = data.Movies.filter((target) => target !== movie);

                await Schema.findOneAndUpdate(user, {
                    Movies: filtered
                });
            }
            client.succNormal({
                text: "Removed your movie",
                fields: [{
                    name: "🎬┆Movies",
                    value: `\`\`\`${movie}\`\`\``,
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
