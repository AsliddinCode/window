import React from 'react';
import PropTypes from 'prop-types';
import Swiper from '../pages/swipers/Swiper';
function CardProduct(props) {
    const { product, handleLike, handleKorzina } = props;
    const {
        id,
        img,
        count,
        title,
        price,
        isLiked,
        isKorzina
    } = product;

    return (
        <div className="block-card">
            <div className="part1">
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
            </div>
            <div className="part2">
            <Swiper imags={img}/>
            </div>
            <div className="part3">
                <p>{title}</p>
            </div>
            <div className="part4">
                <p>{price} ₽</p>
                <div className="btn-nachile">
                    <p>{count > 0 ? 'qancha kere' : 'tugadi'}</p>
                    <button onClick={() => handleKorzina(id)}>
                        {
                            isKorzina ? (
                                <img src='/task.png'/>
                            ) : (
                                <img src="/korzina.png" alt="" />
                            )
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardProduct;

CardProduct.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    count: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    isKorzina: PropTypes.bool,
    isLiked: PropTypes.bool,
}
