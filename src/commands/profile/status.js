const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Status'),
    async execute(client, interaction, args) {


    const status = interaction.options.getString('text');

    if (status.length > 30) return client.errNormal({ error: "Your status cannot be longer than 30 characters", type: 'editreply' }, interaction);

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            data.Status = status;
            data.save();

            client.succNormal({
                text: "Your status is set",
                fields: [{
                    name: "😎┆Status",
                    value: `\`\`\`${status}\`\`\``,
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
