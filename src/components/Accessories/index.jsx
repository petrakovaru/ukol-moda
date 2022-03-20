import React from 'react';
import './style.css';
import Product from '../Product';

const Accessories = () => {
    return (
        <section class="accessories">
			<h2>Doplňky</h2>
			<div class="products">
            
            <Product image="blue-handbag.jpg" name="Modrá kabelka" description="Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti." price="3590" />
            <Product image="grey-scarf.jpg" name="Šedá vlněná šála" description="Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné." price="970" />
            <Product image="glasses.jpg" name="Brýle" description="Stylové brýle s velkými žíhanými obroučkami. Zaručeně s nimi zazáříte v místní hipster kavárně." price="1620" />
            
            </div>
		</section>

    );
}

export default Accessories;