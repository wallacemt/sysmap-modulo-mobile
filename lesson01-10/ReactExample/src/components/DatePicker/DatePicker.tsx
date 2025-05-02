import {useState} from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {themes} from '../../assets/themes';

interface DatePickerProps {
  onChange?: (date: Date) => void;
  label: string;
}

export const DatePicker = ({onChange, label}: DatePickerProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    if (selectedDate) {
      const updatedDate = new Date(selectedDate);

      if (mode === 'date') {
        updatedDate.setFullYear(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
        );
      } else {
        updatedDate.setHours(
          selectedDate.getHours(),
          selectedDate.getMinutes(),
        );
      }
      setDate(updatedDate);

      if (mode === 'date') {
        setMode('time');
        setShow(true);
      }else{
        setShow(false);
        onChange && onChange(updatedDate);
      }
    }
  };

  const showPicker = (mode: 'date' | 'time') => {
    setShow(true);
    setMode(mode);
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const mouth = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${mouth}/${year} ${hour}:${minutes}`;
  };

  return (
    <>
      {show && (
        <DateTimePicker
          value={date}
          locale="pt-BR"
          mode={mode}
          is24Hour={true}
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={handleDateChange}
        />
      )}
      <View style={{marginTop: 20}}>
        <Text>{label}</Text>
        <TouchableOpacity onPress={() => showPicker('date')}>
          <View
            style={{
              width: '90%',
              height: 57,
              justifyContent: 'center',
              backgroundColor: themes.colors.whiteA3,
              borderRadius: 8,
              paddingLeft: 10,
            }}>
            <Text>{formatDate(date)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
