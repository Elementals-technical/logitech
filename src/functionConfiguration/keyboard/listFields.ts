type typeField = 'color' | 'list' | 'input'

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
export const objectFieldMouse: listFields = {
    "Body colors": {
        label: "Body colors",
        type: "color",
    },
    "Custom text": {
        label: "Custom text",
        type: "input",
    },
    "Set font": {
        label: "Set font",
        type: "list",
    },
    "Custom text place": {
        label: "Custom text place",
        type: "list",
    },
    "Text color": {
        label: "Text color",
        type: "color",
    },
   
}