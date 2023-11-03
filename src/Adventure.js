import './adventure.css';
import WOW from 'wowjs';
           
function Adventure(){
    new WOW.WOW({
        live:false,
    }).init();   
    
    return(  
       
        <section className='adventure col-12' id="adventure">
            <div className='opacety col-12'>
            <p className='col-12 wow animate__animated animate__backInRight animate__slow 2s'>TRAVEL AGENCY</p>
            <h1 className='col-4 wow animate__animated animate__backInRight animate__slow 2s'>Your<h1/>
            <h1>Adventure</h1>
            <h1 className='col-4 wow animate__animated animate__backInRight animate__slow 2s'>Starts Here</h1>
            </h1>
            <p className='col-12 wow animate__animated animate__backInRight animate__slow 2s'>Images from  <a href='#'>freepik</a> </p>

            <button className='btn btn-outline-light wow animate__animated button not animate__backInUp animate__slow 2s'>START PLAYING</button>
            </div>

        </section>
    )
}

export default Adventure