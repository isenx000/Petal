const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('deleteitem')
        .setDescription('Deleteitem'),
    async execute(client, interaction, args) {

    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    const role = interaction.options.getRole('role');

    if (!role) return client.errUsage({ usage: "deleteitem [role]", type: 'editreply' }, interaction);

    store.findOne({ Guild: interaction.guild.id, Role: role.id }, async (err, storeData) => {
        if (storeData) {

            var remove = await store.deleteOne({ Guild: interaction.guild.id, Role: role.id });

            client.succNormal({
                text: `The role was deleted from the store`,
                fields: [
                    {
                        name: `🛒┆Role`,
                        value: `${role}`
                    }
                ],
                type: 'editreply'
            }, interaction);
        }
        else {

            client.errNormal({
                error: `This role is not in the store!`,
                type: 'editreply'
            }, interaction);
        }
    })
    }
};
