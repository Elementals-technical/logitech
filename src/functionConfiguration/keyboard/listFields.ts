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
    "Bottom case": {
        label: "Bottom case",
        type: "color",
    },
    "Keyboard color layout": {
        label: "Keyboard color layout",
        type: "list",
    },
    "Color 1": {
        label: "Primary keys color",
        type: "color",
    },
    "Color 2": {
        label: "Secondary keys color",
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