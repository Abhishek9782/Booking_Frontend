import './DiscountBox.css'

const DiscountBox = () => {
  return (
      <div className='discountbox'>
          <img className='discountImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8x2pxDfSmFr0-2Vj9ciMv1I2ZgY4d9lVoQ&usqp=CAU" alt="" />
          <div className="discountdesc">
              <h1 className="discountHeading">Get Instant Discount</h1>
              <span>Just Sign in Your Account and Get Discount for blue Genius Logo save</span>
              <div className="discountButton">
                 <button className='discountSign'>Sign In </button>
                 <button className='discountRegister'>Register</button>
              </div>
          </div>
      
    </div>
  )
}

export default DiscountBox
