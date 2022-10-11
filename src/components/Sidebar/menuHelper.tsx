import React from "react";
import {
  HomeFilled,
  PictureOutlined,
  SettingFilled,
  ClockCircleOutlined,
  DashboardFilled,
  UserOutlined,
} from "@ant-design/icons";

interface MenuConfig {
  title: string;
  icon: React.ReactNode;
  key: string;
  link?: string;
  children?: Pick<MenuConfig, "title" | "key" | "link">[];
}

const menuHelper: MenuConfig[] = [
  {
    key: "1",
    title: "Home",
    icon: <HomeFilled />,
    link: "/",
  },
  {
    key: "2",
    title: "Users",
    icon: <UserOutlined />,
    link: "/users",
  },
  {
    key: "3",
    title: "Rooms",
    icon: <HomeFilled />,
    children: [
      {
        key: "3-1",
        title: "Room 1",
      },
    ],
  },
  {
    key: "4",
    title: "Scenes",
    icon: <PictureOutlined />,
    children: [
      {
        key: "4-1",
        title: "Scene 1",
      },
    ],
  },
  {
    key: "5",
    title: "Settings",
    icon: <SettingFilled />,
    children: [
      {
        key: "5-1",
        title: "Setting 1",
      },
    ],
  },
  {
    key: "6",
    title: "Schedule",
    icon: <ClockCircleOutlined />,
    link: "/schedule",
  },
  {
    key: "7",
    title: "Power Consumption",
    icon: <DashboardFilled />,
    link: "/power-consumption",
  },
];

export default menuHelper;
