import   React from 'react';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
const PageTemplate  = ({children})=><div className="page">
    <AppHeader/>
    {children}
    <AppFooter/>
</div>

export default PageTemplate;