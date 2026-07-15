const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('addhobby')
        .setDescription('Addhobby'),
    async execute(client, interaction, args) {


    const hobby = interaction.options.getString('hobby');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Hobbys) {
                if (data.Hobbys.includes(hobby)) {
                    return client.errNormal({ error: `That hobby is already exists in your database!`, type: 'editreply' }, interaction);
                }
                data.Hobbys.push(hobby);
                data.save();
            }
            else {
                data.Hobbys = hobby;
                data.save();
            }
            client.succNormal({
                text: "Added your hobby",
                fields: [{
                    name: "⚽┆Hobby",
                    value: `\`\`\`${hobby}\`\`\``,
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
