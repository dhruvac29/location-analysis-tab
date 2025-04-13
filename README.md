# Real Estate Deal Management Application

## Project Overview

This application is a comprehensive real estate deal management platform designed to help investment professionals analyze property deals, tenant information, and market data. The application features a modern, responsive UI with intuitive navigation and data visualization components.

![Real Estate Deal Management App](public/app-screenshot.png)

## Key Features

### Deal Overview Tab
- Financial metrics with performance indicators
- Market analysis with modern card layouts
- Lease analysis with visual indicators for key metrics and risk factors

### Tenant Insights Component
- Detailed tenant analysis dashboard showing:
  - Financial health indicators and credit ratings
  - Stock performance visualization
  - Lease risk analysis with renewal probability
  - Recent news with sentiment analysis
- Integration with external data sources (simulated)

### Supply Pipeline Component
- Visual pipeline of nearby developments
- Filtering capabilities by submarket and status
- Construction progress indicators and risk analysis
- Card and table views for different analysis needs

### PDF Export Functionality
- Export deal data to PDF format
- Structured reports matching the visual hierarchy of the UI
- Inclusion of all key metrics and property details

## Technical Implementation

### Frontend Architecture
- **Framework**: Next.js with React 18
- **Styling**: Tailwind CSS for responsive design
- **Components**: Modular component architecture with TypeScript interfaces
- **UI Library**: Radix UI for accessible interactive elements
- **Data Visualization**: Custom-built visualization components

## Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd location-analysis-tab

# Install dependencies
npm install
```

### Running the Application

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
src/
├── app/                  # Next.js app directory
│   └── page.tsx          # Main application page with tab navigation
├── components/           # React components
│   ├── DealOverviewTab.tsx    # Deal overview component
│   ├── LocationAnalysisTab.tsx # Location analysis component
│   ├── SupplyPipeline.tsx     # Supply pipeline component
│   └── TenantInsights.tsx     # Tenant insights component
├── utils/                # Utility functions
│   └── pdfExport.ts      # PDF export functionality
public/                   # Static assets
└── images/               # Image assets
```

## Design Philosophy

The design follows modern UI principles with an emphasis on:
- Clear information hierarchy and scannable content
- Contextual color usage for status and performance indicators
- Interactive elements with appropriate feedback mechanisms
- Responsive layouts that work across device sizes
- Accessibility considerations for keyboard navigation and screen readers

## Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

For cloud deployment options:

```bash
# Deploy to Vercel
npx vercel

# Deploy to Netlify
npx netlify deploy
```

## Future Enhancement Opportunities
- Integration with real-time data APIs for tenant information
- Advanced filtering and sorting capabilities for comparative analysis
- Additional visualization options for financial metrics
- Collaborative features for team-based deal analysis
- Mobile-optimized views for on-the-go access

## License
MIT
