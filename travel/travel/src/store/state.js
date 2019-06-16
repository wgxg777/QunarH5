let defaultcity = '重庆'
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultcity
}
