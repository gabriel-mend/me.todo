import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getData(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : {}
  } catch (e) {
    console.log(e)
  }
}

export async function storeData(value, key) {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log(e)
  }
}
