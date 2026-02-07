import { StyleSheet, Text, View, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

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
            <Text>Username</Text>
          </View>

          <View style={styles.userEngagementContainer}>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </View>

        </View>

        <View style={styles.photoContainer}>
          <Image
            style={styles.image}
            source={require('./assets/images/photo.png')}
            resizeMode="cover"
          />
        </View>

        <View style={styles.EngagementContainer}>

          <View style={styles.reactionContainer}>
            <Image
              style={styles.likeIcon}
              source={require('./assets/images/like.png')}
              resizeMode="contain"
            />
          </View>

          <View style={styles.reactionContainer}>
            <Image
              style={styles.commentIcon}
              source={require('./assets/images/comment.png')}
              resizeMode="contain"
            />
          </View>

          <View style={styles.reactionContainer}>
            <Image
              style={styles.shareIcon}
              source={require('./assets/images/share.png')}
              resizeMode="contain"
            />
          </View>

          <View style={styles.carouselDotsContainer}>
            <Image
              style={styles.image}
              source={require('./assets/images/carouselDot.png')}
              resizeMode="contain"
            />

          </View>

          <View style={styles.reactionContainer}>
            <Image
              style={styles.saveIcon}
              source={require('./assets/images/save.png')}
              resizeMode="contain"
            />
          </View>

        </View>

        <View style={styles.captionContainer}>
          <Text>17,289 views</Text>
          <Text>Username Instagram template #template</Text>
          <Text>View all 370 comments</Text>
          <Text>4 days ago</Text>
        </View>

      </View>

      <View style={styles.bottomMenuContainer}>
        <View style={styles.reactionContainer}>
          <Text>Home</Text>
        </View>

        <View style={styles.reactionContainer}>
          <Text>Search</Text>
        </View>

        <View style={styles.reactionContainer}>
          <Text>Add</Text>
        </View>

        <View style={styles.reactionContainer}>
          <Text>Notifications</Text>
        </View>

        <View style={styles.reactionContainer}>
          <Text>Profile</Text>
        </View>

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoContainer: {
    flex: 6,
    backgroundColor: 'yellow',

  },
  EngagementContainer: {
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'row',

  },
  reactionContainer: {
    flex: 1,
    backgroundColor: 'red',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeIcon: {
    width: '85%',
    height: '85%',
  },
  commentIcon: {
    width: '90%',
    height: '90%',
  },
  shareIcon: {
    width: '82%',
    height: '82%',
  },
  saveIcon: {
    width: '85%',
    height: '85%',
  },
  carouselDotsContainer: {
    flex: 6,
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  captionContainer: {
    flex: 2,
    backgroundColor: 'purple',
    gap: 5,
    padding: 10,

  },
  bottomMenuContainer: {
    flex: 1,
    backgroundColor: 'pink',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

});