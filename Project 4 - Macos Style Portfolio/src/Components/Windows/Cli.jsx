import React from 'react'
import Terminal from 'react-console-emulator'
import Window from './Window'
import "./cli.scss"
const Cli = () => {
    const commands = {


        about: {
            description: 'About me',
            fn: () =>
                'Hi 👋 I am Harish, a Full Stack Web Developer & UI Designer.',
        },

        skills: {
            description: 'Show skills',
            fn: () =>
                `
Frontend: HTML, CSS, JavaScript, React
Backend: Node.js, Express
Database: MongoDB
Tools: Git, GitHub, VS Code
`,
        },

        projects: {
            description: 'Show projects',
            fn: () =>
                `
• Portfolio Website
• Kanban Task Manager
• Snake Game
• Gaming Website
`,
        },

        contact: {
            description: 'Contact info',
            fn: () =>
                `
Email: harish.dev@gmail.com
GitHub: github.com/harish
LinkedIn: linkedin.com/in/harish
`,
        },

        echo: {
            description: 'Print text',
            usage: 'echo <text>',
            fn: (...args) => args.join(' '),
        },


    };

    return (
        <Window name={"cli"}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={'Welcome to Harish CLI 🚀\nType "help" to see commands'}
                    promptLabel={'harish:~$'}
                />
            </div>
        </Window>
    )
}

export default Cli