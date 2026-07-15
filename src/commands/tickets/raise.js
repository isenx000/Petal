const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('raise')
        .setDescription('Raise'),
    async execute(client, interaction, args) {

    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    ticketSchema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
        if (data) {
            const ticketCategory = interaction.guild.channels.cache.get(data.Category);
            const ticketRole = interaction.guild.roles.cache.get(data.Role);

            if (ticketCategory == undefined) {
                return client.errNormal({
                    error: "Do the setup!",
                    type: 'editreply'
                }, interaction);
            }

            if (interaction.channel.parentId == ticketCategory.id) {

                try {
                    interaction.channel.permissionOverwrites.edit(ticketRole, {
                        ViewChannel: false,
                        SendMessages: false,
                        AttachFiles: false,
                        ReadMessageHistory: false,
                        AddReactions: false
                    });

                    return client.simpleEmbed({
                        desc: `Ticket raised by <@!${interaction.user.id}>`,
                        type: 'editreply'
                    }, interaction)
                }
                catch {
                    client.errNormal({
                        error: "Something went wrong!",
                        type: 'editreply'
                    }, interaction);
                }

            }
            else {
                client.errNormal({
                    error: "This is not a ticket!",
                    type: 'editreply'
                }, interaction);

            }
        }
        else {
            return client.errNormal({
                error: "Do the setup!",
                type: 'editreply'
            }, interaction);
        }
    })
    }
};
