import React from 'react';
import {
  ViroVRSceneNavigator,
} from '@viro-community/react-viro';

var vrScenes = {
  'cottage': require('./cottageScene'),
}


export default () => {
  return (
    <ViroVRSceneNavigator
      initialScene={{
        scene: vrScenes['cottage'],
      }}/>
  );
};