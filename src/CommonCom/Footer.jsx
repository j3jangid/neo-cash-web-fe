// import { Paper } from '@mui/material'
import React from 'react'
import { PiBuildingOfficeBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import logo from '../LOGO FILE/LOGO WHITE NETWORKS.png'
import { contactDetails, supportContact } from '../jsonData/companyData'

function Footer() {
    return (
        <div className='footerBackground py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='footerHeading'>Company</div>
                        <div className='d-flex flex-column gap-1 ps-1'>
                            <Link className='footerLinkText' name='home' to={'/home'}>Home</Link>
                            <Link className='footerLinkText' name='services' to={'/services'} >Services</Link>
                            <Link className='footerLinkText' name='pricing' to={'/pricing'}>Pricing</Link>
                            <Link className='footerLinkText' name='about-us' to={'/about-us'}>About Us</Link>
                            <Link className='footerLinkText' name='contact' to={'/contact'}>Contact</Link>

                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='footerHeading'>Support</div>
                        <div className='d-flex flex-column gap-1 ps-1'>
                            <span className='footerText'>{supportContact.contactNumber}</span>
                            <span className='footerText'>{supportContact.email}</span>
                        </div>
                        <div className='footerHeading mt-2'>Legal Policy</div>
                        <div className='d-flex flex-column gap-1 ps-1'>
                            <Link className='footerLinkText' to={'/terms-conditions'}>Terms & Conditions</Link>
                            <Link className='footerLinkText' to={'/legal'}>Legal</Link>
                            <Link className='footerLinkText' to={'/Policy'}>Policy</Link>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='footerHeading'>Contact-Us</div>
                        <div className='d-flex flex-column gap-1 ps-1'>
                            <div className='d-flex gap-2 align-items-center'>
                                <PiBuildingOfficeBold className='footerText' />
                                <span className='footerText'>Head Office</span>
                            </div>
                            <span className='footerText'>
                                {contactDetails.address}
                            </span>
                            <span className='footerText'>{contactDetails.number}</span>
                            <span className='footerText'>{contactDetails.mail1}</span>
                            <span className='footerText'>{contactDetails.mail2}</span>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div style={{ height: '100%' }} className='d-flex flex-column justify-content-center align-items-center'>
                            <span>
                                <img
                                    src={logo}
                                    alt="Logo"
                                    width={130}
                                    className='img-fluid'
                                />
                            </span>
                            <span className='text-white mt-1'>All In One Secaured Payment Service Provider</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer