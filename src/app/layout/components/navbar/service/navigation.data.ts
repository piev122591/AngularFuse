import { FuseNavigation } from "@fuse/types";

export const adminNav: FuseNavigation[] = [
    {
        id: "applications",
        title: "Applications",
        type: "group",
        children: [
            {
                id: "company",
                title: "Company",
                type: "item",
                icon: "business",
                url: "/company",
                badge: {
                    title: "3",
                    bg: "#525e8a",
                    fg: "#FFFFFF",
                },
            },
            {
                id: "store",
                title: "Store",
                type: "item",
                url: "/ui/page-layouts/blank",
                icon: "store",
                badge: {
                    title: "1",
                    bg: "#525e8a",
                    fg: "#FFFFFF",
                },
            },
        ],
    },
];

export const company1: FuseNavigation[] = [
    {
        id: "applications",
        title: "Applications",
        type: "group",
        children: [
            {
                id: "dashboard",
                title: "Dashboard Uno",
                type: "item",
                url: "/ui/page-layouts/blank",
                icon: "dashboard",
            },
        ],
    },
];
export const company2: FuseNavigation[] = [
    {
        id: "applications",
        title: "Applications",
        type: "group",
        children: [
            {
                id: "dashboard",
                title: "Dashboard Dos",
                type: "item",
                url: "/ui/page-layouts/blank",
                icon: "dashboard",
            },
        ],
    },
];
export const company3: FuseNavigation[] = [
    {
        id: "applications",
        title: "Applications",
        type: "group",
        children: [
            {
                id: "dashboard",
                title: "Dashboard Tres",
                type: "item",
                url: "/ui/page-layouts/blank",
                icon: "dashboard",
            },
        ],
    },
];
