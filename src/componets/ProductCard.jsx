import React from 'react'
import PropTypes from 'prop-types';
import SwiperS from '../pages/swipers/Swiper';
function Product(props) {
  const { product, handleLike, handleKorzina } = props
  const {
    id,
    img,
    count,
    title,
    desc,
    price,
    isLiked,
    isKorzina
  } = product

  return (

    <div>
      <div className="main-card">
        <SwiperS imags={img}/>
        <div className="title">
          <h3>{title}</h3>
          <p>{desc}</p>
          <p>{count >= 1 ? "qancha kere" : "tugadi"}</p>
        </div>
        <div className="prise">
          <div className="btn-korzina">
            <button>
              <img src="/strelka.png" alt="" />
            </button>
            <button onClick={() => handleLike(id)}>
              {
                isLiked ? (
                  <img src="/redheart.png" alt="" />
                ) : (
                  <img src="/heart.png" alt="" />
                )
              }
            </button>

            <button onClick={() => handleKorzina(id)}>
              {
                isKorzina ? (
                  <img src="/task.png" alt="" />
                ) : (
                  <img src="/korzina.png" alt="" />
                )
              }
            </button>
          </div>
          <div className="prise-rubl">
            <span>{price}$</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Product

Product.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  count: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  isKorzina: PropTypes.bool,
  isLiked: PropTypes.bool,
}
