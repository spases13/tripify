import { View } from 'react-native';
import CustomInput from '../library/CustomInput';
import GlobalStyles from '../global_styles/GlobalStyles';

const HomeSearchBar = () => {
  return (
    <View style =  {{paddingHorizontal : GlobalStyles.paddingScreen}}>
    <CustomInput
      icon = "search-outline"
      placeholder = "Search Destinations"
      keyboardType = "default"
      />
    </View>
  )
}

export default HomeSearchBar