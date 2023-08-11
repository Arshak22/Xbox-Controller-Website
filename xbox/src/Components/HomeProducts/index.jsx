import React from "react";
import './style.css';

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

export default function HomeProducts() {
    const product_list = [
        {id: 1, name: 'Xbox One Custom Controller - Hex Edition', old_price: '£119.99', new_price: '£64.99', image: P1_1, hover_image: P1_2},
        {id: 2, name: 'Xbox One Custom Controller - The Venom Edition', old_price: '£119.99', new_price: '£64.99', image: P2_1, hover_image: P2_2},
        {id: 3, name: 'Xbox Series X Custom Controller - Blue Storm Edition', old_price: '£129.99', new_price: '£79.99', image: P3_1, hover_image: P3_2},
        {id: 4, name: 'Xbox One Custom Controller - 3D Red Shadow Edition', old_price: '£129.99', new_price: '£79.99', image: P4_1, hover_image: P4_2},
        {id: 5, name: 'Xbox One Custom Controller - Neo Storm Edition', old_price: '£129.99', new_price: '£64.99', image: P5_1, hover_image: P5_2},
        {id: 6, name: 'Xbox Series X Custom Controller - Joker Edition', old_price: '£129.99', new_price: '£79.99', image: P6_1, hover_image: P6_2},
        {id: 7, name: 'Xbox Series X Custom Controller - Octo Edition', old_price: '£129.99', new_price: '£79.99', image: P7_1, hover_image: P7_2},
        {id: 8, name: 'Xbox Series X Custom Controller - Zombie Edition', old_price: '£119.99', new_price: '£79.99', image: P8_1, hover_image: P8_2},
        {id: 9, name: 'Xbox Series X Custom Controller - Ancient Eye Edition', old_price: '£119.99', new_price: '£79.99', image: P9_1, hover_image: P9_2},
        {id: 10, name: 'Xbox Series X Custom Controller - Blue Flame Edition', old_price: '£129.99', new_price: '£59.99', image: P10_1, hover_image: P10_2},
        {id: 11, name: 'Xbox Series X Custom Controller - Red Raven Edition', old_price: '£129.99', new_price: '£79.99', image: P11_1, hover_image: P11_2},
        {id: 12, name: 'Xbox Series X Custom Controller - Blue Splatter Edition', old_price: '£119.99', new_price: '£69.99', image: P12_1, hover_image: P12_2},
        {id: 13, name: 'Xbox One Custom Controller - Biohazard Edition', old_price: '£119.99', new_price: '£69.99', image: P13_1, hover_image: P13_2},
        {id: 14, name: 'Xbox Elite Series 2 Custom Controller - Ijen Edition', old_price: '£249.95', new_price: '£134.99', image: P14_1, hover_image: P14_2},
        {id: 15, name: 'Xbox Series X Custom Controller - Mischief Edition', old_price: '£119.95', new_price: '£79.99', image: P15_1, hover_image: P15_2},
        {id: 16, name: 'Xbox Series X Custom Controller - Wave Edition', old_price: '£119.95', new_price: '£79.99', image: P16_1, hover_image: P16_2},
        {id: 17, name: 'Xbox Series X Custom Controller - Glitch Edition', old_price: '£129.95', new_price: '£79.99', image: P17_1, hover_image: P17_2},
        {id: 18, name: 'Xbox One Custom Controller - Military Skull Edition', old_price: '£129.95', new_price: '£64.99', image: P18_1, hover_image: P18_2},
        {id: 19, name: 'Xbox One Custom Controller - 3D Blue Shadow Edition', old_price: '£99.95', new_price: '£64.99', image: P19_1, hover_image: P19_2},
        {id: 20, name: 'Xbox Series X Custom Controller - Dark Lord Edition', old_price: '£129.95', new_price: '£79.99', image: P20_1, hover_image: P20_2}
    ];
    return(
        <div className="homeProducts">
            <div className="productList">
                <div className="productFilters">
                    <h3 className="underline-hover">Featured</h3>
                    <h3 className="underline-hover">Best Selling</h3>
                    <h3 className="underline-hover">Limited Edition</h3>
                </div>
            </div>
            
        </div>
    );
}