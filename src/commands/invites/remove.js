const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('invites-remove')
        .setDescription('Invites Remove'),
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
        data.Invites -= amount;
        data.Total -= amount;
        data.save();
    }
    else {
        return client.errNormal({
            error: `No invite data found for ${user}`,
            type: 'editreply'
        }, interaction);
    }

    client.succNormal({
        text: `Removed **${amount}** invites from ${user}`,
        fields: [
            {
                name: "📨┆Total invites",
                value: `${data.Invites}`,
                inline: true,
            }
        ],
        type: 'editreply'
    }, interaction);
    }
};
