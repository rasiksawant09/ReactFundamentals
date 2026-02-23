import { useState } from 'react'

const App = () => {
  const [notesHeading, setnotesHeading] = useState('');
  const [notesDetails, setnotesDetails] = useState('');
  const [task, settask] = useState([]);
  const [error, setError] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if (!notesHeading.trim()) {
      setError('Note heading cannot be empty.');
      return;
    }
    setError('');
    const copytask = [...task];
    copytask.push({notesHeading, notesDetails});
    settask(copytask);
    setnotesHeading('');
    setnotesDetails('');
  }

const handleNotesHeadingChange  = (e) => {
  console.log(e.target.value);
  setnotesHeading(e.target.value);
}

const handleNotesDetailsChange  = (e) => {
  console.log(e.target.value);
  setnotesDetails(e.target.value);
}

const handleDeleteTask = (idx) =>{
  const copytask = [...task];
  copytask.splice(idx, 1);
  settask(copytask);
}

  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form className='flex items-start p-10 flex-col gap-4 lg:w-1/2' onSubmit={submitHandler}>
      <h1 className='text-4xl font-bold'>Add Notes</h1>
        <input type="text" className='px-5 py-2 w-full border-2 rounded' onChange={handleNotesHeadingChange} placeholder='Enter Notes Heading' value={notesHeading}/>
        {error && <span className="text-red-500 text-sm">{error}</span>}
        <textarea className='px-5 py-2 w-full h-30 border-2 rounded font-medium outline-1' onChange={handleNotesDetailsChange} placeholder='Write Details' value={notesDetails} />
        <button className='bg-white text-black w-full px-5 py-2 rounded' disabled={!notesHeading.trim()}>Add Note</button>
        {/* <img className= 'h-80 rotate-y-180' src="https://images.unsplash.com/photo-1655204340764-303c1153c950?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d3JpdGluZyUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D" 
        alt="note Image" /> */}
      </form>
      <div className=' p-10 lg:w-1/2 bg-gray-900 h-full '>
        <h1 className='text-xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-4 m-4 h-full overflow-y-hidden'>
          {task.map((note, index) => (
            <div key={index} className='h-52 w-40 rounded-2xl bg-white p-4 flex flex-col justify-between'>
              <div>
                <h2 className='text-lg font-bold text-black text-center'>{note.notesHeading}</h2>
                <p className='text-sm text-gray-700'>{note.notesDetails}</p>
              </div>
              <button className='bg-red-500 text-white px-2 py-1 rounded mt-2 w-full cursor-pointer active:scale-95' onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
