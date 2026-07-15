const { SlashCommandBuilder, WebhookClient } = require('discord.js');

// const {} = require('discord.js');

const webhookClientLogs = new WebhookClient({
    id: "",
    token: "",
});

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('credits')
        .setDescription('Credits'),
    async execute(client, interaction, args) {

    const type = interaction.options.getString('type');
    const user = interaction.options.getUser('user');
    const amount = interaction.options.getNumber('amount');

    if (type == "add") {
        Schema.findOne({ User: user.id }, async (err, data) => {
            if (data) {
                data.Credits += amount;
                data.save();
            }
            else {
                new Schema({
                    User: user.id,
                    Credits: amount
                }).save();
            }
        })

        client.succNormal({
            text: `Added **${amount} credits** to ${user}`,
            type: 'editreply'
        }, interaction);

        let embedLogs = new Discord.EmbedBuilder()
            .setTitle(`🪙・Credits added`)
            .setDescription(`Added credits to ${user} (${user.id})`)
            .addFields(
                { name: "👤┆Added By", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
                { name: "🔢┆Amount", value: `${amount}`, inline: true },
            )
            .setColor(client.config.colors.normal)
            .setTimestamp();
        webhookClientLogs.send({
            username: 'Bot Credits',
            embeds: [embedLogs],
        });
    }
    else if (type == "remove") {
        Schema.findOne({ User: user.id }, async (err, data) => {
            if (data) {
                data.Credits -= amount;
                data.save();
            }
        })

        client.succNormal({
            text: `Removed **${amount} credits** from ${user}`,
            type: 'editreply'
        }, interaction);

        let embedLogs = new Discord.EmbedBuilder()
            .setTitle(`🪙・Credits removed`)
            .setDescription(`Removed credits from ${user} (${user.id})`)
            .addFields(
                { name: "👤┆Removed By", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
                { name: "🔢┆Amount", value: `${amount}`, inline: true },
            )
            .setColor(client.config.colors.normal)
            .setTimestamp();
        webhookClientLogs.send({
            username: 'Bot Credits',
            embeds: [embedLogs],
        });
    }
    }
};
