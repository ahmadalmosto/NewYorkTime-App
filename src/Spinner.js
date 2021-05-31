import React from 'react'
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";


 function Spinner({loading}) {
    const override = css`
    // display: block;
    margin: 10 10 10 10;
    border-color: red;
    color : blue;
  `;
    return (
        <div>
            <SyncLoader loading={loading} css={override} size={10} />
        </div>
    )
}
export default Spinner