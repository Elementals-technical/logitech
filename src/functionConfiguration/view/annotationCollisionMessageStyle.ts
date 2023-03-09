
let lastAnnotations: any;
let lastParentEl: any;
let annotationElements: any = {};
let opened: any = {};



export const hiddenAnotation = () => {
    const elements = document.getElementsByClassName('blob');

    // перетворюємо HTML колекцію в масив
    const elementsArray = Array.from(elements);

    //@ts-ignore
    elementsArray.forEach(element => element.style.display = 'none');

}
export const showAnotation = () => {
    const elements = document.getElementsByClassName('blob');

    // перетворюємо HTML колекцію в масив
    const elementsArray = Array.from(elements);
    //@ts-ignore
    elementsArray.forEach(element => element.style.display = 'block');

}

export const getStyleAnnotation = (annotation: any) => {
    return `  
    position: absolute;
    left: ${annotation.left}px;
   top: ${annotation.top}px;
    border-radius: 50%; 
    margin: 10px;
    height: 14px;
    width: 14px;
    transform: scale(1) translate(-50%, -50%); 
    background: white;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
    animation:pulse-white 2s infinite !important;
    
   `
}


export const onAnnotationChange = (navigate: any) => (
    annotations: any,
    parentEl: any,
) => {
    lastAnnotations = annotations;
    lastParentEl = parentEl;

    if (!parentEl) {
        return;
    }

    for (var i = 0; i < annotations.length; i++) {
        var annotation = annotations[i];

        var element = annotationElements[annotation.id];
        var appendToBody = !element;

        element = setAnnotation(navigate)(annotation, element);

        if (!appendToBody) {
            continue;
        }

        parentEl.appendChild(element);
        annotationElements[annotation.id] = element;
    }

}

const setAnnotation = (navigate: any) => (annotation: any, el: any = document.createElement('div')) => {


    el.className = "blob";
    el.id = annotation.id;
    el.style.cssText = el.style.cssText + `${getStyleAnnotation(annotation)}`;

    el.onmouseover = () => {
        el.style.cssText = ` cursor: pointer; z-index: 2; ${getStyleAnnotation(annotation)}`
    };
    el.onmouseout = () => {
        el.style.cssText = ` cursor: default; z-index: 0; ${getStyleAnnotation(annotation)}`
    };
    el.onclick = () => {
        if ("annotation_keyboard" === annotation['text']) {
            navigate(`/desk/keyboard`)
        }
        if ("annotation_mouse" === annotation['text']) {
            navigate(`/desk/mouse`)
        }

    }

    return el;
}


export const deleteNode = async () => {

    // let pointsHTMLs: any = await document.getElementsByClassName('blob');

    // const elementsArray = await Array.from(pointsHTMLs);

    // // видаляємо кожен елемент з масиву
    // await elementsArray.forEach((element: any) => element.remove());

};
