import Head from 'next/head'
// import ReactJsonViewCompare from 'react-json-view-compare'
// import dynamic from 'next/dynamic'
// const ReactJsonViewCompare = dynamic(() => import('react-json-view-compare'), {
//   ssr: false,
// })
import Sample from '../components/sample'

export default function Home() {
  const oldData = {
    name: 'super',
    age: 18,
    task: [
      { name: 'eat', time: '09:00' },
      { name: 'work', time: '10:00' },
      { name: 'sleep', time: '22:00' }
    ]
  }

  const newData = {
    name: 'coolapt',
    age: 20,
    task: [
      { name: 'eat', time: '09:00' },
      { name: 'work', time: '10:00' },
      { name: 'sleep', time: '23:00' },
      { name: 'running', time: '08:00' }
    ]
  }

  return (
    <div className="container">
      <main>
        <Sample oldData={oldData} newData={newData} />
      </main>
    </div>
  )
}
