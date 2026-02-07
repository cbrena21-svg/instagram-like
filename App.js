import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Instagram</Text>
      </View>

      <View style={styles.postContainer}>

        <View style={styles.userContainer}>

          <View style={styles.userPhotoContainer}>
            <Image
              style={styles.image}
              source={require('./assets/images/userPhotoContainer.png')}
              resizeMode="contain"
            />
          </View>

          <View style={styles.userNameContainer}>
            <Text>userName</Text>
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
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
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
    flex: 2,
    backgroundColor: 'blue',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  userNameContainer: {
    flex: 7,
    backgroundColor: 'yellow',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  userEngagementContainer: {
    flex: 1,
    backgroundColor: 'orange',
    height: '100%',
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