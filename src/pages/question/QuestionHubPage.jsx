import SearchBox from "../component/SearchBox";

export default () => {
  return (
      <>
        <SearchBox onInputChange={(input)=>{console.log('%o',input)}}></SearchBox>
      </>
  )
}