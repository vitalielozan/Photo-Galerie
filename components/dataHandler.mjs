export default class DataHandler {
  static async fetchData() {
    try {
      const res = await fetch('data.json');
      const data = await res.json();
      return data;
    } catch (error) {
      console.log('Error', error);
    }
  }
}
