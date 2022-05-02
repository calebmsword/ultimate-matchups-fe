import './RightHeader.css'


export const RightHeader = () => {
  return (
    <div // className='header2'
      style={{
        height: '50px',
        backgroundColor: 'DarkSlateGray',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
      <div style={{width: '100%'}}>
        <input type='text' placeholder='search bar' /> <button>sort</button>
      </div>
    </div>
  )
}