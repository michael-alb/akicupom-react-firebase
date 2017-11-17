const config = {
    apiKey: "AIzaSyBziH6GCNN-2z-5MXYACdVSJciUxS8NNpI",
    authDomain: "akicupom-e5439.firebaseapp.com",
    databaseURL: "https://akicupom-e5439.firebaseio.com",
    projectId: "akicupom-e5439",
    storageBucket: "gs://akicupom-e5439.appspot.com/",
    messagingSenderId: "829727158156"
}

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')
  require('firebase/storage')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export const storage = app.storage()

  export default base