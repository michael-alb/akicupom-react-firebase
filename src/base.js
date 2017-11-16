const config = {
  apiKey: "AIzaSyAARPsvImJvuvnBt1O-hluexqCDkUyGMLA",
  authDomain: "akicupom-a6cc5.firebaseapp.com",
  databaseURL: "https://akicupom-a6cc5.firebaseio.com",
  projectId: "akicupom-a6cc5",
  storageBucket: "gs://akicupom-a6cc5.appspot.com/",
  messagingSenderId: "257310186113"
}

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')
  require('firebase/storage')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export const storage = app.storage()

  export default base