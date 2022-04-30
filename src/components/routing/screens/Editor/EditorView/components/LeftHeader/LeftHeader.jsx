import { useNavigate } from 'react-router'

import './LeftHeader.css'

export const LeftHeader = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div 
      className='LeftHeader'
      style={{
        height: '100px',
        backgroundColor: '#264040',
        color: 'white',
        // textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div onClick={goBack} style={{ cursor: 'pointer', margin: '0px 5px', padding: '5px', border: '1px solid white', borderRadius: '5px' }} >back button</div>
      {/* <img width='100' src='https://dynamic.brandcrowd.com/asset/logo/c3cf1bd1-4261-4d85-a6c6-52dbce75799d/logo-search-grid-1x?v=637678103961270000' /> */}
      <div style={{margin: '0px 5px', padding: '5px', border: '1px solid white'}}>Save</div>
      <div style={{margin: '0px 5px', padding: '5px', border: '1px solid white'}}>Options</div>
      <div style={{margin: '0px 5px', padding: '5px', border: '1px solid white'}}>Add Row</div>
      <div style={{margin: '0px 5px', padding: '5px', border: '1px solid white'}}>Export MU chart</div>
    </div>
  )
}