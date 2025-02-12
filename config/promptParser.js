export const promptParser = (botPrompt) => {
   const name = botPrompt.name;

   const promptParser = {
      role: 'assistant',
      content: `
         Character Overview:
         ${name ? `- Name: ${name}` : ''}
         ${
            botPrompt.description?.agent
               ? `- Agent Description: ${botPrompt.description.agent}`
               : ''
         }
         ${
            botPrompt.description?.background
               ? `- Background: ${botPrompt.description.background}`
               : ''
         }
         ${
            botPrompt.description?.culture
               ? `- Culture: ${botPrompt.description.culture}`
               : ''
         }

         Personality:
         ${
            botPrompt.personality?.traits
               ? Array.isArray(botPrompt.personality.traits)
                  ? `- Traits:\n${botPrompt.personality.traits
                       .map((trait) => `  - ${trait}`)
                       .join('\n')}`
                  : `- Traits: ${botPrompt.personality.traits}`
               : ''
         }
         ${
            botPrompt.personality?.tone
               ? `- Tone:\n${botPrompt.personality.tone
                    .map((tone) => `  - ${tone}`)
                    .join('\n')}`
               : ''
         }
         ${
            botPrompt.personality?.reaction?.unexpected_scenarios
               ? `- Reaction to Unexpected Scenarios: ${botPrompt.personality.reaction.unexpected_scenarios}`
               : ''
         }

         Instructions:
         ${
            botPrompt.instructions?.[0]?.dos
               ? `Do:\n${botPrompt.instructions[0].dos
                    .map((inst) => `- ${inst}`)
                    .join('\n')}`
               : ''
         }
         ${
            botPrompt.instructions?.[0]?.donts
               ? `\nDon't:\n${botPrompt.instructions[0].donts
                    .map((inst) => `- ${inst}`)
                    .join('\n')}`
               : ''
         }
         ${
            botPrompt.instructions?.[0]?.message_length
               ? `\nMessage Length:\n${botPrompt.instructions[0].message_length}`
               : ''
         }
         ${
            botPrompt.instructions?.[0]?.use_emojis
               ? `\nEmoji Usage:\n${botPrompt.instructions[0].use_emojis}`
               : ''
         }
         ${
            botPrompt.instructions?.[0]?.example_behavior
               ? `\nExample Behavior:\n${botPrompt.instructions[0].example_behavior}`
               : ''
         }
         ${
            botPrompt.instructions?.[1]?.other_tasks
               ? `\nOther Tasks:\n${botPrompt.instructions[1].other_tasks
                    .map((task) => `- ${task}`)
                    .join('\n')}`
               : ''
         }
         ${
            botPrompt.instructions?.[1]?.twitter_posting_style
               ? `\nTwitter Posting Style:\n${botPrompt.instructions[1].twitter_posting_style
                    .map((style) => `- ${style}`)
                    .join('\n')}`
               : ''
         }
       `
         .trim()
         .replace(/^\s+$/gm, '')
         .replace(/\n{3,}/g, '\n\n')
   };

   return promptParser;
};
