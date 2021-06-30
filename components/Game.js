import React, { Component } from 'react';
import {Animated,Button,TouchableOpacity,SafeAreaView,View,StyleSheet} from 'react-native';

export default class App extends Component {
  state = {
    game: false,
    colorList: [],
    pressed: 0,
    blue: new Animated.Value(1),
    red: new Animated.Value(1),
    green: new Animated.Value(1),
  };

  _checkColor(color) {
    const { game, pressed, colorList } = this.state;
    if (!game) return;
    if (colorList[pressed] !== color) {
      alert('You lost:(');
      this.setState({ game: false });
    } else if (pressed === colorList.length - 1) {
      alert('You won:)');
      this.setState({ game: false });
    } else {
      this.setState({ pressed: pressed + 1 });
    }
  }

  _newGame() {
    if (this.state.game) return;
    const theColors = ['blue', 'red', 'green'];
    const colorList = Array.from(
      { length: 5 },
      () => theColors[Math.floor(Math.random() * theColors.length)]
    );
    this.setState({ game: true, colorList: colorList, pressed: 0 });
    let animations = [];
    colorList.forEach(color => {
      animations.push(
        Animated.timing(this.state[color], {
          toValue: 0,
          duration: 500,
        })
      );
      animations.push(
        Animated.timing(this.state[color], {
          toValue: 1,
          duration: 500,
        })
      );
    });
    Animated.sequence(animations).start();
  }

  render() {
    return (
      <View style={styles.body}>
       <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => this._checkColor('blue')}>
          <Animated.View
            style={[
              styles.box,
              { backgroundColor: '#b0c4de', opacity: this.state.blue },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._checkColor('red')}>
          <Animated.View
            style={[
              styles.box,
              { backgroundColor: '#e9967a', opacity: this.state.red },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._checkColor('green')}>
          <Animated.View
            style={[
              styles.box,
              { backgroundColor: '#3cb371', opacity: this.state.green },
            ]}
          />
        </TouchableOpacity>
          </SafeAreaView>

        <Button color="#f08080" title="Start a new round" onPress={() => this._newGame()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 30,
  },
  box: {
    width: 150,
    height: 150,
   borderRadius: 10,
    borderWidth: 1,
     borderColor: '#fff'
  },
  body:{
      flex: 1,
        alignItems: 'center',
            paddingTop: 10,
  }
});
