import './MailList.css'

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className="mailTitile">Save Time , Save Money</h1>
      <span className='maildesc'>Signup and we'll send mail to best offers</span>
      <div className="mailContainer">
        <input type="text" className="mailinput" placeholder='Enter Your Email' />
        <button className="mailButoon">Sumbit</button>
      </div>
    </div>
  )
}

export default MailList
