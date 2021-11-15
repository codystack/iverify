import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Careers from './pages/Careers';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import CoporateEmployee from './pages/CorporateEmployee';
import DomesticEmployee from './pages/DomesticEmployee';
import PropertyVerification from './pages/PropertyVerification';
import TenantVerification from './pages/TenantVerification';
import CompanyVerification from './pages/CompanyVerification';
import CertificateVerification from './pages/CertificateVerification';
import Policy from './pages/Policy';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/careers" component={Careers} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={Terms} />
          <Route path="/corporate-employee" component={CoporateEmployee} />
          <Route path="/domestic-employee" component={DomesticEmployee} />
          <Route path="/property-verification" component={PropertyVerification} />
          <Route path="/tenant-verification" component={TenantVerification} />
          <Route path="/company-verification" component={CompanyVerification} />
          <Route path="/certificate-verification" component={CertificateVerification} />
          <Route path="/policy" component={Policy} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
