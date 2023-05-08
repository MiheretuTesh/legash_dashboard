import React from 'react';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig.js';
import {SignInButton} from "./SignInButton";

/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
const msalInstance = new PublicClientApplication(msalConfig);


function MicrosoftRedirect() {
    return(
        <MsalProvider instance={msalInstance}>
            <SignInButton />
        </MsalProvider>
    )
}


export default MicrosoftRedirect