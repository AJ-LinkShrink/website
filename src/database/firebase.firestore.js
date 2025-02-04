import { doc, getDoc } from 'firebase/firestore'
import { firestoreLinkshrink } from './firebase.init'

export async function getFromFirestore(path) {
  const pathCollection = path.split('/')[0]
  const pathDocument = path.split('/')[1]

  const docRef = doc(firestoreLinkshrink, pathCollection, pathDocument)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) return docSnap.data()
  else return 'notfound'
}
