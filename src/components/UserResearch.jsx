import React from 'react'
import Header from './Header'
import Add from './Add'
import View from './View'

const UserResearch = () => {
  return (
    <div>
         <Header />
         <div style={{ background: 'white', paddingTop: '100px', minHeight: '55vh', marginBottom: '-50px' }}>
        <h2 style={{ textAlign: 'center' }}>My Research</h2>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Add />
        </div>
        <div className='container'>
            <div style={{
                    background: 'linear-gradient(to right, #FA5B3C, #FFD2A6)',
                    marginTop: '50px',
                    padding: '30px',
                    textAlign: 'center',
                    width: '100%',
                    maxWidth: '500px',
                    boxSizing: 'border-box',
                    marginBottom: '20px',
                  }}
                  className="shadow rounded"
                >
                    <View/>
        </div>

    </div>
    </div>
    </div>
  )
}

export default UserResearch