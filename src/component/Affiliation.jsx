import React from 'react'

const Affiliation = () => {
  return (
    <div className='my-5'>
        <div className="container">
            <div className="sec-title text-center">
                <p className="sec-title__tagline">Affiliation</p>
                {/* /.sec-title__tagline */}
                <h2 className="sec-title__title">
                Earthy Hues is affiliated to
                </h2>
            </div>
        </div>
        <section className='d-flex mb-5'>
            <div className="container text-center">
                <img src="./assets/affiliatedimg/IIMB-Logo-NSRCEL.png" alt="IIMB-Logo-NSRCEL" className='w-25 mx-4'/>
                <img src="./assets/affiliatedimg/Guardian-of-Nature-2.png" alt="affiliatedimg/Guardian-of-Nature" className='w-25 mx-4'/>
                <img src="./assets/affiliatedimg/world-travel-tourism-council-logo.png" alt="world-travel-tourism-council-logo" className='w-25 mx-4'/>
            </div>
        </section>
    </div>
  )
}

export default Affiliation
