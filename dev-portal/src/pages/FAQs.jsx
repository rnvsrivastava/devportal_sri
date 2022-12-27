// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react'
import Faq from 'react-faq-component';
// mobx
import { observer } from 'mobx-react'

// fragments
import { fragments } from 'services/get-fragments'
import {
  isAdmin,
  isAuthenticated,
  isRegistered,
  logout,
  getLoginRedirectUrl
} from 'services/self'



// semantic-ui
import { Container } from 'semantic-ui-react'

const data = {
  title: "FAQ",
  
  rows: [
    {
      title: "What if I need functionality that isn't supported in the portal?",
      content: `You have the following options: <br><br>

      For small customizations, use a built-in widget to add custom HTML .<br>
      
      For larger customizations, create and upload a custom widget to the managed developer portal.<br>
      
      Self-host the developer portal, only if you need to make modifications to the core of the developer portal codebase.<br>
      
      Open a feature request in the GitHub repository. `
    },
    {
      title: "Can I have multiple developer portals in one API Management service?",
      content: "You can have one managed portal and multiple self-hosted portals. The content of all portals is stored in the same API Management service, so they will be identical. If you want to differentiate portals' appearance and functionality, you can self-host them with your own custom widgets that dynamically customize pages on runtime, for example based on the URL."
    },
    {
      title: "Do I need to enable additional VNet connectivity for the managed portal dependencies?",
      content: `n most cases - no.

     <br> If your API Management service is in an internal VNet, your developer portal is only accessible from within the network. The management endpoint's host name must resolve to the internal VIP of the service from the machine you use to access the portal's administrative interface. Make sure the management endpoint is registered in the DNS. In case of misconfiguration, you will see an error: Unable to start the portal. See if settings are specified correctly in the configuration (...).
      
      <br>If your API Management service is in an internal VNet and you're accessing it through Application Gateway from the internet, make sure to enable connectivity to the developer portal and the management endpoints of API Management. You may need to disable Web Application Firewall rules. See this documentation article for more details.`
    },
    {
      title: "Is the portal's content saved with the backup/restore functionality in API Management?",
      content: "No."
    }]
}

function FAQ() {
  return <div>
  <Faq data={data}/>
</div>
  
}

export default observer(() => (
  <Container style={{ padding: '40px' }}>
    
    {/* <fragments.FAQs.jsx /> */}

  {/*  If admin - user be able to add FAQs or modify faqs. faqs imported from dynamodb
  if user - user be able to view the faqs. faqs from dynamodb */}

 { isAuthenticated() && isAdmin() ? 
 <>

    <a href="" style={{border:'solid',adding:'6px',backgroundColor:'#DFA437', color:'black', margin:'10px',padding:'10px'}}>Add Faqs</a>
    <a href="" style={{border:'solid',adding:'6px',backgroundColor:'#DFA437', color:'black', margin:'10px',padding:'10px' }}>Modify Faqs</a>
    <a href="" style={{border:'solid',adding:'6px',backgroundColor:'#DFA437', color:'black', margin:'10px',padding:'10px' }}>Delete Faqs</a>
    <br></br><br></br>
    <FAQ></FAQ>
 </>
 
 :
 
 <>
    <FAQ></FAQ>
 </>}

  </Container>
))
