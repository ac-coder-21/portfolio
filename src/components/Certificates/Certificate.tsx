import React from "react";
import CertificateLatest from "./CertificateLatest/CertificateLatest";
import AllCertificates from "./AllCertificates/AllCertificates";
import MySocials from "../Home/MySocials/MySocials";
import ContactMe from "../Home/ContactMe/ContactMe";

const Certificate = () => {
    return(
        <div>
            <CertificateLatest />
            <AllCertificates />
            <ContactMe />
            <MySocials />
        </div>
    )
}

export default Certificate;