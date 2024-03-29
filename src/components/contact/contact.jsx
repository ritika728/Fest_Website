import React from 'react'
import './contact.css'
import EmailIcon from '@mui/icons-material/Email';
import { Link } from '@mui/material';
import { width } from '@mui/system';

const Contact = () => {
  return (
    <div>
	
   <div id="stars"></div>
        {/* <div id="stars2"></div>  */}
        {/* <div id="stars3"></div> */}
  <div className='main'>
  <h1 className="main_excom">EXECUTIVE COMMITEE</h1>
  
      <div className="sectionteam">
	  <div class="team">
					<div class="single-person">
						<div class="person-image6">	
						</div>
						<div class="person-info">
							<h3 class="full-name">Dr. Jeetu Sharma</h3>
							<div className='mail'>
							<span class="speciality" style={{fontSize:"12px"}}>Branch Counselor</span>
							<Link href="mailto:jeetusharma.cet@modyuniversity.ac.in?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
						</div>
						</div>
					</div>
					
				</div>
				<div className="team">
					<div className="single-person">
						<div className="person-image1">
						</div> 
						<div className="person-info">
							<h3 class="full-name">Heena Thadani</h3>
							<div className='mail'>
							<span className="speciality">Chairperson</span>
							<Link className="iconn" href="mailto:heenathadani@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
						</div>
						</div>
					</div>
				</div>
				<div className="team">
					<div className="single-person">
						<div className="person-image2">
						</div>
						<div className="person-info">
						
							<h3 class="full-name">Jahnavi Sharma</h3>
							<div className='mail'>
							<span className="speciality">Vice-Chair</span>
							<Link href="mailto:jahnavisharma_09@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
							</div>
						</div>
					</div>
				</div>
			
				
			
	</div>
	<div className="sectionteam">
	<div class="team">
					<div class="single-person">
						<div class="person-image3">
						</div>
						<div class="person-info">
							<h3 class="full-name">Nivedita Vyas</h3>
							<div className='mail'>
							<span class="speciality">Secretary</span>
							<Link href="mailto:niveditavyas@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
						</div>
						</div>
					</div>
				</div>
				<div class="team">
					<div class="single-person">
						<div class="person-image4">	
						</div>
						<div class="person-info">
							
							<h3 class="full-name">Ritika Malik</h3>
							<div className='mail'>
							<span class="speciality">WebMaster</span>
							<Link href="mailto:ritikamalik@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
						</div>
						</div>
					</div>
					
				</div>
				
				<div class="team">
					<div class="single-person">
						<div class="person-image5">	
						</div>
						<div class="person-info">
							<h3 class="full-name">Shobhna Sharma</h3>
							<div className='mail'>
							<span class="speciality">Treasurer</span>
							<Link href="mailto:sshobhna005@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
						</div>
						</div>
					</div>
					
				</div>
				
	</div>
	</div>
	<div className='wie'>
	<h1 className="main_excom2">WOMEN IN ENGINEERING - IEEE MUST</h1>
	<div className="sectionteam">
	<div className="team">
					<div className="single-person">
						<div className="person-image7">
						</div>
						<div className="person-info">
							<h3 class="full-name">Dr. Niranjan Lal</h3>
							<div className='mail'>
							<span className="speciality">Faculty Advisor</span>
							<Link className="iconn" href="mailto:niranjanlal.cet@maodyuniversity.ac.in?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
						</div>
						</div>
					</div>
				</div>
				<div className="team">
					<div className="single-person">
						<div className="person-image8">
						</div>
						<div className="person-info">
							<h3 class="full-name">Purvasri Das</h3>
							<div className='mail'>
							<span className="speciality">Chairperson</span>
							<Link className="iconn" href="mailto:purva3112@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
						</div>
						
					</div>
				</div>
				</div>
				<div className="team">
					<div className="single-person">
						<div className="person-image9">
						</div>
						<div className="person-info">
							<h3 class="full-name">Vaidehi Purohit</h3>
							<div className='mail'>
							<span className="speciality">Vice-Chair</span>
							<Link className="iconn" href="mailto:vaidehipurohit@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
						</div>
						</div>
					</div>
				</div>
				<div className="team">
					<div className="single-person">
						<div className="person-image10">
						</div>
						<div className="person-info">
							<h3 class="full-name">Teesta Singh</h3>
							<div className='mail'>
							<span className="speciality">Secretary</span>
							<Link className="iconn" href="mailto:teestasingh@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
						</div>
						</div>
					</div>
				</div>
				</div>		
	</div>
	<div className='wie'>
	<h1 className="main_excom2" style={{marginBottom:"10px"}}>COMPUTER SOCIETY - IEEE MUST</h1>
	<div className="sectionteam2">
	<div className="team">
					<div className="single-person">
						<div className="person-image11">
						</div>
						<div className="person-info">
							<h3 class="full-name">Dr. Anand Sharma</h3>
							<div className='mail'>
							<span className="speciality">Faculty Advisor</span>
							<Link className="iconn" href="mailto:anandsharma.cet@modyuniversity.ac.in?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
						</div>
						</div>
					</div>
				</div>
				<div className="team">
					<div className="single-person">
						<div className="person-image12">
						</div>
						<div className="person-info">
							<h3 class="full-name">Vanshika Dadhich</h3>
							<div className='mail'>
							<span className="speciality">Chairperson</span>
							<Link className="iconn" href="mailto:vanshika.dadhich@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
							</div>
						</div>
					</div>
				</div>
				<div className="team">
					<div className="single-person">
						<div className="person-image13">
						</div>
						<div className="person-info">
							<h3 class="full-name">Bhumika Meena</h3>
							<div className='mail'>
							<span className="speciality">Vice-Chair</span>
							<Link className="iconn" href="mailto:bhumikamina_26@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
						</div>
						</div>
					</div>
				</div>
				<div className="team">
					<div className="single-person">
						<div className="person-image18">
						</div>
						<div className="person-info">
							<h3 class="full-name">Ishika Chaudhary</h3>
							<div className='mail'>
							<span className="speciality">Secretary</span>
							<Link className="iconn" href="mailto:ishikachaudhary@ieee.org@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
						</div>
						</div>
					</div>
				</div>
				</div>			
	</div>
	<div className='wie'>
	<h1 className="main_excom2" style={{marginTop:"35px" , marginBottom:"10px"}}>COMMUNICATIONS SOCIETY - IEEE MUST</h1>
	<div className="sectionteam2">
	<div className="team">
					<div className="single-person">
						<div className="person-image14">
						</div>
						<div className="person-info">
							<h3 class="full-name">Dr. Jeetu Sharma</h3>
							<div className='mail'>
							<span className="speciality" style={{fontSize:"12px"}}>Branch Counselor></span>
							<Link className="iconn" href="jeeetusharma@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
							</div>
						</div>
					</div>
				</div>
				<div className="team">
					<div className="single-person">
						<div className="person-image15">
						</div>
						<div className="person-info">
							<h3 class="full-name">Anuradha Sharma</h3>
							<div className='mail'>
							<span className="speciality">Chairperson</span>
							<Link className="iconn" href="mailto:anuradhasharma@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
						</div>
					</div>
					</div>
				</div>
				<div className="team">
					<div className="single-person">
						<div className="person-image16">
						</div>
						<div className="person-info">
							<h3 class="full-name">Drishti Sharan</h3>
							<div className='mail'>
							<span className="speciality">Vice-Chair</span>
							<Link className="iconn" href="mailto:drishti.sharan@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
						</div>
						</div>
					</div>
				</div>
				<div className="team">
					<div className="single-person">
						<div className="person-image17">
						</div>
						<div className="person-info">
							<h3 class="full-name">Simran Khan</h3>
							<div className='mail'>
							<span className="speciality">Secretary</span>
							<Link className="iconn" href="mailto:simrankhan@ieee.org?"style={{marginLeft:"6px"}}className="icons" target="_blank"><EmailIcon/></Link>
							</div>
						</div>
					</div>
				</div>
				</div>			
	</div>
	</div>
  )
}

export default Contact