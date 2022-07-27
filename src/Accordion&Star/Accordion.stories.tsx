import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action("accordion mode change event fired")

export const CollapsedMode = () => <Accordion title={"Menu"} collapsed={true} callback={callback}/>
export const UncollapsedMode = () => <Accordion title={"Users"} collapsed={false} callback={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={value ? "Menu" : "Users"} callback={setValue} collapsed={value}/>
}