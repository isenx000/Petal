const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('addactor')
        .setDescription('Addactor'),
    async execute(client, interaction, args) {


    const actor = interaction.options.getString('actor');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Actors) {
                if (data.Actors.includes(actor)) {
                    return client.errNormal({ error: `That actor is already exists in your database!`, type: 'editreply' }, interaction);
                }
                data.Actors.push(actor);
                data.save();
            }
            else {
                data.Actors = actor;
                data.save();
            }
            client.succNormal({
                text: "Added your actor",
                fields: [{
                    name: "👨‍🎤┆Actor",
                    value: `\`\`\`${actor}\`\`\``,
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
