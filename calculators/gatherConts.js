import { componentConsts } from "../component-consts/componentConsts";

function getConstsForComponent(name) {
    return componentConsts.find(row => row.name === name);
}

export default function gatherConsts(inputData) {
    return inputData.map(component => {
        return {
            ...component,
            ...getConstsForComponent(component.name)
        }
    })
}