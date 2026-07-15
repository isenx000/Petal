const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('addpet')
        .setDescription('Addpet'),
    async execute(client, interaction, args) {


    const pet = interaction.options.getString('pet');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Pets) {
                if (data.Pets.includes(pet)) {
                    return client.errNormal({ error: `That pet is already exists in your database!`, type: 'editreply' }, interaction);
                }
                data.Pets.push(pet);
                data.save();
            }
            else {
                data.Pets = pet;
                data.save();
            }
            client.succNormal({
                text: "Added your pet",
                fields: [{
                    name: "🐶┆Pet",
                    value: `\`\`\`${pet}\`\`\``,
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
