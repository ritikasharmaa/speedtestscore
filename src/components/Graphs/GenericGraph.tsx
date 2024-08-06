import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface GenericGraphProps {
  title: string;
  data: number[];
  yAxisLabel?: string; // Optional prop to add a Y-axis label
  annotationValue?: number; // Optional prop to add a Y-axis annotation line
}

const GenericGraph: React.FC<GenericGraphProps> = ({ title, data, yAxisLabel, annotationValue }) => {
  const series = [
    {
      name: title,
      data: data
    }
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'area',
      height: 160,
      foreColor: '#fff',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      zoom: {
        enabled: false
      },
      width: '100%', // Set width to 100%
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: false // Disable the stroke
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        gradientToColors: ['#34BDE3'],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1, // Make it more opaque
        stops: [0, 50, 100], // Add a stop at 50% to start diverging
        colorStops: [
          { offset: 0, color: '#077FCE', opacity: 1 },
          { offset: 50, color: '#34BDE3', opacity: 1 },
          { offset: 100, color: '#34BDE3', opacity: 1 }
        ]
      }
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: true,
        color: '#fff' // White x-axis line
      },
      axisTicks: {
        show: false // Hide x-axis ticks
      },
    },
    yaxis: {
      title: {
        text: yAxisLabel,
        style: {
          color: '#fff'
        },
      },
      labels: {
        show: false
      },
      axisBorder: {
        show: true,
        color: '#fff' // White y-axis line
      },
      axisTicks: {
        show: false // Hide y-axis ticks
      },
    },
    grid: {
      show: false
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false // Disable tooltip on the x-axis
      },
      marker: {
        show: false
      },
      y: {
        formatter: (val: number) => val.toString()
      }
    },
    markers:{
      hover:{
        size: 3
      }
    },
    annotations: {
      yaxis: annotationValue ? [
        {
          y: annotationValue,
          borderColor: '#FF5733',
          strokeDashArray: 0, // Make the line solid
          label: {
            borderColor: '#FF5733',
            style: {
              color: '#fff',
              background: '#FF5733'
            },
          }
        }
      ] : []
    }
  };

  return (
    <div style={{ height: '160px', padding: 0, margin: 0 }}>
      <Chart options={options} series={series} type="area" width="100%" height="100%" />
    </div>
  );
}

export default GenericGraph;
