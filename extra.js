images/food2.webp






//mdb react installation version

"mdb-react-ui-kit": "^6.1.0",


// Login Form 

<div className="container0">
            <img src={sheshalogin} alt="sheshalogin.png" className="image2" style={{ position: "relative", left: "50%", width: "50%", top: "-1px", height: "650px", }} />

            <form onSubmit={ProceedLogin} className="form1">
                <img src={shesha} alt="shesha.png" style={{ position: "relative", left: "2%", top: "15px", }} />

                <div>
                    <div>
                        <h2> Login</h2>
                    </div>
                    <div className="row1">
                        <div className="form-group">
                            <input type="text" placeholder="Username" value={username} onChange={e => usernameupdate(e.target.value)} ></input>

                        </div>

                        <div className="form-group">
                            <input type="password" placeholder="Password" value={password} onChange={e => passwordupdate(e.target.value)} className="input1" ></input>
                        </div>

                        <div>
                            <p><Link className="text" to={'/forgot'} style={{ position: "relative", left: "43%", }}>Forgot Password</Link></p>
                            <button type="submit" className="login">Login</button>

                            <p className="p1" style={{ position: "relative", top: "290px", }}><Link className="text" to={'/register'}><span>Don't have an account?</span></Link></p>
                        </div>
                    </div>
                </div>
            </form>
        </div>





















// Register form 

<div className="container3">
            <img src={shesharegister} alt="shesharegister.png" className="image1" style={{ position: "relative", left: "50%", width: "50%", top: "-1px", height: "650px", }} />

            <form onSubmit={handlesubmit}>
                <img src={shesha} alt="shesha.png" style={{ position: "relative", left: "5%", top: "15px", }} />

                <h2>Sign Up</h2>
                <div className="row">
                    <div className="form-group">
                        <input type="text" placeholder="Username" value={id} onChange={e => idchange(e.target.value)} className="input3" ></input>
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="Name" value={name} onChange={e => namechange(e.target.value)} ></input>
                    </div>

                    <div className="form-group">
                        <input type="password" placeholder="Password" value={password} onChange={e => passwordchange(e.target.value)} className='input1' ></input>
                    </div>

                    <div className="form-group">
                        <input type="email" placeholder="Email" value={email} onChange={e => emailchange(e.target.value)} className='input2' ></input>
                    </div>
                </div>
                <div>

                    <button type="submit" className="login-btn">Sign Up</button>
                    <p style={{ position: "relative", left: "10%", }}> Already have an account ? <NavLink to="/Login">Log In</NavLink></p>
                </div>
            </form>
        </div>




























/*body {
   margin: 0;
   padding: 0;
    background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(./images/LandingImageP1.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
}*/








landing 

<div className="page">
            <img src={logoshesha} alt="logoshesha.png" style={{ position: "absolute", left: "2%", height: "120px", }} />

            <img src={differentfood} alt="differentfood.png" style={{ position: "absolute", left: "49%", top: "90px", }} />
            <h2 className="heading2">"A recipe has no <br />soul, you as the<br />cook must bring soul<br />to the recipe“-<br /><b>Thomas Keller</b></h2>
            <NavLink to="/Register"><button type="button" className="button2">Signup</button></NavLink>
            <NavLink to="/Login"><button type="button" className="button2" style={{ position: "relative", top: "70px", translate: "25px", }}>Login</button></NavLink>

            <h1 className="heading1">Let's Starting Cooking with Popular Recipes</h1>
            <hr style={{ position: "relative", top: "520px", height: "12px", }}></hr>
        </div>

        <img src={landingimg1} alt="landingimg1.png" style={{ position: "relative", left: "20%", top: "160px", borderRadius: "20px", boxShadow: "20px 20px 40px ", }} />
        <img src={landingimg2} alt="landingimg2.png" style={{ position: "relative", left: "50%", top: "160px", borderRadius: "20px", boxShadow: "20px 20px 40px ", }} />
        <img src={landingimg3} alt="landingimg3.png" style={{ position: "relative", left: "-5%", top: "290px", borderRadius: "20px", boxShadow: "20px 20px 40px ", }} />








  {/*End Card Image Section*/}


      {/*<div className='home_header_left' style={{ marginRight: "auto" }}>
        <h1>Life is uncertain. Eat  first</h1>
        <p className="homeHeaderLeft_p3"> “ A recipe has no soul.<br />You as the cook must bring soul to the recipe”<br /><b>-Thomas Keller</b> </p>
      </div>

      <img src="images/swirlyArrow.png" style={{ position: "relative", left: "27%", top: "5px" }}></img><br />
      <button className="homeHeaderLeft_Button" onClick={function () { recipeElRef.current.click() }}>Explore Recipes <NavLink ref={recipeElRef} to="/Recomendations" hidden /></button>

      <img src={`images/homeHeaderRight.png`} style={{ position: "relative", height: "100%", width: "45%", left: "50%", top: "-350px", }} alt='' />

      <div className='home_header1'>
        <div className='home_header_right'>
          <img src={`images/homeHeader2.png`} style={{ position: "relative", left: "20%", height: "350px", top: "-290px", }} alt='' />
        </div>

        <div className='home_header_left'>
          <h1 style={{ position: "relative", left: "-45%", top: "-290px", }}>Create your own Recipe</h1>
          <h3 className="homeHeaderLeft_H3" style={{ position: "relative", left: "-45%", top: "-250px", fontWeight: "400", }}>
            Using the ingredients you have we can help you make a meal<br /><br />Porem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Nunc vulputate libero et velit<br /> interdum, ac aliquet odio mattis.
          </h3>
        </div>
  </div>*/}























<Carousel style={{ position: "relative", top: "0px", width: "125%", left: "0", }} >
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="images/food1.jpg" alt="First slide" style={{ width: "100%",height:"100vh", }} />
          <Carousel.Caption>
            <h3 style={{fontSize:"60px",position:"relative",top:"-120px", fontWeight:"600",}}>Weekend Favourites</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img className="d-block w-100" src="images/food2.webp" alt="Second slide" style={{ width: "100%",height:"100vh", }} />
          <Carousel.Caption>
            <h3 style={{fontSize:"60px",position:"relative",top:"-120px", fontWeight:"600",}}>Family Dinner</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="images/food4.jpg" alt="Third slide" style={{ width: "100%",height:"100vh", }} />
          <Carousel.Caption>
            <h3 style={{fontSize:"60px",position:"relative",top:"-120px", fontWeight:"600",}}>Holiday Favourites</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="images/food5.jpg" alt="Third slide" style={{ width: "100%",height:"100vh", }} />
          <Carousel.Caption>
            <h3 style={{fontSize:"60px",position:"relative",top:"-120px", fontWeight:"600",}}>Dinner</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="images/food6.avif" alt="Third slide" style={{ width: "100%",height:"100vh", }} />
          <Carousel.Caption>
            <h3 style={{fontSize:"60px",position:"relative",top:"-120px", fontWeight:"600",}}>Family Day</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



































<Carousel.Item interval={500}>
<img className="d-block w-100" src="images/oats.jpg" alt="Second slide" style={{ width: "100%",height:"90vh", }} />
<Carousel.Caption>
<h1 style={{fontWeight:"600",position:"relative",top:"-30px",color:"White",}}>Oats BreakFast</h1>
  <button style={{fontWeight:"600", width:"25%",height:"50px",  backgroundColor:"green",color:"white",borderRadius:"10px",}}>View Recipe</button>
</Carousel.Caption>
</Carousel.Item>

                    
                   //import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper'; 



                    value={password} onChange={e => passwordchange(e.target.value)}


                    <a className="btn btn-danger">Back</a>




                    value={email} onChange={e => emailchange(e.target.value)}




/* Top Nav JSX REact.js 

                    import React,{useRef,useState} from 'react';
                    import {NavLink} from 'react-router-dom';
                    import './TopNav.css';
                    
                    export const TopNav = () => {
                      const navigation = [
                        {name:'Home',href:'/'},
                        {name:'Lessons',href:'/lessons'},
                        {name:'Live Lessons',href:'/liveLessons'},
                        {name:'Ingredients',href:'/ingredient'},
                      ]
                    
                      return (
                        <div className="">
                        <nav className="TopNav">
                            <img className="TopNav_logo" src={"images/shesha_logo.png"} alt=""/>
                            {navigation.map((item)=>(
                              <NavLink key={item.name} to={item.href} className={ ({isActive}) => {return `TopNav_a ${isActive? 'TopNav_a active': ''}`}}>{item.name}</NavLink>
                            ))}
                            <button className="search_icon" type="button"><img src={"images/search_icon.png"} className="logo" alt=""/></button>
                            <a className="">
                              <button  className="logIn" onClick={function(){const a = document.createElement("a");a.href = "";a.click();a.remove();}}>Log In</button>
                            </a>
                        </nav>
                        </div>
                      )
                    }
                    






/* css of TopNav 


@keyframes TopNav {
  from {
    transform: translateX(-200%);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1
  }
}



.TopNav_logo {
    height: 65px
  }
  
  .TopNav_a {
    height: 40px;
    cursor: pointer;
    position: relative;
    bottom: -20px;
    margin-left: 10%;
    font-size: 1.3rem;
    color: black;
    text-decoration: none;
  }
  
  .active {
    height: 40px;
    cursor: pointer;
    position: relative;
    bottom: -20px;
    margin-left: 10%;
    font-size: 1.3rem;
    color: black;
    border-bottom: 4px solid green;
  }
  
  .logIn {
    position: relative;
    bottom: -20px;
    left: -290%;
    background-color: white;
    border: solid black 1.5px;
    font-size: 1.09rem;
  }
  
  .logIn_a {
    width: fit-content;
    height: fit-content;
    background-color: white;
    margin-right: 2%;
  }
  
  /*end of all css for TopNav.js component*/
  
  
  







  {navigation.map((item)=>(
    <NavLink key={item.name} to={item.href} className={ ({isActive}) => {return `TopNav_a ${isActive? 'TopNav_a active': ''}`}}>{item.name}</NavLink>
  ))}






  <style>
            {`
                .liveLessons{
                    position:absolute; top:50%; left:50%;
                    transform:translate(-50%,-50%)
                }   
            `}
        </style>




.btn-group button {
  background-color: #04AA6D; 
  border: 1px solid green; 
  color: white; 
  padding: 10px 24px; 
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}











<button type="button" onClick={()=> navigate('/Login')}>Login</button>






<h1 style={{ position: "relative", translate: "50px 0px", marginTop: "100px", marginBottom: "100px" }}>Popular Recipes</h1>
        <section style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
          <div style={{ marginBottom: "100px", position: "relative", translate: "200px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/taco.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "250px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/pancake.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "300px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/fishAndSalad.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "200px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/noodlesDish.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "250px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/krisztina-papp.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "300px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/soup.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "200px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/keesch.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>
          
          <div style={{ marginBottom: "100px", position: "relative", translate: "250px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/eggAndSteak.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>

          <div style={{ marginBottom: "100px", position: "relative", translate: "300px 0px", display: "flex", flexDirection: "column", width: "350px", height: "350px" }}>
            <img style={{ position: "absolute", borderRadius: "10%", height: "100%", width: "100%", }} src="images/giantMuffin.png" />
            <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "35%", translate: "129px -10px",  height: "40px",width:"40px", borderRadius:"50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top:"27px",translate: "9px -17px", left:"10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
            <button style={{ position: "relative", translate: "-135px 230px", backgroundColor: "green", width: "150px", height: "30px" }}><img style={{ position: "relative", translate: "60px -15px", height: "17px", width: "fit-content", }} src="images/ViewIngredientsButton.png" /></button>
          </div>
        </section>
      </section>










// UserProfile button 

<button style={{ width: "437px", }}><img src="images/SettingIcon.png" style={{ translate: "-160px 0px", }} alt="SettingIcon.png" />Settings</button>














top nav 



/*begining of all css for TopNav.js component
@keyframes TopNav {
  from {
    transform: translateX(-200%);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1
  }
}

* {
  box-sizing: border-box;
}

.TopNav {
  width: 100vw;
  background-color: white;
  height: 100px;
  border-bottom: 1px solid ;
}
.TopNav_a {
  height: 80px;
  cursor: pointer;
  position: relative;
  left: 10%;
  bottom: -20px;
  margin-left: 7%;
  font-size: 1.3rem;
  font-weight: 600;
  color: rgb(68, 66, 66);
  text-decoration: none;
}

.TopNav_a:hover{
  color: rgb(88, 221, 121);
}

.TopNav_logo {
 position: relative;
 left: 4%;
 width: -10%;
}
.active {
  height: 40px;
  cursor: pointer;
  position: relative;
  bottom: -20px;
  font-size: 1.3rem;
  color: black;
  border-bottom: 4px solid green;
}

.nav {
  position: relative;
  background-color: rgb(226, 223, 223);
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  padding: 0 1rem;
}

.site-title {
  font-size: 2.3rem;
}

.nav ul {
  position: relative;
  left: -10%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 3rem;
}

.nav a {
  color: inherit;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  padding: .25rem;
}

button {
  position: relative;
  top: 25px;
  left: 24%;
  width: 8%;
  border: none;
  border-radius: 10%;
  height: 60px;
  font-size: 1.7rem;
}


@media screen and (max-width:412px){
  /*begining of all css for TopNav.js component
  .TopNav{
    display: flex;flex-direction: column;
    position: sticky;top:0px;z-index:1;
    width:100%;
    border-bottom:solid black 1px;
    background-color:white;
  }
  .TopNav_logo{
    height:65px;width:300px;position: relative;margin-left:auto;margin-right:auto;
  }
  .TopNav_a{
    position: relative;
    bottom:-20px;
    margin-left:2%;
    font-size:1.1rem;
  }
  .search_icon{
    position: relative;top: 30px;left: 0px;
    background-color:white;
    border:none;
    margin-left:0px;
  }
  .logIn{
    position: relative;bottom:-20px;
    background-color:white;
    border:solid black 1.5px;
    font-size:1.09rem;
  }
  .logIn_a{
    width:fit-content; height:fit-content;
    background-color:white;
    margin-right:2%;
  }
  end of all css for TopNav.js component
}



















breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            }
          }}


          // button for the swiper image card 

          <Button className="w-100 rounded-0" variant="success">View Recipe</Button>






          {/*<h1 className="text-center text-success my-5" style={{ position: "relative", left: "10%", top: "-190px", }}>Trending Recipes for the Month</h1>
      <div style={{ marginTop: "20vh", width: "fit-content" }}>

        <div className="home_footer">
          <div className="homeFooter_div1">
            <div style={{ position: "relative", width: "auto", height: "auto" }} >
              <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "25%", translate: "129px -10px", height: "40px", width: "40px", borderRadius: "50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top: "27px", translate: "9px -17px", left: "10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
              <img src={`images/pancake.png`} alt='' style={{ borderRadius: "10px", }} />
              <button onClick={() => pancakeIngredientsEl.current.click()} style={{ width: "40%", height: "35px", position: "relative", top: "-50px", left: "5%", backgroundColor: "green", color: "white", }} >View ingredient<NavLink ref={pancakeIngredientsEl} to='/ViewIngredients' hidden /></button>
            </div>
            <div>
              <h2 className="homeHeaderLeft_h2">Pancake</h2>
              <div><img src={`images/gordonRamsy.png`} alt='' style={{ position: "relative", top: "-55px", }} /><h4 style={{ position: "relative", top: "-50px", left: "20%", fontSize: "20px", fontWeight: "400", }}>Gordon Ramsay</h4></div>
            </div>
          </div>

          <div className="homeFooter_div2">
            <div style={{ position: "relative", width: "auto", height: "auto" }} >
              <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "25%", translate: "129px -10px", height: "40px", width: "40px", borderRadius: "50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top: "27px", translate: "9px -17px", left: "10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
              <img src={`images/friedChickenAndRice.png`} alt='' style={{ borderRadius: "10px", }} />
              <button style={{ width: "40%", height: "35px", position: "relative", top: "-50px", left: "5%", backgroundColor: "green", color: "white", }} >View ingredient</button>

            </div>
            <div>
              <h2 className="homeHeaderLeft_h2">Fried Chicken & Rice</h2>
              <div><img src={`images/pierreGagnaire.png`} alt='' style={{ position: "relative", top: "-55px", }} /><h4 style={{ position: "relative", top: "-50px", left: "20%", fontSize: "20px", fontWeight: "400", }}>Pierre Gagnaire</h4></div>
            </div>
          </div>

          <div className="homeFooter_div3">
            <div style={{ position: "relative", width: "auto", height: "auto" }} >
              <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "25%", translate: "129px -10px", height: "40px", width: "40px", borderRadius: "50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top: "27px", translate: "9px -17px", left: "10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
              <img src={`images/burger.png`} alt='' style={{ borderRadius: "10px", }} />
              <button onClick={() => burgerEl.current.click()} style={{ width: "40%", height: "35px", position: "relative", top: "-50px", left: "5%", backgroundColor: "green", color: "white", }} >View ingredient<NavLink ref={burgerEl} to='/ViewIngredientsburger' hidden /></button>
            </div>
            <div>

              <h2 className="homeHeaderLeft_h2">Fried Chicken & Rice</h2>
              <div><img src={`images/pierreGagnaire.png`} alt='' style={{ position: "relative", top: "-55px", }} /><h4 style={{ position: "relative", top: "-50px", left: "20%", fontSize: "20px", fontWeight: "400", }}>Pierre Gagnaire</h4></div>
            </div>
          </div>
        </div>
  </div>*/}