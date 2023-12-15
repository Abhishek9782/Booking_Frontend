import './List.css'
import Navbar from '../componentes/Navbar/Navbar'
import Header from '../componentes/Header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../componentes/searchItem/SearchItem'
import useFetch from '../hooks/useFetch'


const List = () => {
  const location = useLocation()

  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [option, setOption] = useState(location.state.option)
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, error, reFetchData, loading } = useFetch(`/hotels/?city=${destination}&min=${min || 0}&max=${max || 50000}&limit=10`)


  const handleRefetch = () => {
    let refetchedData = reFetchData();
  };


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} onChange={(e) => { setDestination(e.target.value) }} />
            </div>
            <div className="lsItem">
              <label htmlFor="">Ceck-In-Date</label>
              <span onClick={() => { setOpenDate(!openDate) }}>{`${format(date[0].startDate, "MM/dd/yy")
                } to ${format(date[0].endDate, "MM/dd/yy")
                }`}</span>
              {openDate && <DateRange onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}
            </div>
            <div className="listItem">
              <label htmlFor="">Option</label>
              <div className="listItemOption">

                <div className="lsitemOptionItem">
                  <span className="lsOptionText">Min Price <small>(Per Night)</small></span>
                  <input type="number" onChange={(e) => { setMin(e.target.value) }} />
                </div>
                <div className="lsitemOptionItem">
                  <span className="lsOptionText" >Max Price <small>(Per Night)</small></span>
                  <input type="number" onChange={(e) => { setMax(e.target.value) }} />
                </div>
                <div className="lsitemOptionItem">
                  <span className="lsOptionText">Adult <small>(Per Night)</small></span>
                  <input min={1} className='listoptioninput' type="number" placeholder={option.adults} />
                </div>
                <div className="lsitemOptionItem">
                  <span className="lsOptionText">Childeren <small>(Per Night)</small></span>
                  <input min={0} type="number" placeholder={option.children} />
                </div>
                <div className="lsitemOptionItem">
                  <span className="lsOptionText">Room No <small>(Per Night)</small></span>
                  <input min={1} type="number" placeholder={option.room} />
                </div>

              </div>
            </div>
            <button className='optionSearchbutton' onClick={handleRefetch}>Search</button>
          </div>
          <div className="listResult">
            {loading ? "Wait Hotels Searching ..." :
              <>
                {data.map((searchHotel) => (
                  < SearchItem hotel={searchHotel} key={searchHotel._id} />
                ))

                }
              </>
            }


          </div>
        </div>
      </div>

    </div>
  )
}

export default List
