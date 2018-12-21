import React, { Component } from 'react'
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'

export default class extends Component {
    render() {
        let TouchableItem
        Platform.OS === 'ios' || (Platform.OS === 'android' && Platform.Version < 21)
            ? TouchableItem = (
                <TouchableOpacity {...this.props}>
                    {this.props.children}
                </TouchableOpacity>
            )
            : TouchableItem = (
                <TouchableNativeFeedback {...this.props}>
                    {this.props.children}
                </TouchableNativeFeedback>
            )
        return TouchableItem
    }
}