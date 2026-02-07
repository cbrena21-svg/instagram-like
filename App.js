import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>Instagram</Text>
      </View>

      <View style={styles.postContainer}>

        <View style={styles.userContainer}>

          <View style={styles.userPhotoContainer}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>

          <View style={styles.userNameContainer}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>

          <View style={styles.userEngagementContainer}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>

        </View>

        <View style={styles.photoContainer}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>

        <View style={styles.EngagementContainer}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>

        <View style={styles.captionContainer}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>

      </View>

      <View style={styles.bottomMenuContainer}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  postContainer: {
    flex: 8,
    backgroundColor: 'blue',

  },
  userContainer: {
    flex: 1,
    backgroundColor: 'green',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',

  },
  userPhotoContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  userNameContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  userEngagementContainer: {
    flex: 1,
    backgroundColor: 'orange',
  },
  photoContainer: {
    flex: 6,
    backgroundColor: 'yellow',

  },
  EngagementContainer: {
    flex: 1,
    backgroundColor: 'orange',

  },
  captionContainer: {
    flex: 2,
    backgroundColor: 'purple',

  },
  bottomMenuContainer: {
    flex: 1,
    backgroundColor: 'pink',

  },

});