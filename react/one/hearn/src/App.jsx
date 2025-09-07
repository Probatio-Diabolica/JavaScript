import Eq from "./Eq.jsx"

function IDK()
{
    return (
    <h1>Deutschland Deutschland Uber alles,Uber Alles in der welt</h1> 
  )
}

function IDK2()
{
    return (
      <>
      <Eq />
      <IDK />
        <h2>Einigkeit und recht und freitheit, Fur das deutsche vaterland</h2>       
      </>
  )
}


function App() {

  return (
    // <IDK />
    <>
      <IDK2 />
    </>
  )
}

export default App
