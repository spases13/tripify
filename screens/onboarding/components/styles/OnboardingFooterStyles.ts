import { StyleSheet } from "react-native";
import Colors from "../../../../colors/Colors";

export const OnboardingFooterStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 7,
    width: 10,
    marginHorizontal: 3,
    borderRadius: 3,
  },
  selectedIndicator: {
    width: 25,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});