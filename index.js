import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };

const RoundCheckBox = props => {

    const propTypes = {
        onValueChange: PropTypes.func,
        icon: PropTypes.string,
        size: PropTypes.number,
        backgroundColor: PropTypes.string,
        iconColor: PropTypes.string,
        borderColor: PropTypes.string,
        checked: PropTypes.bool,
    };

    const defaultProps = {
        icon: 'ios-checkmark',
        size: 24,
        backgroundColor: '#007AFF',
        iconColor: 'white',
        borderColor: 'grey',
        checked: false,
        onValueChange: () => {},
    };

    const iconSize = parseInt(props.size * 0.92);

    const _onPress = () => {
        props.onValueChange(!props.checked);
    };

    const getIconWrapperStyle = () => {
        return {
          width: props.size,
          height: props.size,
          backgroundColor: props.checked ? props.backgroundColor : 'transparent',
          borderColor: props.checked ? props.backgroundColor : props.borderColor,
          borderRadius: props.size / 2,
        };
    }

    return (
        <TouchableWithoutFeedback hitSlop={hitSlop} onPress={_onPress}>
            <View
                shouldRasterizeIOS={true}
                style={[getIconWrapperStyle(), styles.commonWrapperStyles]}
            >
                <Icon
                    name={props.icon || defaultProps.icon}
                    color={props.checked ? props.iconColor : 'transparent'}
                    style={{ height: iconSize, fontSize: iconSize, backgroundColor: 'transparent' }}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    commonWrapperStyles: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RoundCheckBox