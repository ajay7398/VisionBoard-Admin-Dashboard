import {
  MdOutlineWeekend,
  MdBarChart,
  MdStore,
  MdPersonAddAlt
} from "react-icons/md";

 const dashboardCardsData = [
  {
    icon: MdOutlineWeekend,
    iconBg: "bg-black",
    title: "Bookings",
    value: "281",
    growth: "+55%",
    growthText: "than last week",
    growthColor: "text-green-500"
  },
  {
    icon: MdBarChart,
    iconBg: "bg-blue-500",
    title: "Today's Users",
    value: "2,300",
    growth: "+3%",
    growthText: "than last month",
    growthColor: "text-green-500"
  },
  {
    icon: MdStore,
    iconBg: "bg-green-500",
    title: "Revenue",
    value: "34k",
    growth: "+1%",
    growthText: "than yesterday",
    growthColor: "text-green-500"
  },
  {
    icon: MdPersonAddAlt,
    iconBg: "bg-pink-500",
    title: "Followers",
    value: "+91",
    growth: "",
    growthText: "Just updated",
    growthColor: "text-gray-400"
  }
];

export default dashboardCardsData;