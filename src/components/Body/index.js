// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      console.log(showContent)
      console.log(showLeftNavbar)
      console.log(showRightNavbar)
      return (
        <div className="bg-header">
          <div>
            {showLeftNavbar ? (
              <div className="ln">
                <h1>Left Navbar Menu</h1>
                <ul className="ul-items">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            ) : null}
          </div>
          {showContent ? (
            <div className="content">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="rn">
              <h1>Right Navbar</h1>
              <p className="ad">Ad 1</p>
              <p className="ad">Ad 2</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
