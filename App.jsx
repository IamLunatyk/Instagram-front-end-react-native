import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/userPost/UserPost';

const App = () => {
  const userStories = [
    {
      firstName: 'Jan',
      id: 1,
      profileImage: require('./assets/images/face1.jpg'),
    },
    {
      firstName: 'Anna',
      id: 2,
      profileImage: require('./assets/images/face2.jpg'),
    },
    {
      firstName: 'Piotr',
      id: 3,
      profileImage: require('./assets/images/face3.jpg'),
    },
    {
      firstName: 'Katarzyna',
      id: 4,
      profileImage: require('./assets/images/face4.jpg'),
    },
    {
      firstName: 'Tomasz',
      id: 5,
      profileImage: require('./assets/images/face5.jpg'),
    },
    {
      firstName: 'Magdalena',
      id: 6,
      profileImage: require('./assets/images/face6.jpg'),
    },
    {
      firstName: 'Mateusz',
      id: 7,
      profileImage: require('./assets/images/face7.jpg'),
    },
    {
      firstName: 'Agnieszka',
      id: 8,
      profileImage: require('./assets/images/face8.jpg'),
    },
    {
      firstName: 'Ryszard',
      id: 9,
      profileImage: require('./assets/images/face9.jpg'),
    },
  ];

  const userPosts = [
    {
      firstName: 'Anna',
      lastName: 'Czubówna',
      location: 'Warszawa',
      likes: 1223,
      comments: 23,
      bookmarks: 55,
      image: require('./assets/images/post1.jpg'),
      profileImage: require('./assets/images/face2.jpg'),
      id: 1,
    },
    {
      firstName: 'Piotr',
      lastName: 'Kowalski',
      location: 'Kraków',
      likes: 987,
      comments: 45,
      bookmarks: 78,
      image: require('./assets/images/post2.jpg'),
      profileImage: require('./assets/images/face3.jpg'),
      id: 2,
    },
    {
      firstName: 'Katarzyna',
      lastName: 'Nowak',
      location: 'Gdańsk',
      likes: 1500,
      comments: 67,
      bookmarks: 34,
      image: require('./assets/images/post3.jpg'),
      profileImage: require('./assets/images/face4.jpg'),
      id: 3,
    },
    {
      firstName: 'Ryszard',
      lastName: 'Wiśniewski',
      location: 'Poznań',
      likes: 2034,
      comments: 89,
      bookmarks: 112,
      image: require('./assets/images/post4.jpg'),
      profileImage: require('./assets/images/face9.jpg'),
      id: 4,
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={globalStyle.header}>
                <Text>
                  <Title title={'Let’s Explore '} />
                </Text>
                <TouchableOpacity style={globalStyle.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color="#898DAE"
                    size={20}
                  />
                  <View style={globalStyle.messageNumberContainer}>
                    <Text style={globalStyle.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={globalStyle.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'useStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            }
            setIsLoadingUserPosts(true);

            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          data={userPostsRenderedData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={globalStyle.userPostContainer}>
                <UserPost
                  firstName={item.firstName}
                  lastName={item.lastName}
                  location={item.location}
                  image={item.image}
                  likes={item.likes}
                  comments={item.comments}
                  bookmarks={item.bookmarks}
                  profileImage={item.profileImage}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
