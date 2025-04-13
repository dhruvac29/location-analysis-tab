import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

// Define types for the PDF export functions
interface PropertyData {
  name: string;
  address: string;
  size: number;
  price: string;
  capRate: string;
  noi: string;
  occupancy: string;
  tenants: string[];
  imageUrl?: string;
}

interface FinancialMetrics {
  irr: string;
  equityMultiple: string;
  returnOnEquity: string;
  returnOnCost: string;
  exitPrice: string;
  exitCapRate: string;
  rentalGrowth: string;
  holdPeriod: string;
}

interface MarketData {
  nearestUrbanCenter: string;
  populationGrowth: string;
  medianIncome: string;
  unemploymentRate: string;
}

interface LeaseData {
  tenant: string;
  rentPsf: string;
  walt: string;
  escalations: string;
  markToMarket: string;
}

interface DealOverviewData {
  property: PropertyData;
  financialMetrics: FinancialMetrics;
  marketData: MarketData;
  leaseData: LeaseData;
  supplyPipeline: {
    name: string;
    submarket: string;
    deliveryDate: string;
    sf: number;
    owner: string;
  }[];
  saleComparables: {
    name: string;
    submarket: string;
    date: string;
    sf: number;
    price: string;
    pricePsf: string;
  }[];
}

/**
 * Exports the deal overview data to a PDF file
 * @param data Deal overview data to export
 * @param fileName Name of the PDF file to create
 */
export const exportDealOverviewToPdf = (data: DealOverviewData, fileName: string = 'deal-overview.pdf') => {
  // Create a new PDF document
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Add header with property name
  doc.setFontSize(20);
  doc.setTextColor(44, 62, 80);
  doc.text(data.property.name, 15, 15);
  
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text(data.property.address, 15, 22);
  
  // Add property details
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Property Overview', 15, 35);
  
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  
  const propertyDetails = [
    ['Size', `${data.property.size.toLocaleString()} SF`],
    ['Price', data.property.price],
    ['Cap Rate', data.property.capRate],
    ['NOI', data.property.noi],
    ['Occupancy', data.property.occupancy]
  ];
  
  autoTable(doc, {
    startY: 38,
    head: [['Metric', 'Value']],
    body: propertyDetails,
    theme: 'grid',
    headStyles: {
      fillColor: [41, 128, 185],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    margin: { left: 15, right: 15 }
  });
  
  // Add financial metrics
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Financial Metrics', 15, doc.lastAutoTable.finalY + 15);
  
  const financialMetricsData = [
    ['IRR', data.financialMetrics.irr],
    ['Equity Multiple', data.financialMetrics.equityMultiple],
    ['Return on Equity', data.financialMetrics.returnOnEquity],
    ['Return on Cost', data.financialMetrics.returnOnCost],
    ['Exit Price', data.financialMetrics.exitPrice],
    ['Exit Cap Rate', data.financialMetrics.exitCapRate],
    ['Rental Growth', data.financialMetrics.rentalGrowth],
    ['Hold Period', data.financialMetrics.holdPeriod]
  ];
  
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 18,
    head: [['Metric', 'Value']],
    body: financialMetricsData,
    theme: 'grid',
    headStyles: {
      fillColor: [41, 128, 185],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    margin: { left: 15, right: 15 }
  });
  
  // Add market data
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Market Analysis', 15, doc.lastAutoTable.finalY + 15);
  
  const marketDataTable = [
    ['Nearest Urban Center', data.marketData.nearestUrbanCenter],
    ['Population Growth Rate', data.marketData.populationGrowth],
    ['Median Household Income', data.marketData.medianIncome],
    ['Unemployment Rate', data.marketData.unemploymentRate]
  ];
  
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 18,
    head: [['Metric', 'Value']],
    body: marketDataTable,
    theme: 'grid',
    headStyles: {
      fillColor: [41, 128, 185],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    margin: { left: 15, right: 15 }
  });
  
  // Add lease data
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Lease Analysis', 15, doc.lastAutoTable.finalY + 15);
  
  const leaseDataTable = [
    ['Tenant', data.leaseData.tenant],
    ['Rent PSF', data.leaseData.rentPsf],
    ['WALT', data.leaseData.walt],
    ['Rent Escalations', data.leaseData.escalations],
    ['Mark-to-Market Opportunity', data.leaseData.markToMarket]
  ];
  
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 18,
    head: [['Metric', 'Value']],
    body: leaseDataTable,
    theme: 'grid',
    headStyles: {
      fillColor: [41, 128, 185],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    margin: { left: 15, right: 15 }
  });
  
  // Add a new page for supply pipeline and sale comparables
  doc.addPage();
  
  // Add supply pipeline
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Supply Pipeline', 15, 15);
  
  const supplyPipelineData = data.supplyPipeline.map(item => [
    item.name,
    item.submarket,
    item.deliveryDate,
    `${item.sf.toLocaleString()} SF`,
    item.owner
  ]);
  
  autoTable(doc, {
    startY: 18,
    head: [['Project Name', 'Submarket', 'Delivery Date', 'Size', 'Owner']],
    body: supplyPipelineData,
    theme: 'grid',
    headStyles: {
      fillColor: [41, 128, 185],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    margin: { left: 15, right: 15 }
  });
  
  // Add sale comparables
  doc.setFontSize(14);
  doc.setTextColor(44, 62, 80);
  doc.text('Sale Comparables', 15, doc.lastAutoTable.finalY + 15);
  
  const saleComparablesData = data.saleComparables.map(item => [
    item.name,
    item.submarket,
    item.date,
    `${item.sf.toLocaleString()} SF`,
    item.price,
    item.pricePsf
  ]);
  
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 18,
    head: [['Property', 'Submarket', 'Date', 'Size', 'Price', 'Price PSF']],
    body: saleComparablesData,
    theme: 'grid',
    headStyles: {
      fillColor: [41, 128, 185],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    margin: { left: 15, right: 15 }
  });
  
  // Add footer with date and page numbers
  const totalPages = doc.getNumberOfPages();
  
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    
    // Add date
    const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    
    doc.text(`Generated on ${today}`, 15, doc.internal.pageSize.height - 10);
    
    // Add page numbers
    doc.text(`Page ${i} of ${totalPages}`, doc.internal.pageSize.width - 30, doc.internal.pageSize.height - 10);
  }
  
  // Save the PDF
  doc.save(fileName);
  
  return true;
};

/**
 * Prepares sample data for PDF export testing
 */
export const getSampleDealOverviewData = (): DealOverviewData => {
  return {
    property: {
      name: 'Thor Equities Industrial Portfolio',
      address: '640 Columbia St, Brooklyn, NY 11231',
      size: 312000,
      price: '$143,000,000',
      capRate: '5.2%',
      noi: '$7,436,000',
      occupancy: '100%',
      tenants: ['Amazon'],
      imageUrl: '/property-image.jpg'
    },
    financialMetrics: {
      irr: '13.9%',
      equityMultiple: '2.3x',
      returnOnEquity: '18.5%',
      returnOnCost: '19.2%',
      exitPrice: '$195,000,000',
      exitCapRate: '5.0%',
      rentalGrowth: '3.5%',
      holdPeriod: '16 Years'
    },
    marketData: {
      nearestUrbanCenter: 'Brooklyn, NY',
      populationGrowth: '1.2%',
      medianIncome: '$76,912',
      unemploymentRate: '7.4%'
    },
    leaseData: {
      tenant: 'Amazon',
      rentPsf: '$24.40',
      walt: '13 Yrs (Sep 37)',
      escalations: '3%',
      markToMarket: '30%+'
    },
    supplyPipeline: [
      {
        name: '640 Columbia',
        submarket: 'Brooklyn',
        deliveryDate: 'Jun-25',
        sf: 336350,
        owner: 'Betnal Green'
      },
      {
        name: 'WB Mason',
        submarket: 'Bronx',
        deliveryDate: 'May-25',
        sf: 150000,
        owner: 'Goldman'
      }
    ],
    saleComparables: [
      {
        name: '1 Debaun Road',
        submarket: 'Millstone, NJ',
        date: 'Jun-24',
        sf: 132930,
        price: '$41,903,580',
        pricePsf: '$315.23'
      },
      {
        name: 'Baylis 495 Business Park',
        submarket: 'Melville, NY',
        date: 'May-24',
        sf: 103500,
        price: '$44,000,000',
        pricePsf: '$425.12'
      },
      {
        name: 'Terminal Logistics Center',
        submarket: 'Queens, NY',
        date: 'Mar-23',
        sf: 336000,
        price: '$136,000,000',
        pricePsf: '$404.76'
      }
    ]
  };
};
