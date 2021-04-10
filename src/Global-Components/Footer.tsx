import React from "react";
import { useParams } from "react-router-dom";
import { Anchor, P } from '@dnb/eufemia/elements'
import { IconPrimary} from '@dnb/eufemia/components';
import "./Footer.css";

export default function Footer(){
    return(
        <footer>
        <Anchor target="_blank" href="https://dnb.no">
        visit DNB for more cool things
         </Anchor>
      
         </footer>
    )
}