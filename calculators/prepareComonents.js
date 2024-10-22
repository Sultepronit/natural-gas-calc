import { componentConsts } from "../component-consts/componentConsts";
import basicConsts from '../basicConsts';

const { A } = basicConsts;

function getConstsForComponent(name) {
    return componentConsts.find(row => row.name === name);
}

export default function prepareComonents(inputData) {
    return inputData.map(component => {
        return {
            ...component,
            ...getConstsForComponent(component.name),
            get uM2() {
                return (this.a * A.carbon.u)**2
                    + (this.b * A.hydrogen.u)**2
                    + (this.c * A.nitrogen.u)**2
                    + (this.d * A.oxygen.u)**2
                    + (this.e * A.sulfur.u)**2;
            },
            get uM() {
                return Math.sqrt(this.uM2);
            }
        };
    });
}
