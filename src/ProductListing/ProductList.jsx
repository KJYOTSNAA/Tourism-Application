import React from 'react'
import Card from '../Card/Card'
import styles from './ProductList.module.css';

function ProductList() {
  const products = [
    {
      "name": "GOLDEN TEMPLE",
      "info": "The Golden Temple, also known as Harmandir Sahib or Darbār Sahib, is a Gurdwara located in the city of Amritsar, Punjab, India. It is the holiest Gurdwara and the most important pilgrimage site of Sikhism.The temple is built around a man-made pool (sarovar) that was completed by Guru Ram Das in 1577.Guru Arjan – the fifth Guru of Sikhism, requested Sai Mian Mir – a Muslim Pir of Lahore to lay its foundation stone in 1589.In 1604, Guru Arjan placed a copy of the Adi Granth in Harmandir Sahib, calling the site Ath Sath Tirath (lit. shrine of 68 pilgrimages).The temple was repeatedly rebuilt by the Sikhs after it became a target of persecution and was destroyed several times by the Muslim armies from Afghanistan and the Mughal Empire.The army led by Ahmad Shah Abdali, for example, demolished it in 1757 and again in 1762, then filled the pool with garbage and blood of cows.Maharaja Ranjit Singh after founding the Sikh Empire, rebuilt it in marble and copper in 1809, overlaid the sanctum with gold foil in 1830. This has led to the name the Golden Temple.",
      "images": "https://iptb.b-cdn.net/wp-content/uploads/2018/07/Golden-Temple-Punjab-1.jpg",
      "location": "https://www.google.co.in/maps/place/Harmandir+Sahib/@31.6199803,74.8764849,15z/data=!4m5!3m4!1s0x0:0x604384897626248e!8m2!3d31.6199803!4d74.8764849"
    },
    {
      "name": "WAGAH BORDER",
      "info": "Located at a distance of 22 km from Lahore and 28 km from Amritsar, Wagah Border marks the boundaries between Indian and Pakistani borders. It runs along the Grand Trunk Road between Amritsar in Punjab, India, and Punjab in Lahore, Pakistan. People from all over the country visit this place to witness the Beating Retreat Ceremony that is held every day before sunset. This ceremony includes the closing of the international gates and lowering the flags of both countries. It is a spectacle to be witnessed and is an occasion where the heart of every Indian is filled with pride and enthusiasm. The flag ceremony has been conducted by the Indian Border Security Force and Pakistan Rangers since 1959.Every evening, just before the sunset, the soldiers from the Indian and Pakistan military meet at this border post to engage in a 30-minute display of military camaraderie and showmanship. Officially, the purpose of the ceremony is to formally close the border for the night and lower the national flag. However, it is an entertainment ceremony and a  display of national pride for the thousands of people who come here every day. During the build-up to the ceremony, the crowd engages in chanting the Indian national anthem, rounds of applause and Bollywood-style dancing on Hindi songs.",
      "images": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/01/06/2fbe754fdfab23544cd28bbfddba8c2f_original.jpg?impolicy=abp_cdn&imwidth=720",
      "location": "https://www.google.co.in/maps/place/Wagah/@31.604757,74.574136,15z/data=!4m2!3m1!1s0x0:0x325315a52b19a1a9?sa=X&ved=2ahUKEwiupo-auvPlAhVL6XMBHYYYC8UQ_BIwJHoECA4QCA"
    },
    {
      "name": "JALLIANWALA BAGH",
      "info": "Jallianwala Bagh is a historic garden and ‘memorial of national importance’ in Amritsar, India, preserved in the memory of those wounded and killed in the Jallianwala Bagh Massacre that occurred on the site on the festival of Vaisakhi, 13 April 1919.It houses a museum, gallery and a number of memorial structures.The 7-acre (28,000 m2) garden site of the massacre is located in the vicinity of the Golden Temple complex, the holiest shrine of Sikhism and is managed by the Jallianwala Bagh National Memorial Trust, which was established as per the 'Jallianwala Bagh National Memorial Act, 1951'.",
      "images": "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Jallianwala-Bagh_600.jpg",
      "location": "https://www.google.co.in/maps/place/Jallianwala+Bagh/@31.0529259,74.7523128,8z/data=!4m5!3m4!1s0x0:0xcb013976169cb75b!8m2!3d31.6206437!4d74.8801088"
    },
    {
      "name": "BHAKRA NANGAL DAM",
      "info": "Bhakra Dam is a concrete gravity dam on the Sutlej River in Bilaspur, Himachal Pradesh in northern India. The dam forms the Gobind Sagar reservoir.The dam, located at a gorge near the (now submerged) upstream Bhakra village in Bilaspur district of Himachal Pradesh of height 226 m. The length of the dam (measured from the road above it) is 518.25 m and the width is 9.1 m. Its reservoir known as 'Gobind Sagar' stores up to 9.34 billion cubic metres of water. The 90 km long reservoir created by the Bhakra Dam is spread over an area of 168.35 km2. In terms of quantity of water, it is the third largest reservoir in India, the first being Indira Sagar dam in Madhya Pradesh with capacity of 12.22 billion cu m and second Nagarjunasagar Dam.",
      "images": "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201810/dam647_081117121907_1-x404.jpg?9FIZpe39SqXGiX7EIroLsVdcLWjDaUeV",
      "location": "https://www.google.co.in/maps/place/Bhakhra+Dam/@31.4111964,76.4334066,15z/data=!4m5!3m4!1s0x0:0x7cb91e54289880ac!8m2!3d31.4111964!4d76.4334066"
    },
    {
      "name": "SUKHNA LAKE",
      "info": "Sukhna Lake in Chandigarh, India, is a reservoir at the foothills (Shivalik hills) of the Himalayas. This 3 km² rainfed lake was created in 1958 by damming the Sukhna Choe, a seasonal stream coming down from the Shivalik Hills. Originally the seasonal flow entered the lake directly causing heavy siltation. To check the inflow of silt, 25.42 km² of land was acquired in the catchment area and put under vegetation. In 1974, the Choe was diverted and made to bypass the lake completely, the lake being fed by three siltation pots, minimising the entry of silt into the lake itself.",
      "images": "https://www.trawell.in/admin/images/upload/472763834Chandigarh_Sukhna_Lake_Main.jpg",
      "location": "https://www.google.co.in/maps/place/Sukhna+Lake/@30.742074,76.8039478,14z/data=!3m1!4b1!4m5!3m4!1s0x390fed34138d9147:0x8a7a0db7c410d5a2!8m2!3d30.7421379!4d76.8187557"
    },
    {
      "name": "SHAHPUR KANDI FORT ",
      "info": "The Shahpur Kandi Fort, named after Shah Jahan, nestles on the banks of the Ravi River in the picturesque foothills of the Himalayas. Located on the outer periphery of Pathankot, it was built in the 16th century, and stands surrounded by outstanding natural beauty. A part of the fort functions as a rest house today.Shahpur Kandi fort is located 7Kms from Pathankot and presently it has been converted into a beautiful rest house. It is named after Shah Jahan and was built by Bhao Singh in 16th Century. It is majestically located on the banks of river Ravi. There are a few small heritage monuments like tombs and a mosque.",
      "images": "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/09/Nurpur-Fort.jpg",
      "location": "https://www.google.co.in/maps/place/Shahpurkandi+Fort/@32.3876397,75.6833134,15z/data=!4m2!3m1!1s0x0:0xba3db5cd0bf52e84?sa=X&ved=2ahUKEwjcsKHxufPlAhWq8HMBHYWrCaMQ_BIwE3oECAsQCA"
    }
  ];
return ( 
  <div>
  <h1>Top tourist places in panjab</h1><br/>
    <div className={styles.container}>
        {
          products.map(product=><Card product = {product}/>)
        }
    </div>
    </div>
);
}

export default ProductList