[![Youtube][youtube-shield]][youtube-url]
[![Facebook][facebook-shield]][facebook-url]
[![Facebook Page][facebook-shield]][facebook-group-url]
[![Instagram][instagram-shield]][instagram-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![VS Code Theme][vscode-shield]][vscode-theme-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="./public/logo.png" alt="Logo" width="80" height="80" style="border-radius:50%;" />
    <h3 align="center">
        <a href="https://artistsweb-api.vercel.app" target="_blank" >
            Artistsweb API
        </a>
    </h3>
</p>

## Description

This project is a frontend application for Artistsweb, designed to showcase artists and their works. It provides a user-friendly interface and integrates with the backend API for dynamic content.

### [Artistsweb Frontend Live](https://artistsweb.vercel.app/)

### [Artistsweb API Live](https://artistsweb-api.vercel.app/)

## Local Setup Guide

1. Clone the repository:

   ```bash
   git clone https://github.com/noyonalways/artistsweb-api.git
   cd artistsweb-api
   ```

2. Install dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   # or simply
   yarn
   ```

3. Create a `.env` file in the root directory and configure the following environment variables:

   ```env
   # App configuration
   PORT=5000                        # Your preferred port number
   DATABASE_URL=mongodb://...       # Your MongoDB connection string
   NODE_ENV=development             # development/production

   # JWT configuration
   JWT_ACCESS_TOKEN_SECRET=your_secret_key
   JWT_ACCESS_TOKEN_EXPIRES_IN=1d

   # Admin credentials
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=your_admin_password
   ADMIN_NAME=Admin

   # Bcrypt configuration
   SALT_ROUNDS=10
   ```

4. Start the development server:

   Using npm:

   ```bash
   npm run dev
   ```

   Using yarn:

   ```bash
   yarn dev
   ```

The API will be available at `http://localhost:5000` (or your configured PORT).

## Frontend Repository

- Frontend Repository: [Artistsweb Frontend](https://github.com/noyonalways/artistsweb-frontend)

## Contact

- Email: [noyonrahman2003@gmail.com](mailto:noyonrahman2003@gmail.com)
- LinkedIn: [Noyon Rahman](https://linkedin.com/in/noyonalways)

<!-- MARKDOWN LINKS & IMAGES -->

[youtube-shield]: https://img.shields.io/badge/-Youtube-black.svg?style=round-square&logo=youtube&color=555&logoColor=white
[youtube-url]: https://youtube.com/@deskofnoyon
[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=round-square&logo=facebook&color=555&logoColor=white
[facebook-url]: https://facebook.com/noyonalways
[facebook-group-url]: https://facebook.com/webbronoyon
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=round-square&logo=instagram&color=555&logoColor=white
[instagram-url]: https://instagram.com/noyonalways
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=round-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/noyonalways
[vscode-shield]: https://img.shields.io/badge/-VS%20Code%20Theme-black.svg?style=round-square&logo=visualstudiocode&colorB=555
[vscode-theme-url]: https://marketplace.visualstudio.com/items?itemName=noyonalways.codevibe-themes
