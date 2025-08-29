import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {({
      showContent,
      showLeftNavbar,
      showRightNavbar,
      onToggleShowContent,
      onToggleShowLeftNavbar,
      onToggleShowRightNavbar,
    }) => (
      <div className="bg-config">
        <h1 className="main-heading">Layout</h1>
        <label>
          <input
            type="checkbox"
            name="content"
            checked={showContent}
            onChange={onToggleShowContent}
          />
          Content
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="leftNavbar"
            checked={showLeftNavbar}
            onChange={onToggleShowLeftNavbar}
          />
          Left Navbar
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="rightNavbar"
            checked={showRightNavbar}
            onChange={onToggleShowRightNavbar}
          />
          Right Navbar
        </label>
      </div>
    )}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
