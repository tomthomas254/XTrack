import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars';
import { HABIT, HABITCATAGORY } from '../../mockdata/mockdata';
import { styles } from './styles';
import { Modal, PaperProvider, Portal } from 'react-native-paper';
import CalenderModal from '../../components/CalenderModal';
import { getCurrentMonthDays, getPreviousMonthDays } from '../../utils/utils';
import { Icons } from '../../components/SVGIcons/SVGIcons/Icons';

const Habit = ({navigation}) => {
    const [selectedId, setSelectedId] = useState();
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState()

    const closeModal = ()=>{
        setVisible(false)
    }


    // const days = getCurrentMonthDays(2024, 2)
    const days = Array.from({ length: getCurrentMonthDays() }, (_, i) => i + 1);
    const previousMonthDays = Array.from({ length: getPreviousMonthDays() }, (_, i) => i + 1);
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.detailsContainer} onPress={() => { setSelectedId(item.id); setVisible(true) }} >
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                <View style={styles.trackerContainer}>
                    <FlatList
                        data={previousMonthDays}
                        renderItem={monthTracker}
                        keyExtractor={(item, i) => i}
                        numColumns={7}
                        style={{ marginRight: '3%' }}
                    />
                    <FlatList
                        data={days}
                        renderItem={monthTracker}
                        keyExtractor={(item, i) => i}
                        numColumns={7}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )

    const dayFilter = (day) => {
        return (HABIT.data1.filter((i) => new Date(i.date).getDate() === day)[0]?.selected)
    }
    const monthTracker = ({ item }) => (
        <View style={[styles.itemTracker, dayFilter(item) ? { backgroundColor: 'rgba(83, 193, 55, 0.8)' } : { backgroundColor: 'rgba(198, 197, 197, 0.62)' }]}>
        </View>

    )
    return (
        <PaperProvider>
            <View style={styles.wrapper}>
                <Text style={styles.headerText}>Habits</Text>
                <TouchableOpacity style={styles.addIcon} onPress={()=>navigation.navigate('HabitCatagory')}>
                    <Icons type="plus" width={28} height={28} color="#152d44"/>
                </TouchableOpacity>
                <FlatList
                    data={HABITCATAGORY.data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                />

            </View>
            <Portal>
                <Modal visible={visible} onDismiss={() => { setVisible(false)}} contentContainerStyle={styles.containerStyle} >
                    <CalenderModal selectedId={selectedId} closeModal={closeModal}/>
                </Modal>
            </Portal>
        </PaperProvider>
    )
}

export default Habit