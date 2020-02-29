import React, { Component } from 'react'
import propTypes from 'prop-types'
import { View } from 'react-native'

import api from '../../services/api'
// import { Container } from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  })

  static propTypes = {
    navigation: propTypes.shape({
      getParam: propTypes.func,
    }).isRequired,
  }

  state = {
    stars: [],
  }

  async componentDidMount() {
    const { navigation } = this.props
    const user = navigation.getParam('user')

    const response = api.get(`/users/${user.login}/starred`)

    this.setState({ stars: response.data })
  }

  render() {
    const { stars } = this.state
    return <View />
  }
}
