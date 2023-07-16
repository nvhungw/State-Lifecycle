import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [words, setWord] = useState([])
  const [searchWord, setSearchWord] = useState("hello")

  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    //Gọi api: async
    async function fetchData(){
      try{
        setLoading(true)
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
        if(res.status === 200) {
          const data = await res.json()
          setWord(data)
          setLoading(false)
        }
      }catch (e){
        setWord([])
      }
    }

    fetchData()
  }, [searchWord]) 

  const showLoading = () => {
    if(isLoading){
      return <p>Loading...</p>
    }
    return words?.map(wordItem =>
      <div key={wordItem.word}>
        <h1>Word: {wordItem.word}</h1>
        {wordItem.phonetics[0]?.audio && <audio controls src={wordItem.phonetics[0]?.audio}></audio>}
      </div>
      )
  }

  const changeWord = (e) => {
    setSearchWord(e.target.value)
  }

  return (
    <>
      <input name='word' onBlur={(e) => changeWord(e)} value={searchWord} onChange={(e) => changeWord(e)} />
      {showLoading()}
    </>
  )
}

export default App;
