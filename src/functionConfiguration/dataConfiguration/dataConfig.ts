const textConfig = {
    keyboard: {
        name: 'G915 LIGHTSPEED',
        model: 'Wireless RGB Mechanical Gaming Keyboard',
    },
    mouse: {
        name: 'Pro X Superlight',
        model: 'Wireless Gaming Mouse',
    },
}

export const getInfoConfig = (typeConfig: string, nameText: string) => {
    const cloneTextConfig = JSON.parse(JSON.stringify(textConfig))
    return cloneTextConfig[typeConfig][nameText]

}