import React from 'react';
import { baseProps } from './index';

const LogoIcon = (props) => (
    <svg {...baseProps} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 15V22" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9.00293 16.7314L15.0016 20.1948" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14.999 16.7314L9.00031 20.1948" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 13.3529C22 16.0599 20.0726 18.3221 17.5 18.8722M6.28571 19C3.91878 19 2 17.1038 2 14.7647C2 12.4256 3.91878 10.5294 6.28571 10.5294C6.56983 10.5294 6.8475 10.5567 7.11616 10.6089M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C18.8381 8.24853 19.4623 8.60648 20 9.06141" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export default LogoIcon;
