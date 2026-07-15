const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('messages-add')
        .setDescription('Messages Add'),
    async execute(client, interaction, args) {

    let user = interaction.options.getUser('user');
    let amount = interaction.options.getNumber('amount');

    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    const data = await Schema.findOne({ Guild: interaction.guild.id, User: user.id });
    if (data) {
        data.Messages += amount;
        await data.save();
    }
    else {
        await new Schema({
            Guild: interaction.guild.id,
            User: user.id,
            Messages: amount,
        }).save();
    }

    client.succNormal({
        text: `Added **${amount}** messages to ${user}`,
        fields: [
            {
                name: "💬┆Total messages",
                value: `${data.Messages}`,
                inline: true,
            }
        ],
        type: 'editreply'
    }, interaction);
    }
};
