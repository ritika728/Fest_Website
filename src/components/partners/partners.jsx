import React from 'react'
import Glogo from '../assests/gtbit2.png'
import './partners.css'
import Dtu from '../assests/dtu.png'
import Partners from '../assests/partners.JPG'

const partners = () => {
  return (
    <div>
      
      <div id="stars"></div>
        {/* <div id="stars2"></div>  */}
        {/* <div id="stars3"></div> */}
		<div className='photoo'>
		<img className='group' src={Partners} alt="group_photograph" /></div>
      <h1 className='partnersheading'>COLLABORATORS</h1>
      <div className='partners'>
<div id="container">	
	
	<div class="product-details">
		
	<h1 className="dtuheading">IEEE DTU Student Branch</h1>
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
  <span><a class="buy" href={"https://ieeedtu.in/"}>WEBSITE</a></span>
 </button>
	
</div>
			
</div>
	
<div class="product-image">
	
<img src={Dtu} alt="BigCo Inc. logo"/>
	

<div class="info1">
</div>
</div>

</div>
<h1 className='partnersheading2'>OUR COMMUNITY PARTNER</h1>
<div id="container">	
	
	<div class="product-details">
		
	<h1 className='heading7'>IEEE GTBIT Student Branch</h1>
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