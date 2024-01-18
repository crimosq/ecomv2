import React from 'react';

const Footer = () => {

    return (
    <footer>
    <div class='container-list'>
        <ul class="second-list">
            <li className="allcaps">Get Help</li>
            <li className="lowercase">Order Status</li>
            <li className="lowercase"> Shipping and Delivery</li>
            <li className="lowercase">Returns</li>
            <li classNme="lowercase"> Contacts us</li>
        </ul>

        <ul class="third-list">
            <li className="allcaps">About</li>
            <li className="lowercase">News</li>
            <li className="lowercase">Careers</li>
            <li className="lowercase">Investors</li>
            <li className="lowercase">Sustainability</li>
        </ul>
     

</div>

            <ul class="fourth-list">
                
                <li><img className='icon'src = '/images/faceBook.png' alt='FaceBook'/ ></li>
                <li><img className='icon'src = '/images/instagram.png' alt = 'Instagram'/ ></li>
                <li><img className='icon'src = '/images/youtube.png' alt='Youtube' / ></li>
                <li><img className='icon'src = '/images/medium.png' alt='Medium' / ></li>
            </ul>
</footer>
    );
}

export default Footer;