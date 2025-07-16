const graphCards = [
  {
    id: 1,
    title: "Website Views",
    description: "Last Campaign Performance",
    footer: "campaign sent 2 days ago",
    footerIcon: "clock",
    background: "bg-blue-500",
    chartType: "bar",
    chartData: [
      { name: "M", value: 40 },
      { name: "T", value: 15 },
      { name: "W", value: 8 },
      { name: "T", value: 20 },
      { name: "F", value: 45 },
      { name: "S", value: 12 },
      { name: "S", value: 38 },
    ]
  },
  {
    id: 2,
    title: "Daily Sales",
    description: "(+15%) increase in today sales.",
    footer: "updated 4 min ago",
    footerIcon: "refresh",
    background: "bg-green-500",
    chartType: "line",
    chartData: [
      { name: "Apr", value: 0 },
      { name: "May", value: 200 },
      { name: "Jun", value: 400 },
      { name: "Jul", value: 320 },
      { name: "Aug", value: 480 },
      { name: "Sep", value: 300 },
      { name: "Oct", value: 360 },
      { name: "Nov", value: 410 },
      { name: "Dec", value: 500 },
    ]
  },
  {
    id: 3,
    title: "Completed Tasks",
    description: "Last Campaign Performance",
    footer: "just updated",
    footerIcon: "clock",
    background: "bg-neutral-800",
    chartType: "line",
    chartData: [
      { name: "Apr", value: 0 },
      { name: "May", value: 150 },
      { name: "Jun", value: 280 },
      { name: "Jul", value: 400 },
      { name: "Aug", value: 300 },
      { name: "Sep", value: 360 },
      { name: "Oct", value: 290 },
      { name: "Nov", value: 390 },
      { name: "Dec", value: 480 },
    ]
  }
];

export default graphCards;