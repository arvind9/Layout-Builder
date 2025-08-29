// Write your code here
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'
import './index.css'

const Layout = () => (
  <div className="bg-layout">
    <div className="header">
      <Header />
    </div>
    <div className="body">
      <Body />
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
)

export default Layout
