type typeField = 'color' | 'list'

export type listFields = {
    [key in string]: {
        label: string,
        type: typeField,
    }
}


export const objectField: listFields = {
    "Backplate color": {
        label: "Backplate color",
        type: "color",
    },
    "Backlight color": {
        label: "Backlight color",
        type: "color",
    },
    "Keyboard color layout": {
        label: "Keyboard color layout",
        type: "list",
    },
    "Color 1": {
        label: "Color pallet",
        type: "color",
    },
    "Color 2": {
        label: "Color pallet 2",
        type: "color",

    },
}