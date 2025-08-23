# LinkUp

LinkUp is a modern video calling platform built with Next.js and powered by the Stream Video SDK. It leverages Clerk for seamless authentication, Tailwind CSS for design, and a variety of modular React components to enable instant meetings, scheduled calls, and recording playback. 🚀

--------------------------------------------------

## Introduction

LinkUp is designed to offer a smooth and intuitive video meeting experience. It provides users with the ability to create and join meetings instantly, schedule future meetings, and even view past meeting recordings. With a responsive layout and clean user interface, LinkUp adapts to various device sizes—from desktops to mobile screens—while ensuring a professional feel.

--------------------------------------------------

## Features

- Instant Meetings: Quickly start a meeting with a single click.
- Scheduled Meetings: Plan and schedule future video calls easily.
- Join via Link: Join any meeting using an invitation link.
- Recordings: View and play back recorded calls.
- Responsive UI: Beautifully designed components including modals, sidebars, and cards.
- Authentication: Integrated with Clerk for secure user sign-in.
- Real-time Notifications: Uses toast notifications for real-time feedback with Sonner.
- End Call Functionality: Meeting organizers can end the call for all participants.

--------------------------------------------------

## Requirements

LinkUp requires several dependencies to run successfully:

| Dependency | Version/Info | Description |
| --- | --- | --- |
| Node.js | 15 | JavaScript runtime environment |
| Next.js | Latest stable release | React framework for server-side rendering |
| Tailwind CSS | Configured via PostCSS | Utility-first CSS framework |
| Clerk | Next.js integration | Authentication and user management |
| @stream-io/video-react-sdk | Latest stable release | Video call and recording functionalities |
| Sonner | Compatible with React 18+ | Toast notifications |

Ensure you have the correct Node.js version and package manager (npm or Yarn) installed before proceeding.

--------------------------------------------------

## Installation

1. Clone the Repository:

```shell
   git clone https://github.com/BenAbdou1001/LinkUp.git
   cd LinkUp
```

1. Install Dependencies:

   Using npm:

```shell
   npm install
```

   Or using Yarn:

```shell
   yarn install
```

1. Build the Project:

```shell
   npm run build
```

   Or with Yarn:

```shell
   yarn build
```

1. Start the Development Server:

```shell
   npm run dev
```

   Or:

```shell
   yarn dev
```

This process will start the application on your local machine.

--------------------------------------------------

## Usage

After installation, use LinkUp as follows:

- Dashboard: The home page displays the current time and date, along with a list of meeting options such as creating a new meeting, joining an existing meeting, scheduling a meeting, and viewing recordings (refer to the Home component in fileciteturn0file14).
- Meeting Interaction: Click on one of the meeting cards to trigger modals that let you either start an instant meeting, schedule a call, or join using an invitation link.
- Recordings: The recordings tab lists past meetings, including options to play back the recording.
- Ending a Call: If you are the call owner, you will see an option to "End call for everyone."

Interactive components are implemented with intuitive buttons and dialogs to confirm actions and notify users of success or errors.

--------------------------------------------------

## Configuration

Before launching, configure the following environment variables in a .env.local file at the root of your repository:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
CLERK_FRONTEND_API=your_clerk_frontend_api_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

Additional configurations such as API endpoints and color themes can be adjusted directly within the code (for example, the appearance settings in app/layout.tsx as seen in fileciteturn0file?).

--------------------------------------------------

## Contributing

We welcome contributions to LinkUp! To contribute:

1. Fork the repository.
1. Create a feature branch (e.g., <code>feature/add-new-component</code>).
1. Commit your changes with clear and descriptive messages.
1. Open a pull request detailing your changes.
1. Ensure your code follows the project’s style and standards (see ESLint configuration in eslint.config.mjs).

Your contributions help improve LinkUp for everyone.

--------------------------------------------------

## License

LinkUp is licensed under the MIT License. You are free to use, modify, and distribute the software under the terms of the MIT License.

--------------------------------------------------

With beautifully organized icons, comprehensive meeting functionalities, and modular React components, LinkUp is built to scale and adapt to your video collaboration needs. Enjoy building and collaborating on this powerful platform!

--------------------------------------------------

Happy Coding!
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
