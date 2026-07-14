const {} = require('discord.js');

module.exports = async (client, interaction, args) => {
    const role = interaction.options.getRole('role');

    client.createRoleSetup(welcomeRole, role, interaction)
}

 