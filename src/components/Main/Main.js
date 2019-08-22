import React, {Component} from 'react';
import DrawerMenu from './DrawerMenu';
import Shop from './Shop/Shop';
import Drawer from 'react-native-drawer'; 

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  // control drawer
  openControlPanel = () => {
    this._drawer.open();
  };

  closeControlPanel = () => {
    this._drawer.close();
  };

  render() {
    return (
      <Drawer 
        ref={ref => (this._drawer = ref)} 
        content={<DrawerMenu />}
        openDrawerOffset={0.4}
        tapToClose>
          <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>
    );
  }
}
