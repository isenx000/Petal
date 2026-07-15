const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('hourly')
        .setDescription('Hourly'),
    async execute(client, interaction, args) {

    let user = interaction.user;
    let timeout = 3600000;
    let amount = 10;

    Schema2.findOne({ Guild: interaction.guild.id, User: user.id }, async (err, dataTime) => {
        if (dataTime && dataTime.Hourly !== null && timeout - (Date.now() - dataTime.Hourly) > 0) {
            let time = (dataTime.Hourly / 1000 + timeout / 1000).toFixed(0);
            return client.errWait({
                time: time,
                type: 'editreply'
            }, interaction);
        }
        else {

            client.succNormal({
                text: `You've collected your hourly reward!`,
                fields: [
                    {
                        name: `${client.emotes.economy.coins}┆Amount`,
                        value: `$${amount}`,
                        inline: true
                    }
                ],
                type: 'editreply'
            }, interaction);

            if (dataTime) {
                dataTime.Hourly = Date.now();
                dataTime.save();
            }
            else {
                new Schema2({
                    Guild: interaction.guild.id,
                    User: user.id,
                    Hourly: Date.now()
                }).save();
            }

            client.addMoney(interaction, user, amount);
        }
    })
    }
};
