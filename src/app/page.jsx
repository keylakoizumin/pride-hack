import styles from './page.module.css'
// import fetch from 'node-fetch';


// Victor Test Api Endpoint Call
async function getData() {
  const res = await fetch('http://localhost:3000/api/')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main className={styles.main}>
      <h1>Pride Hack</h1>
      <button> button </button>
    </main>
  )
}
