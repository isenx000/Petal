const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');


// This API may be outdated. Replace or update it if you intend to use this command.

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('corona')
        .setDescription('Corona')
        .addStringOption(option =>
            option.setName('country')
            .setDescription('The country to check stats for')
            .setRequired(true)),
    async execute(client, interaction, args) {

        const isSlashCommand = !!interaction.options;

        const country = isSlashCommand
            ? interaction.options.getString('country')
            : args.join(' ');

        if (!country) {
            if (isSlashCommand) {
                return interaction.reply({
                    content: 'Please provide a country!',
                    ephemeral: true
                });
            }

            return interaction.channel.send('Please provide a country!');
        }
        
        const { data: regionData } = await axios.get('https://covid-api.com/api/regions', {
            params: { per_page: 300 }
        });

        const countryMatch = regionData.data.find(r =>
            r.iso.toLowerCase() === country.toLowerCase() ||
            r.name.toLowerCase() === country.toLowerCase()
        );

        if (!countryMatch) {
            if (isSlashCommand) {
                return interaction.reply({
                    content: 'No matching country/ISO code found!',
                    ephemeral: true
                });
            }

            return interaction.channel.send('No matching country/ISO code found!');
        }

        const { data: reportData } = await axios.get('https://covid-api.com/api/reports/total', {
            params: { iso: countryMatch.iso }
        });

        let countryData = reportData.data;

        console.log(countryData)
        
        const confirmed = countryData.confirmed.toLocaleString()
        const recovered = countryData.recovered.toLocaleString()
        const deaths = countryData.deaths.toLocaleString()

        const embed = new EmbedBuilder()
            .setTitle(`💉・COVID-19 - ${countryMatch.name}`)
            .addFields(
                {
                    name: "✅┇Confirmed Cases",
                    value: `${confirmed}`,
                    inline: true,
                },
                {
                    name: "🤗┇Recovered",
                    value: `${recovered}`,
                    inline: true,
                },
                {
                    name: "💀┇Deaths",
                    value: `${deaths}`,
                    inline: true,
                },
            )

        if (isSlashCommand) {
            await interaction.reply({ embeds: [embed] });
        } else {
            await interaction.channel.send({ embeds: [embed] });
        }
    }
};