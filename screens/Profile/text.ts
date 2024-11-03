import {useState} from 'react';

const {heartCount, setHearthCount} = useState(999);

const UserPost = props => {
  const myFunction = () => {
    setHearthCount(heartCount + 1);
  };

  <TouchableOpacity onPress={myFunction()}>
            <FontAwesomeIcon
              icon={faHeart}
              color={heartCount > 0 ? 'red' : '#79869F'}
            />
          </TouchableOpacity>

          <Text style={style.userPostStatText}>{heartCount}</Text>