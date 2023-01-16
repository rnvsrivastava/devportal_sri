// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {useState} from 'react'
import Faq from './/FAQ'
// mobx
import { observer } from 'mobx-react'
// fragments
import { fragments } from 'services/get-fragments'
import FaqSample, { Faq_sample } from './Faq_sample'
import PaymentFaq from './PaymentFaq'
import ShippingFaq from './ShippingFaq'

import {
  isAdmin,
  isAuthenticated,
  isRegistered,
  logout,
  getLoginRedirectUrl
} from 'services/self'

// semantic-ui
import { Container } from 'semantic-ui-react'
import SampleApi from './SampleApi'
import { BrowserRouter, Switch, Route } from "react-router-dom";
export default function FAQs() {

  return(
    <div class='flx'>
        <div className='faq-sidebar'>
          
          <div class="faqs-list">
            <a class="faqs-list-items" href="/faqs/general">General FAQ</a> <br></br>
            <a class="faqs-list-items" href="/faqs/payment">Payment FAQ</a> <br></br>
            <a class="faqs-list-items" href="/faqs/shipping">Shipping FAQ</a> <br></br>
          </div>
        </div>
        <BrowserRouter>
            <Switch>
              <Route path="/faqs/payment" component={PaymentFaq}></Route>
              <Route path="/faqs/shipping" component={ShippingFaq}></Route>
              <Route path="/faqs/general" component={Faq_sample}></Route>
            </Switch>
          </BrowserRouter>
        {/* <div class='faqs'>
          <Faq_sample />
        </div> */}
        
      </div>
  )
} 
// export default observer(() => (
//   <Container style={{ padding: '40px' }}>
   

//  { isAuthenticated() && isAdmin() ? 
//  <>
//      <FaqSample />
//  </>
 
//  :
 
//  <>
//  {/* <FaqSample /> */}
//     <Faq />
//     {/* <SampleApi /> */}
//  </>
//  }
//   </Container>
// ))
