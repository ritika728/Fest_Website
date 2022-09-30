import React from 'react'
import Glogo from '../assests/gtbit.jpeg'
import './partners.css'
import Dtu from '../assests/dtu.png'

const partners = () => {
  return (
    <div>
      
      <div id="stars"></div>
        <div id="stars2"></div> 
        <div id="stars3"></div>
      <h1 className='partnersheading'>OUR COMMUNITY PARTNERS</h1>
      <div className='partners'>
<div id="container">	
	
	<div class="product-details">
		
	<h1>IEEE DTU SB</h1>
	<span class="hint-star star">
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star-o" aria-hidden="true"></i>
	</span>
		
			<p class="information">IEEE DTU Student Branch , under the aegis of IEEE Global, is the oldest student branch in Delhi Section with an illustrious history of over three decades.</p>

		
		
<div class="control">
	
	<button class="btn">
  <span class="buy"><a href={"https://ieeedtu.in/"}>WEBSITE</a></span>
 </button>
	
</div>
			
</div>
	
<div class="product-image">
	
<img src={Dtu} alt="BigCo Inc. logo"/>
	

<div class="info1">
</div>
</div>

</div>
<div id="container">	
	
	<div class="product-details">
		
	<h1>IEEE GTBIT SB</h1>
	<span class="hint-star star">
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star-o" aria-hidden="true"></i>
	</span>
		
			<p class="information">IEEE GTBIT SB has been enhancing the technical skills of the student members, helping them on the way with a very holistic growth plan. </p>

		
		
<div class="control">
	
	<button class="btn">
   <span class="buy"><a href={"https://ieeegtbit.org/#/"}>WEBSITE</a></span>
 </button>
	
</div>
			
</div>
	
<div class="product-image">
	
<img src={Glogo} alt="BigCo Inc. logo"/>
	

<div class="info">
</div>
</div>

</div>


</div>
    </div>
  )
}

export default partners