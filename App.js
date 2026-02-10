import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const App = () => {
  const [liked, setLiked] = useState(false);
  const [numberLikes, setNumberLikes] = useState(0);
  const [likeColor, setLikeColor] = useState('gray');
  const [saved, setSaved] = useState(false);
  const [saveColor, setSaveColor] = useState('gray');

  /* const handleLikesAndColor = () => {
     setNumberLikes(numberLikes + 1);
     setLikeColor('red');
   };
 
   const handleDislikesAndColor = () => {
     setNumberDislikes(numberDislikes + 1);
     setDislikeColor('red');
   };*/

  const handleLikeAndDislike = () => {
    if (!liked) {
      setNumberLikes(numberLikes + 1);
      setLikeColor('red');
      setLiked(true);
    } else {
      setNumberLikes(numberLikes - 1);
      setLikeColor('gray');
      setLiked(false);
    }
  };

  const handleSaveAndColor = () => {
    if (!saved) {
      setSaveColor('black');
      setSaved(true);
    } else {
      setSaveColor('gray');
      setSaved(false);
    }
  };

  //export default function App() {
  const [fontsLoaded] = useFonts({
    Insta: require('./assets/fonts/VeganStylePersonalUse-5Y58.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

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
            <Text style={styles.typeText1}>Username</Text>
          </View>

          <View style={styles.userEngagementContainer}>
            <Entypo name="dots-three-horizontal" size={24} color="gray" />
          </View>

        </View>

        <View style={styles.photoContainer}>
          <Image
            style={styles.image}
            source={require('./assets/images/photo2.jpeg')}
            resizeMode="cover"
          />
        </View>

        <View style={styles.EngagementContainer}>

          <View style={styles.reactionContainer}>
            <TouchableOpacity onPress={handleLikeAndDislike} style={styles.touchableOpacity}>
              <AntDesign name="heart" size={24} color={likeColor} />
            </TouchableOpacity>
          </View>

          <View style={styles.reactionContainer}>
            <Text style={styles.typeText2}>{numberLikes}</Text>
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
            <TouchableOpacity onPress={handleSaveAndColor} style={styles.touchableOpacity}>
              <FontAwesome name="bookmark" size={24} color={saveColor} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.captionContainer}>
          <Text style={styles.typeText2}>17,289 views</Text>
          <Text style={styles.typeText2}>Username Instagram template #template</Text>
          <Text style={styles.typeText3}>View all 370 comments</Text>
          <Text style={styles.typeText3}>4 days ago</Text>
        </View>

      </View>

      <View style={styles.bottomMenuContainer}>
        <View style={styles.reactionContainer}>
          <Image
            style={styles.homeIcon}
            source={require('./assets/images/home.png')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.reactionContainer}>
          <Image
            style={styles.searchIcon}
            source={require('./assets/images/search.png')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.reactionContainer}>
          <Image
            style={styles.addIcon}
            source={require('./assets/images/add.png')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.reactionContainer}>
          <Image
            style={styles.notificationsIcon}
            source={require('./assets/images/notifications.png')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.reactionContainer}>
          <Image
            style={styles.profileIcon}
            source={require('./assets/images/profile.png')}
            resizeMode="contain"
          />
        </View>

      </View>

    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  touchableOpacity: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1.2,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 20,

  },
  titleText: {
    fontSize: 40,
    fontFamily: 'Insta',
  },
  postContainer: {
    flex: 8,
    backgroundColor: 'white',

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
    backgroundColor: 'white',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  userNameContainer: {
    flex: 7,
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  userEngagementContainer: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoContainer: {
    flex: 6.5,
    backgroundColor: 'yellow',

  },
  EngagementContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 3,

  },
  reactionContainer: {
    flex: 1,
    backgroundColor: 'white',
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
    flex: 1.5,
    backgroundColor: 'white',
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
  homeIcon: {
    width: '50%',
    height: '50%',
  },
  searchIcon: {
    width: '50%',
    height: '50%',
  },
  addIcon: {
    width: '50%',
    height: '50%',
  },
  notificationsIcon: {
    width: '50%',
    height: '50%',
  },
  profileIcon: {
    width: '50%',
    height: '50%',
  },
  typeText1: {
    fontSize: 16,

  },
  typeText2: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: 'gray',
    fontWeight: 'bold',
  },
  typeText3: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: 'gray',
  },

});
