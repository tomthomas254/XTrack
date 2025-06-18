import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { FAB, Portal, PaperProvider } from 'react-native-paper';
import { Icons } from '../../components/SVGIcons/SVGIcons/Icons';

const FloatingActionButton = ({navigation}) => {
    const [state, setState] = React.useState({open: false });
    const onStateChange = ({open}) => setState({open});
    const {open} = state;

    return (
    <PaperProvider>
      <Portal>
        <FAB.Group
          open={open}
          visible={true}
          icon={()=>!open? <Icons type="plus" width={24} height={24} color="black" />:<Icons type="cross" width={24} height={24} color="black" />}
          actions={[
            { icon:()=><Icons type="money-out" width={24} height={24} color="red" />, onPress: () => navigation.navigate('Home') },
            {
              icon: ()=><Icons type="money-in" width={24} height={24} color="green" />,
              onPress: () => console.log('Pressed star'),
            }
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </PaperProvider>
    );

}

export default FloatingActionButton

const styles = StyleSheet.create({
  

})