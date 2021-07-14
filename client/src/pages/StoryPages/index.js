import React, {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import API from "../../utils/API";
import "./style.css";
import Col from "../../components/Col";
import Content from "../../components/Content";
import {UserContext} from "../../utils/UserContext";



function StoryRoute(props) {

	const { user } = useContext(UserContext)
	console.log(user)

  const [story, setStory] = useState({})

    const {id} = useParams()
    useEffect(() => {
      API.getStory(id)
        .then(res => setStory(res.data))
        .catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

	  function increment() {
		document.getElementById("pageOne").classList.add("hidden");
		document.getElementById("pageTwo").classList.remove("hidden");
	  }

	  function increment2() {
		document.getElementById("pageTwo").classList.add("hidden");
		document.getElementById("pageThree").classList.remove("hidden");
	  }

	  function increment3() {
		document.getElementById("pageThree").classList.add("hidden");
		document.getElementById("pageFour").classList.remove("hidden");
	  }

	  function increment4() {
		const levelUp = user.level+1;
    if (user.level > 3) {
      window.location.replace("/protected")
    } else {
      API.updateUser(user.id, {
        level : levelUp
        })
        .then(window.location.replace("/protected"))
    }
	}


  function btn1Press(e) {
    console.log(e.target.value)
    let btnValue=e.target.value;
    if(btnValue === story.page1Keyword) {
      console.log("success")
      window.alert("Correct!!")
      document.getElementById("nextbtn1").classList.remove("hidden")
    } else {
      window.alert("Try again!")
    }
  }
  function btn2Press(e) {
    console.log(e.target.value)
    let btnValue=e.target.value;
    if(btnValue === story.page2Keyword) {
      console.log("success")
      window.alert("Correct!!")
      document.getElementById("nextbtn2").classList.remove("hidden")
    } else {
      window.alert("try again!")
    }
  }
  function btn3Press(e) {
    console.log(e.target.value)
    let btnValue=e.target.value;
    if(btnValue === story.page3Keyword) {
      console.log("success")
      window.alert("Correct!!")
      document.getElementById("nextbtn3").classList.remove("hidden")
    } else {
      window.alert("try again!")
    }
  }
  function btn4Press(e) {
    console.log(e.target.value)
    let btnValue=e.target.value;
    if(btnValue === story.page4Keyword) {
      console.log("success")
      window.alert("Congrats you've finished the story!")
      document.getElementById("nextbtn4").classList.remove("hidden")
    } else {
      window.alert("try again!")
    }
  }


    return (
        <div>
            <h2>{story.title}</h2> 
            <Col size="md-4">
            <Content>
              <div id="pageOne">
              <h3>{story.page1}</h3>
              <img src="./images/sound.png" alt="sound"/>
              <img src={"http://localhost:3000/images/"+story.page1Keyword+".png"} alt="icon"/>

              {story.page1options ? (
                                    
                    <div>
                    {story.page1options.map(page1options => (
                        
                      
                        <button id="valueButton" onClick={btn1Press} value={page1options}>{page1options}</button>
                      
              

                      
                        
                    ))}
                    </div>
                   
                ) : (
                    <h3>No Results to Display</h3>
                )}

              <button className="hidden" id="nextbtn1" onClick={() => increment()}>Next Page</button>
              </div>

              <div id="pageTwo" className="hidden">
              <h3 >{story.page2}</h3>
              <img src={"./images/"+story.page2Keyword+".png"} alt="icon"/>
              {story.page2options ? (
                                    
                  <div>
                      {story.page2options.map(page2options => (
                                        
                        <div>
                            <button id="button2" onClick={btn2Press}  value={page2options}>{page2options}</button><br></br>
                        </div>
                        
                                        
                        ))}
                  </div>
                                   
                    ) : (
                    <h3>No Results to Display</h3>
                  )}

              <button className="hidden" id="nextbtn2" onClick={() => increment2()}>Next Page</button>
              </div>
              
              <div id="pageThree" className="hidden">
              <h3 >{story.page3}</h3>
              <img src={"./images/"+story.page3Keyword+".png"} alt="icon"/>
              {story.page3options ? (
                                    
                  <div>
                      {story.page3options.map(page3options => (
                                                          
                          <div>
                              <button id="button3" onClick={btn3Press}  value={page3options}>{page3options}</button><br></br>
                          </div>
                              ))}
                          </div>
                                                     
                          ) : (
                            <h3>No Results to Display</h3>
                        )}
              <button  className="hidden" id="nextbtn3" onClick={() => increment3()}>Next Page</button>
              </div>

              <div id="pageFour" className="hidden">
              <h3 >{story.page4}</h3>
              <img src={"./images/"+story.page4Keyword+".png"} alt="icon"/>
              {story.page4options ? (
                                    
                  <div>
                      {story.page4options.map(page4options => (
                                                          
                          <div>
                              <button id="button4" onClick={btn4Press}  value={page4options}>{page4options}</button><br></br>
                          </div>
                              ))}
                          </div>
                                                     
                          ) : (
                            <h3>No Results to Display</h3>
                        )}
              <button  className="hidden" id="nextbtn4" onClick={() => increment4()}>Complete Story!</button>
              </div>

            </Content>
            </Col>
            
        
         
        </div>
          
      );
};

export default StoryRoute;