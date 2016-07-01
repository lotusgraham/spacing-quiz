import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const NavBar = () => (
  <AppBar
    title="Title"
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }
  />
);

export default NavBar;


// import React from 'react';
// import AppBar from 'material-ui/AppBar';
//
// function handleTouchTap() {
//   alert('onTouchTap triggered on the title component');
// }
//
// const styles = {
//   title: {
//     cursor: 'pointer',
//   },
// };
//
// const NavBar = () => (
//   <AppBar
//     title={<span style={styles.title}>Title</span>}
//     iconClassNameRight={<span onClick={handleTouchTap}>"muidocs-icon-navigation-expand-more"</span>}
//   />
// );
//
// export default NavBar;
