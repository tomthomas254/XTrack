import React from 'react';
import {Badge} from 'react-native-elements';
import {View, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import {actuatedNormalize} from '../../utils/fonts';
import {SVGIcons} from '../SVGIcons';
import {COLORS} from '../../styles/Colors';
import {FONTS} from '../../configurations/Constants';

const {width} = Dimensions.get('screen');
export default function TabComponent({
  color,
  onPress,
  selected,
  options: {tabBarIcon, tabBarBadge},
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <SVGIcons
          type={tabBarIcon}
          color={color}
          notifyColor={selected ? true : false}
        />
        <RedBadge show={!selected && tabBarBadge} value={tabBarBadge} />
      </View>
    </TouchableOpacity>
  );
}

const RedBadge = ({show}) =>
  show ? (
    <Badge
      containerStyle={styles.badgeContainer}
      status='error'
      textStyle={styles.badgeText}
      badgeStyle={styles.badgeStyle}
    />
  ) : null;

const containerWidth = width / 4 - 10;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: containerWidth,
    position: 'relative',
  },
  badgeContainer: {
    position: 'absolute',
    top: '10%',
    left: containerWidth / 2,
  },
  badgeStyle: {
    borderWidth: 0,
    backgroundColor: COLORS.colorDanger,
  },
  badgeText: {
    fontSize: actuatedNormalize(11),
    fontFamily: FONTS.APP_FONT_REGULAR,
  },
});
