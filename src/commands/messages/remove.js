const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('messages-remove')
        .setDescription('Messages Remove'),
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
        data.Messages -= amount;
        await data.save();
    }
    else {
        return client.errNormal({
            error: `No message data found for ${user}`,
            type: 'editreply'
        }, interaction);
    }

    client.succNormal({
        text: `Removed **${amount}** messages from ${user}`,
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
