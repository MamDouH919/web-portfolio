import React from "react";
import * as Spinners from "react-spinners";

export function CustomSpinner(props) {
    const { name } = props;
    const color = '#fff';
    const { [name]: Spinner } = Spinners;
    return <Spinner color={props.color ?? color} {...props} />;
}


export default function ButtonLoading(props) {
    return <CustomSpinner {...props} name="BeatLoader" size={8} margin={2} />
}