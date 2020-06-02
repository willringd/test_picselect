import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const Page = () => {
  const [value, setValue] = React.useState([]);
  const [all, setAll] = React.useState(0);
  const pictures = [
    {
      id: '1',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '2',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '3',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
  ];// 同上面的数据
  
  console.log(value); // 输出用户选择图片 id。
  
  const PictureSelect = (props) => {
    function selectedAll () {
      setValue(["1","2","3"])
      setAll(1)
    }
    function selectedNone () {
      setValue([])
      setAll(0)
    }
    function remove (n) {
      const arr = [...value]
      arr.indexOf(n)
      arr.splice(arr.indexOf(n), 1)
      setValue(arr)
      console.log(value)
      setAll(0)
    }
    function add (n) {
      const arr = [...value]
      arr.push(n)
      setValue(arr)
      console.log(value)
      if (arr.length===3) {
        setAll(1)
      }
    }
    return (
      <div className="box">
        <div>
          {all === 0 ? <span className="allSelect" onClick={selectedAll}></span>: <span className="allSelected" onClick={selectedNone}></span>}
          <span>已选中三张图片</span>
        </div>
        {pictures.map((item) => {
          return(
            <div key={item.id} className="imgBox">
              {value.indexOf(item.id) > -1 ? <span className="selected" onClick={()=>{remove(item.id)}}></span> : <span className="select" onClick={() => {add(item.id)}}></span>}
              <img src={item.url} />
            </div>
          )
        })}
      </div>
    )
  }
  return <PictureSelect pictures={pictures} all={all} value={value} onChange={(value) => setValue(value)} />
};
export default Page;
