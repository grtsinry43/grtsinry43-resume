// Unified color system supporting multiple Tailwind colors and component types
export const colorSystem = {
    blue: {
        badge: "bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200",
        headerBadge: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200",
        project: {bg: 'from-blue-50', border: 'border-blue-100'}
    },
    green: {
        badge: "bg-green-50 text-green-700 hover:bg-green-100 border-green-200",
        headerBadge: "bg-green-100 text-green-700 border-green-200 hover:bg-green-200",
        project: {bg: 'from-green-50', border: 'border-green-100'}
    },
    purple: {
        badge: "bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200",
        headerBadge: "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200",
        project: {bg: 'from-purple-50', border: 'border-purple-100'}
    },
    yellow: {
        badge: "bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border-yellow-200",
        headerBadge: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200",
        project: {bg: 'from-yellow-50', border: 'border-yellow-100'}
    },
    red: {
        badge: "bg-red-50 text-red-700 hover:bg-red-100 border-red-200",
        headerBadge: "bg-red-100 text-red-700 border-red-200 hover:bg-red-200",
        project: {bg: 'from-red-50', border: 'border-red-100'}
    },
    orange: {
        badge: "bg-orange-50 text-orange-700 hover:bg-orange-100 border-orange-200",
        headerBadge: "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200",
        project: {bg: 'from-orange-50', border: 'border-orange-100'}
    },
    amber: {
        badge: "bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200",
        headerBadge: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200",
        project: {bg: 'from-amber-50', border: 'border-amber-100'}
    },
    // Add more colors as needed
};

export type ColorName = keyof typeof colorSystem;