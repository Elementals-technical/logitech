
type getNameObjectT = {
    idObject: string;
    nameObject: string;
};
const getNameObject = (ev: any): any => {

    let typeConfig = ''

    if (ev.hitNodes.length > 0) {

        const nodesFirstMesh = ev.hitNodes[0];

        if (nodesFirstMesh && nodesFirstMesh.hierarchy.length > 0) {
            let listNodes = nodesFirstMesh.hierarchy.filter((node: any) => node["name"].includes("mouse_"));
            if (listNodes.length > 0) typeConfig = 'mouse'
        }
        if (nodesFirstMesh && nodesFirstMesh.hierarchy.length > 0) {
            let listNodes = nodesFirstMesh.hierarchy.filter((node: any) => node["name"].includes("keyboard"));
            if (listNodes.length > 0) typeConfig = 'keyboard'
        }
    }
    return typeConfig;


};

export const selectedObject = (navigate: any) => {

    return {
        active: true,
        enabled: true,
        key: "selectedObject",
        handlers: { 
            mouseup: (ev: any) => {
                let typeConfig = getNameObject(ev);
                 
                if (typeConfig === 'mouse' || typeConfig === 'keyboard') {
                     
                    // navigate(`/desk/${typeConfig}`)
                }
                return false;
            },

        },
    };
};