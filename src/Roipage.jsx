import React from 'react'

function Roipage() {
    return (
        <>

            <div className=' container col-md-8 mx-auto headers my-4'>
                <h2>Roi calculator</h2>
                <p className=' d-flex flex-row justify-content-end '>
                    <p className=' mx-1'>cake</p>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                    </div>
                    <p className=' mx-1'>usd</p>
                </p>


                <div class="input-group">
                    <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                    <span class="input-group-text">0.00</span>
                </div>
                <span><button type="button" className=" mx-1 my-1 btn btn-outline-info">$1000</button></span>
                <span><button type="button" className="mx-1 my-1 btn btn-outline-info">$1000</button></span>
                <h4 className=' my-1'>timefrome</h4>
                <div className=' d-flex justify-content-round'>
                    <span className='days p-1 m-1 '>day-1</span>
                    <span className='daysxy p-1 m-1 '>day-2</span>
                    <span className='daysxy p-1 m-1'>day-3</span>
                    <span className='daysxy p-1 m-1'>day-4</span>
                    <span className='daysxy p-1 m-1'>day-5</span>
                </div>
                <div className='d-flex justify-content-between my-2'>
                    <div>
                        <h4>Enable Accelerated APY</h4>
                    </div>
                    <div className=''>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />

                        </div>
                    </div>
                </div>

                <p className=' my-1'>timefrome</p>
                <div className=' d-flex justify-content-round'>
                    <span className='days p-1 m-1 '>tier-1</span>
                    <span className='daysxy p-1 m-1 '>tier-2</span>
                    <span className='daysxy p-1 m-1'>tier-3</span>
                    <span className='daysxy p-1 m-1'>tier-4</span>
                    <span className='daysxy p-1 m-1'>tier-5</span>
                </div>

                <div>
                    <p className=' text-end'>Roi at current rated</p>
                    <div class="input-group">
                        <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                        <span class="input-group-text">0.00</span>
                    </div>
                    <p className=' text-end'>Roi at current rated</p>

                </div>


                <p>

                    <div className='d-flex justify-content-center '>

                        <button class="btn" onClick type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            hide details
                        </button>
                    </div>
                </p>
                <div class="collapse" id="collapseExample">
                    <div className="card card-body">
                        <div className='d-flex justify-content-between'>
                            <h5>APY</h5>
                            <h5>9.0</h5>
                        </div>
                        <li>calculated based on current rates</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cum cumque quam delectus qui non commodi ullam praesentium? Ex rerum est fugit animi in nostrum nisi magnam id reprehenderit doloribus!</li>

                    </div>
                </div>


            </div>



        </>
    )
}

export default Roipage
