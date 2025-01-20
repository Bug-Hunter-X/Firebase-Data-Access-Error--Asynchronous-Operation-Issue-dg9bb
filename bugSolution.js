The provided solution uses async/await to handle the asynchronous nature of Firebase data retrieval. This ensures the code waits for the data to be fully loaded before attempting to access any properties.  
```javascript
async function getData() {
  const docRef = db.collection('myCollection').doc('myDoc');
  const docSnapshot = await docRef.get();

  if (docSnapshot.exists()) {
    const data = docSnapshot.data();
    console.log('Data:', data.propertyName); // Access properties safely
  } else {
    console.log('No such document!');
  }
}
```