# react-native-round-checkbox

## Getting started

`$ npm install react-native-round-checkbox --save`

### Mostly automatic installation

`$ react-native link react-native-round-checkbox`

## Usage
```javascript
    import React, { useState } from "react";
    import { View } from "react-native";
    import RoundCheckbox from 'react-native-round-checkbox';

    const [isChecked, setIsChecked] = useState(false)

    <View style={{ flex: 1 }}>
        <RoundCheckbox
            size={16}
            borderColor={'white'}
            backgroundColor={"black"}
            iconColor={'white'}
            checked={isChecked}
            onValueChange={checked => setIsChecked(checked)}
        />
    </View>

```

### Props

| Property        | Type      | Default       | Description                                   |
| --------------- | --------- | ------------- | --------------------------------------------- |
| icon            | `string`  | ios-checkmark | name of icon (from Ionicons) in the checkbox  |
| backgroundColor | `string`  | '#007AFF'     | background color when checked                 |
| size            | `number`  | 24            | icon size                                     |
| iconColor       | `string`  | 'white'       | icon color                                    |
| borderColor     | `string`  | 'grey'        | border color                                  |
| checked         | `boolean` | false         | checked                                       |
| onValueChange   | function  |               | function called on change with new value      |
| style           | object    | {}            | overwrite styles that are passed to the parent|
