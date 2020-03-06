This React Native package allows you to prevent the screen from going to sleep while your app is active. It's useful for things like navigation or video playback, where the user expects the app to remain visible over long periods without touch interaction.

## Installation

As the first step, install this module:

#### React Native 0.60+

`yarn add @sayem314/react-native-keep-awake`

## Usage

#### example: react hooks

```jsx
import { useKeepAwake } from '@sayem314/react-native-keep-awake';
import React from 'react';
import { Text, View } from 'react-native';

export default function KeepAwakeExample {
  useKeepAwake();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This screen will never sleep!</Text>
    </View>
  );
}
```

#### example: static functions

```jsc
import { activateKeepAwake, deactivateKeepAwake } from '@sayem314/react-native-keep-awake';
import React from 'react';
import { Button, View } from 'react-native';

export default class KeepAwakeExample extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={this._activate}>Activate</Button>
        <Button onPress={this._deactivate}>Deactivate</Button>
      </View>
    );
  }

  _activate = () => {
    activateKeepAwake();
    };

  _deactivate = () => {
    deactivateKeepAwake();
    };
}
```
