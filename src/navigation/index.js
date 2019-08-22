import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Easing, Animated} from 'react-native';
import Main from '../components/Main/Main';
import Authentication from '../components/Authentication/Authentication';
import ChangeInfor from '../components/ChangeInfor/ChangeInfor';
import OrderHistory from '../components/OrderHistory/OrderHistory';

const RootStack = createStackNavigator(
  {
    Main: Main,
    Authentication: Authentication,
    ChangeInfor: ChangeInfor,
    OrderHistory: OrderHistory,
  },
  {
    initialRouteName: 'Main',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const {layout, position, scene} = sceneProps;
        const {index} = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return {opacity, transform: [{translateX: translateX}]};
      },
    }),
  },
);

const App = createAppContainer(RootStack);

export default App;
