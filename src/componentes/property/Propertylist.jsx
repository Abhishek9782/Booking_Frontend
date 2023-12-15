import UseFetch from '../../hooks/useFetch'
import './propertylist.css'

const propertylist = () => {
    const images = [
        { img: "https://cdn.pixabay.com/photo/2018/02/24/17/17/window-3178666_640.jpg" },
        { img: "https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330850_640.jpg" },
        { img: "https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_640.jpg" },
        { img: "https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347_640.jpg" },
        { img: "https://cdn.pixabay.com/photo/2014/10/16/08/39/bedroom-490779_640.jpg" }
    ]

    const { data, loading, error } = UseFetch('hotels/currentCityhotel/countbyType');
    // console.log("Property List Components", data)
    return (
        <div className='pList'>
            {
                loading ? "   Loading..." : <>
                    {data && images.map((image, i) => (
                        <div className="pListItem" key={i}>
                            <div className="imgparent"> <img src={image.img} alt="" className='pListImage' /></div>
                            <div className="plistTitles">
                                <h1>{data[i]?.type}</h1>
                                <h3> {data[i]?.count} {data[i]?.type}</h3>
                            </div>
                        </div>
                    ))
                    }
                </>


            }
        </div>
    )
}

export default propertylist
