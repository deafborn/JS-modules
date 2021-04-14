import React, { useState } from 'react'


const Notes = () => {
    const [value, setValue] = useState('');
    const [arr, setArr] = useState([]);
    const [editNum, setEditNum] = useState(null);
    const [find, setFind] = useState('');
    let i = 1;
    
    function addToList() {
        const tempArr = [...arr];
        editNum !== null ? (tempArr[editNum] = value) : tempArr.push(value);
        setArr([...tempArr]);
        setValue('');
        setEditNum(null);
    } 

    function deleteItem(index) {
        setArr([...arr.slice(0, index), ...arr.slice(index + 1)]);
    }

    const item = arr.map((el, index) => {
        
        return <li key={index} 
            onClick={(e) => {
                setEditNum(index);
                setValue(arr[editNum]);
                
                e.target.style.color = 'black';
            }
            }>
                Заметка {i++}: {el} <button onDoubleClick={() => deleteItem(index)}>
                Удалить
            </button>
        </li>
    });

    function findText () {
        arr.filter((el, index) => { 
            if (el.includes(find)) {
              let num = index;
 
              const lis = document.querySelectorAll('li');
              let li = lis[num];
              li.style.color = 'red';
              
              setFind('');
            }
        })
    }

    return (
    <>
    <div className = 'fieldset'>    
           
        <ul className='list'>
            {item}
        </ul>

        <div className='field'>
            <textarea className='textarea' value={value} onChange={e => setValue(e.target.value)} onBlur={addToList}/>
        
            <div class='search-input'>
                <div className="search-input__wrapper">
                    <input value={find} onChange={e => setFind(e.target.value)}/>
                    <button onClick={findText}>Найти</button>
                </div>
            </div>
        </div>

    </div>
    
    </>
    );
} 

export default Notes;