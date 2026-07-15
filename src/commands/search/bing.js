const { SlashCommandBuilder, EmbedBuilder, inlineCode } = require('discord.js');

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('bing')
        .setDescription('Bing')
        .addStringOption(option => 
            option.setName(`query`)
                .setDescription(`Search Query`)
                .setRequired(true)
        ),
    async execute(client, interaction, args) {

        const isSlashCommand = !!interaction.options;

        const query = isSlashCommand
            ? interaction.options.getString('query')
            : args.join(' ')

        if (!query) {
            if (isSlashCommand) {
                return interaction.reply({
                    content: 'Please provide a query!',
                    ephemeral: true
                })
            }

            return interaction.channel.send('Please provide a query!');
        }
        
        let url = `https://www.bing.com/search?q=${query}`;

        const embed = new EmbedBuilder()
            .setTitle(`I have found the following for: ${inlineCode(query)}`)
            .addFields(
                {
                    name: `🔗┇Link`,
                    value: `[Click here to see the link](${url})`,
                    inline: true,
                }
            )

        if (isSlashCommand) {
            await interaction.reply({ embeds: [embed] })
        } else {
            await interaction.channel.send({ embeds: [embed] })
        }
    }
};
