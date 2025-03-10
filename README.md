# California Wildfire Claims Eligibility Landing Page

This project is a responsive, interactive eligibility screening landing page for victims of the 2025 California wildfires.

## Project Structure

- `src/`: Source code
  - `components/`: React components
  - `styles/`: CSS files
  - `context/`: React context providers
  - `pages/`: Page components

## Local Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment to AWS Amplify

### Option 1: Deploy via AWS Amplify Console (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, BitBucket, etc.)
2. Log in to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/home)
3. Choose "Connect app"
4. Select your Git provider and repository
5. Follow the steps to connect your repository
6. Configure build settings (the default settings should work with the included amplify.yml file)
7. Review and deploy

### Option 2: Deploy via Amplify CLI

1. Install the Amplify CLI:
   ```
   npm install -g @aws-amplify/cli
   ```

2. Configure the Amplify CLI:
   ```
   amplify configure
   ```

3. Initialize Amplify in your project:
   ```
   amplify init
   ```

4. Add hosting:
   ```
   amplify add hosting
   ```

5. Deploy:
   ```
   amplify publish
   ```

## Features

- Responsive design for mobile, tablet, and desktop
- Multi-step eligibility form with conditional logic
- Smooth animations and transitions
- Dynamic results based on user input
- Trust and credibility elements
- Legal compliance sections

## Technologies Used

- React
- React Router
- Framer Motion (for animations)
- CSS3 with responsive design
- AWS Amplify for hosting 