---
id: usewindowdimensions
title: useWindowDimensions
---

```jsx
import {useWindowDimensions} from 'react-native';
```

`useWindowDimensions`会在屏幕尺寸变化时自动更新获取到的设备`width`和`height`值。使用方法如下：

```jsx
const windowWidth = useWindowDimensions().width;
const windowHeight = useWindowDimensions().height;
```

## 示例

```SnackPlayer name=useWindowDimensions&supportedPlatforms=ios,android
import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";

const App = () => {
  const window = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text>{`Window Dimensions: height - ${window.height}, width - ${window.width}`}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
```

- The [useDimensions](https://github.com/react-native-community/react-native-hooks#usedimensions) hook from the community [React native hooks](https://github.com/react-native-community/react-native-hooks) library aims to make handling screen/window size changes easier to work with.
- [React Native Responsive Dimensions](https://github.com/DaniAkash/react-native-responsive-dimensions) also comes with responsive hooks.

## 属性

### `fontScale`

The scale of the font currently used. Some operating systems allow users to scale their font sizes larger or smaller for reading comfort. This property will let you know what is in effect.

```jsx
useWindowDimensions().fontScale;
```

### `height`

The height in pixels of the window or screen your app occupies.

```jsx
useWindowDimensions().height;
```

### `scale`

The pixel ratio of the device your app is running on.

```jsx
useWindowDimensions().scale;
```

> A value of `1` indicates PPI/DPI of 96 (76 on some platforms). `2` indicates a Retina or high DPI display.

### `width`

The width in pixels of the window or screen your app occupies.

```jsx
useWindowDimensions().width;
```
