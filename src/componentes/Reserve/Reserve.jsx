import { useContext, useState } from "react"
import useFetch from "../../hooks/useFetch"
import "./Reserve.css"
import { SearchContext } from "../../context/SearchContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Reserve = ({ opensetreserve, hotelId, hotel }) => {
    const { data, error, loading } = useFetch(`/hotels/room/${hotelId}`)
    const [selectedRooms, setselectedRooms] = useState([])
    const { date } = useContext(SearchContext)
    const navigate = useNavigate()

    //  Handle Selection Room Number
    const handleSelect = (e) => {
        const checked = e.target.checked
        const value = e.target.value

        //  here we write a condition if room id is new then add in array other wise remove in array 
        setselectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter((id) => {
            return id !== value
        }))

    };
    //  One more function for date mangaing 
    const getDateisRange = (start, end) => {
        const dates = new Date(start.getTime())

        const list = [];
        while (dates <= end) {
            list.push(new Date(dates).getTime())
            dates.setDate(dates.getDate() + 1)
        }
        return list;

    }
    const allDates = getDateisRange(date[0].startDate, date[0].endDate)
    // console.log("allDates", allDates)

    //    Here we cheack on this date room is available or not 
    const isAvailable = (roomNumber) => {
        const timeinNumbers = [];
        console.log(roomNumber)

        roomNumber.unavailableDates?.forEach((currentDate) => {
            currentDate.forEach((mydate) => {
                timeinNumbers.push(new Date(mydate).getTime())
            })
        })
        const isFound = timeinNumbers?.some(date =>
            allDates.includes(date)
        )
        console.log(isFound)
        return !isFound;
    }

    //  here we handle reserve hotel
    const handleClick = async () => {

        try {
            await Promise.all(selectedRooms.map((roomId) => {
                const res = axios.put(`/rooms/availability/${roomId}`, { dates: allDates })
                return res.data;

            }))
            alert("Successfullly Room Booked ...")
            opensetreserve(false)
            navigate('/')
        }
        catch (err) {
        }
    }
    return (
        <>
            <div className="rReserve">
                <div className="rcontainer">
                    <i class="fa-solid fa-circle-xmark closeBtn" onClick={() => { opensetreserve(false) }}></i>

                    <div className="roomInfo">
                        <h3>Select Your Room Info</h3>
                        <div className="hotelsBooked">
                            {
                                data.map((item) => (
                                    <div class="card cardmore" style={{ width: "80%" }}>
                                        <img className="card-img-top" src={hotel.photos[0]} alt="Card image cap" />
                                        <div className="card-body roominfo">
                                            <div className="basic">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">{item.desc}</p>
                                                <span>Max People : <b>{item.maxPeople}</b></span>
                                                <br />
                                                <span>Price : <b>{item.price}</b></span>
                                            </div>
                                            <div className="roomsandprice">
                                                <h5>Room No.</h5>
                                                {
                                                    item.roomNumber.map((room) => (
                                                        <>
                                                            <div className="room">
                                                                <input type="checkbox" value={room._id} onChange={handleSelect}
                                                                    disabled={!isAvailable(room)}
                                                                />
                                                                <label htmlFor="">{room.number}</label>

                                                            </div>
                                                        </>
                                                    ))
                                                }
                                            </div>
                                            <div className="buttons">
                                                <button className="btn btn-primary" onClick={handleClick}>Reserve Now !</button>

                                            </div>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Reserve
