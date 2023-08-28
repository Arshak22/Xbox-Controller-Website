import { React, useState, useEffect } from "react";
import './style.css';
import ListProduct from "../ListProduct";

//Product Images
import P1_1 from '../../assets/images/products/1-1.png';
import P1_2 from '../../assets/images/products/1-2.png';

import P2_1 from '../../assets/images/products/2-1.png';
import P2_2 from '../../assets/images/products/2-2.png';

import P3_1 from '../../assets/images/products/3-1.png';
import P3_2 from '../../assets/images/products/3-2.png';

import P4_1 from '../../assets/images/products/4-1.png';
import P4_2 from '../../assets/images/products/4-2.png';

import P5_1 from '../../assets/images/products/5-1.png';
import P5_2 from '../../assets/images/products/5-2.png';

import P6_1 from '../../assets/images/products/6-1.png';
import P6_2 from '../../assets/images/products/6-2.png';

import P7_1 from '../../assets/images/products/7-1.png';
import P7_2 from '../../assets/images/products/7-2.png';

import P8_1 from '../../assets/images/products/8-1.png';
import P8_2 from '../../assets/images/products/8-2.png';

import P9_1 from '../../assets/images/products/9-1.png';
import P9_2 from '../../assets/images/products/9-2.png';

import P10_1 from '../../assets/images/products/10-1.png';
import P10_2 from '../../assets/images/products/10-2.png';

import P11_1 from '../../assets/images/products/11-1.png';
import P11_2 from '../../assets/images/products/11-2.png';

import P12_1 from '../../assets/images/products/12-1.png';
import P12_2 from '../../assets/images/products/12-2.png';

import P13_1 from '../../assets/images/products/13-1.png';
import P13_2 from '../../assets/images/products/13-2.png';

import P14_1 from '../../assets/images/products/14-1.png';
import P14_2 from '../../assets/images/products/14-2.png';

import P15_1 from '../../assets/images/products/15-1.png';
import P15_2 from '../../assets/images/products/15-2.png';

import P16_1 from '../../assets/images/products/16-1.png';
import P16_2 from '../../assets/images/products/16-2.png';

import P17_1 from '../../assets/images/products/17-1.png';
import P17_2 from '../../assets/images/products/17-2.png';

import P18_1 from '../../assets/images/products/18-1.png';
import P18_2 from '../../assets/images/products/18-2.png';

import P19_1 from '../../assets/images/products/19-1.png';
import P19_2 from '../../assets/images/products/19-2.png';

import P20_1 from '../../assets/images/products/20-1.png';
import P20_2 from '../../assets/images/products/20-2.png';


export default function ShopList() {
    const [filter, setFilter] = useState('featured');
    const featured = [
        {id: 1, name: 'Xbox One Custom Controller - Hex Edition', old_price: '$119.99', new_price: '$64.99', image: P1_1, hover_image: P1_2},
        {id: 2, name: 'Xbox One Custom Controller - The Venom Edition', old_price: '$119.99', new_price: '$64.99', image: P2_1, hover_image: P2_2},
        {id: 3, name: 'Xbox Series X Custom Controller - Storm Edition', old_price: '$129.99', new_price: '$79.99', image: P3_1, hover_image: P3_2},
        {id: 4, name: 'Xbox One Custom Controller - 3D Red Shadow Edition', old_price: '$129.99', new_price: '$79.99', image: P4_1, hover_image: P4_2},
        {id: 5, name: 'Xbox One Custom Controller - Neo Storm Edition', old_price: '$129.99', new_price: '$64.99', image: P5_1, hover_image: P5_2},
        {id: 6, name: 'Xbox Series X Custom Controller - Joker Edition', old_price: '$129.99', new_price: '$79.99', image: P6_1, hover_image: P6_2},
        {id: 7, name: 'Xbox Series X Custom Controller - Octo Edition', old_price: '$129.99', new_price: '$79.99', image: P7_1, hover_image: P7_2},
        {id: 8, name: 'Xbox Series X Custom Controller - Zombie Edition', old_price: '$119.99', new_price: '$79.99', image: P8_1, hover_image: P8_2}
    ];
    const best_selling = [
        {id: 9, name: 'Xbox Series X Custom Controller - Ancient Eye Edition', old_price: '$119.99', new_price: '$79.99', image: P9_1, hover_image: P9_2},
        {id: 10, name: 'Xbox Series X Custom Controller - Blue Flame Edition', old_price: '$129.99', new_price: '$59.99', image: P10_1, hover_image: P10_2},
        {id: 11, name: 'Xbox Series X Custom Controller - Red Raven Edition', old_price: '$129.99', new_price: '$79.99', image: P11_1, hover_image: P11_2},
        {id: 12, name: 'Xbox Series X Custom Controller - Blue Splatter Edition', old_price: '$119.99', new_price: '$69.99', image: P12_1, hover_image: P12_2},
        {id: 13, name: 'Xbox One Custom Controller - Biohazard Edition', old_price: '$119.99', new_price: '$69.99', image: P13_1, hover_image: P13_2},
        {id: 14, name: 'Xbox Elite Series 2 Custom Controller - Ijen Edition', old_price: '$249.95', new_price: '$134.99', image: P14_1, hover_image: P14_2},
        {id: 15, name: 'Xbox Series X Custom Controller - Mischief Edition', old_price: '$119.95', new_price: '$79.99', image: P15_1, hover_image: P15_2},
        {id: 16, name: 'Xbox Series X Custom Controller - Wave Edition', old_price: '$119.95', new_price: '$79.99', image: P16_1, hover_image: P16_2},
    ];
    const limited_edition = [
        {id: 17, name: 'Xbox Series X Custom Controller - Glitch Edition', old_price: '$129.95', new_price: '$79.99', image: P17_1, hover_image: P17_2},
        {id: 18, name: 'Xbox One Custom Controller - Military Skull Edition', old_price: '$129.95', new_price: '$64.99', image: P18_1, hover_image: P18_2},
        {id: 19, name: 'Xbox One Custom Controller - 3D Blue Shadow Edition', old_price: '$99.95', new_price: '$64.99', image: P19_1, hover_image: P19_2},
        {id: 20, name: 'Xbox Series X Custom Controller - Dark Lord Edition', old_price: '$129.95', new_price: '$79.99', image: P20_1, hover_image: P20_2},
        {id: 4, name: 'Xbox One Custom Controller - 3D Red Shadow Edition', old_price: '$129.99', new_price: '$79.99', image: P4_1, hover_image: P4_2},
        {id: 5, name: 'Xbox One Custom Controller - Neo Storm Edition', old_price: '$129.99', new_price: '$64.99', image: P5_1, hover_image: P5_2},
        {id: 12, name: 'Xbox Series X Custom Controller - Splatter Edition', old_price: '$119.99', new_price: '$69.99', image: P12_1, hover_image: P12_2},
        {id: 13, name: 'Xbox One Custom Controller - Biohazard Edition', old_price: '$119.99', new_price: '$69.99', image: P13_1, hover_image: P13_2}
    ];

    useEffect(() => {
        const rangeInput = document.querySelector("[name=range]");
        const rangeOutput = document.querySelector("[for=range]");
        const handleChange = () => {
            const value = rangeInput.value;
            rangeOutput.textContent = `Price: ` + value + `.00 $`;
            rangeInput.value = value;
            rangeInput.dispatchEvent(new Event('input', { bubbles: true }));
        };
        rangeInput.addEventListener("input", handleChange);
        handleChange();
        return () => {
            rangeInput.removeEventListener("input", handleChange);
        };
    }, []);

    const filtering = (filter_cat) => {
        setFilter(filter_cat);
    };

    return(
        <div className="shopList">
            <div className="colL">
                <h3 className="filterHeadline">Filter</h3>
                <div className="form">
                    <form>
                        <div className="productType">
                            <h3>Product Type</h3>
                            <div>
                                <label>
                                <input type="checkbox" name="productType" value="Series X" className="checkbox"/>
                                    <span className="custom-label">Series X</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="productType" value="Xbox One" className="checkbox"/>
                                    <span className="custom-label">Elite</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="productType" value="Series X" className="checkbox"/>
                                    <span className="custom-label">Series S</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="productType" value="Series S" className="checkbox"/>
                                    <span className="custom-label">Xbox One</span>
                                </label>
                            </div>
                        </div>
                    </form>
                    <div className="PriceRange">
                        <label for="range" className="label">Price</label>
                        <input type="range" name="range" min="100" max="1000" step="50" value="200"/>
                    </div>
                    <form>
                        <div className="productType sortBy">
                            <h3>Sort by</h3>
                            <div>
                                <label>
                                <input type="radio" name="productType" value="Alphabetically, A-Z" className="checkbox"/>
                                    <span className="custom-label">Alphabetically, A-Z</span>
                                </label>
                                <label>
                                    <input type="radio" name="productType" value="Alphabetically, Z-A" className="checkbox"/>
                                    <span className="custom-label">Alphabetically, Z-A</span>
                                </label>
                                <label>
                                    <input type="radio" name="productType" value="Price, low to high" className="checkbox"/>
                                    <span className="custom-label">Price, low to high</span>
                                </label>
                                <label>
                                    <input type="radio" name="productType" value="Price, high to low" className="checkbox"/>
                                    <span className="custom-label">Price, high to low</span>
                                </label>
                                <label>
                                    <input type="radio" name="productType" value="Date, old to new" className="checkbox"/>
                                    <span className="custom-label">Date, old to new</span>
                                </label>
                                <label>
                                    <input type="radio" name="productType" value="Date, new to old" className="checkbox"/>
                                    <span className="custom-label">Date, new to old</span>
                                </label>
                            </div>
                        </div>
                    </form>
                    <div>
                        <h3 className="colorPick">Color</h3>
                        <div className="colors">
                            <div className="color-outer C1">
                                <div className="color"></div>
                            </div>
                            <div className="color-outer C2">
                                <div className="color"></div>
                            </div>
                            <div className="color-outer C3">
                                <div className="color"></div>
                            </div>
                            <div className="color-outer C4">
                                <div className="color"></div>
                            </div>
                            <div className="color-outer C5">
                                <div className="color"></div>
                            </div>
                            <div className="color-outer C6">
                                <div className="color"></div>
                            </div>
                            <div className="color-outer C7">
                                <div className="color"></div>
                            </div>
                            <div className="color-outer C8">
                                <div className="color"></div>
                            </div>
                            <div className="color-outer C9">
                                <div className="color"></div>
                            </div>
                            <div className="color-outer C10">
                                <div className="color"></div>
                            </div>
                            <div className="color-outer C11">
                                <div className="color"></div>
                            </div>
                            <div className="color-outer C12">
                                <div className="color"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="colR">
                <div className="homeProducts">
                    <div className="productList">
                        <div className="productFilters">
                            <h3 onClick={() => filtering('featured')} className={`underline-hover ${filter === 'featured' ? 'activeFilter': ''}`}>Featured</h3>
                            <h3 onClick={() => filtering('best')} className={`underline-hover ${filter === 'best' ? 'activeFilter': ''}`}>Best Selling</h3>
                            <h3 onClick={() => filtering('limited')} className={`underline-hover ${filter === 'limited' ? 'activeFilter': ''}`}>Limited Edition</h3>
                        </div>
                    </div>
                    <div className="listOfProducts">
                        <div className={`featured ${filter === 'featured' ? 'activeList': ''}`}>
                            {featured.map((elem, index) => {
                                return(
                                    <ListProduct key={index} product={elem}/>
                                );
                            })}
                        </div>
                        <div className={`bestSelling ${filter === 'best' ? 'activeList': ''}`}>
                            {best_selling.map((elem, index) => {
                                return(
                                    <ListProduct key={index} product={elem}/>
                                );
                            })}
                        </div>
                        <div className={`limitedEdition ${filter === 'limited' ? 'activeList': ''}`}>
                            {limited_edition.map((elem, index) => {
                                return(
                                    <ListProduct key={index} product={elem}/>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}