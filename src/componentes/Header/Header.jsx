import { useContext, useState } from "react";
import "./Header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate, Link } from 'react-router-dom'
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";


const Header = ({ type, homecss, flightscss, attractioncss, Carrental, airportTaxi }) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate()

  const handleOption = (name, opertaion) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: opertaion === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  const { dispatch } = useContext(SearchContext);
  const { user } = useContext(AuthContext);



  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, date, option } });
    navigate('/hotels', { state: { destination, date, option } })
  }

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listmode" : "headerContainer"}>
        <div className="headerList">
          <div className={`headerListItem ${homecss}`} >
            <i class="fa-solid fa-bed"></i>
            <span> <Link to="/" className="link">Stays</Link></span>
          </div>

          <div className={`headerListItem ${flightscss}`}>
            <i class="fa-solid fa-plane"></i>
            <span><Link to="/flights" className="link">Flights</Link></span>
          </div>

          <div className={`headerListItem ${Carrental}`}>
            <i class="fa-solid fa-car"></i>
            <span><Link to="/car-rental" className="link">Car Rental</Link></span>
          </div>

          <div className={`headerListItem ${attractioncss}`}>
            <i class="fa-solid fa-magnet"></i>
            <span><Link to="/attraction" className="link">Attractions</Link></span>
          </div>

          <div className={`headerListItem ${airportTaxi}`}>
            <i class="fa-solid fa-taxi"></i>
            <span><Link to="/airport-taxis" className="link">Airport Taxis</Link></span>
          </div>

        </div>
        {type !== "list" && <> <h1 className="headerTitle">A Lifetime of discounts ? It's Genius.</h1>
          <p className="headerDesc">
            Get Rewarded fotr Your Travels - and Unlock Instant Saving of 10% or
            mobile with a free Lambolooking account
          </p>
          {!user && <button className="headerButton"><Link className="link" to="/user-login">Sign in / Register</Link></button>}
          <div className="headerSeacrh">
            <div className="headerSearchItem">
              <i class="fa-solid fa-magnifying-glass headericon"></i>
              <input
                type="text"
                placeholder="Enter Your Loctaion"
                className="headerSearchInput"
                onChange={(e) => { setDestination(e.target.value) }}
              />
            </div>
            <div className="headerSearchItem ">
              <i class="fa-regular fa-calendar-days headericon pointer"></i>
              <span
                onClick={() => {
                  setOpenDate(!openDate);
                }}
                className="headerSearchText"
              >{`${format(date[0].startDate, "MM/dd/yy")} to ${format(
                date[0].endDate,
                "MM/dd/yy"
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                // minDate={new Date()}
                />
              )}
            </div>
            <div className="headerSearchItem">
              <i class="fa-solid fa-person headericon"></i>
              <span onClick={() => { setOpenOption(!openOption) }} >
                {`${option.adults} person . ${option.children} children . ${option.room} room`}
              </span>

              {openOption && (
                <div className="option">
                  <div className="optionItem">
                    <div className="optionText">Adults</div>
                    <div className="buttonCounter">
                      <button
                        disabled={option.adults <= 1}
                        className="optionCounterButton"
                        onClick={() => {
                          handleOption("adults", "d");
                        }}
                      >
                        -
                      </button>
                      <div className="optionCounterText">{option.adults}</div>
                      <button
                        className="optionCounterButton"
                        onClick={() => {
                          handleOption("adults", "i");
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <div className="optionText">Children</div>
                    <div className="buttonCounter">
                      <button
                        disabled={option.children <= 0}
                        className="optionCounterButton"
                        onClick={() => {
                          handleOption("children", "d");
                        }}
                      >
                        -
                      </button>
                      <div className="optionCounterText">{option.children}</div>
                      <button
                        className="optionCounterButton"
                        onClick={() => {
                          handleOption("children", "i");
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <div className="optionText">Room</div>
                    <div className="buttonCounter">
                      <button
                        disabled={option.room <= 1}
                        className="optionCounterButton"
                        onClick={() => {
                          handleOption("room", "d");
                        }}
                      >
                        -
                      </button>
                      <div className="optionCounterText">{option.room}</div>
                      <button
                        className="optionCounterButton"
                        onClick={() => {
                          handleOption("room", "i");
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="headerSearchItem">
              <button className="headerBtnSearch" onClick={() => { handleSearch() }}>Search</button>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
};

export default Header;
