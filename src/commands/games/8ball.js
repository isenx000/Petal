const { SlashCommandBuilder, EmbedBuilder, codeBlock } = require('discord.js');

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Ask the 8ball a question')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('Your question for the 8ball')
                .setRequired(true)),
    async execute(client, interaction, args) {

        const responses = [
            "Yes!",
            "Unfortunately not",
            "You are absolutely right!",
            "No, sorry.",
            "I agree",
            "No idea!",
            "I am not that smart ..",
            "My sources say no!",
            "It is certain",
            "You can rely on it",
            "Probably not",
            "Everything points to a no",
            "No doubt",
            "Absolutely",
            "I do not know"
        ];

        const result = Math.floor(Math.random() * responses.length);

        // Detect whether this is a slash command interaction
        const isSlashCommand = !!interaction.options;

        const question = isSlashCommand
            ? interaction.options.getString('question')
            : args.join(' ');

        if (!question) {
            if (isSlashCommand) {
                return interaction.reply({
                    content: 'Please provide a question!',
                    ephemeral: true
                });
            }

            return interaction.channel.send('Please provide a question!');
        }

        const embed = new EmbedBuilder()
            .setTitle(`${client.emotes.normal.ball}・8ball`)
            .setDescription('See the answer on your question!')
            .addFields(
                {
                    name: '💬┆Your Question',
                    value: `${codeBlock(question)}`,
                    inline: false
                },
                {
                    name: '🤖┆Bot Answer',
                    value: `${codeBlock(responses[result])}`,
                    inline: false
                }
            );

        if (isSlashCommand) {
            await interaction.reply({ embeds: [embed] });
        } else {
            await interaction.channel.send({ embeds: [embed] });
        }
    }
};