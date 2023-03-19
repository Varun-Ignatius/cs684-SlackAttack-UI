import React, { Component ,useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem  from './NewsItem'


const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}
const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '350px',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}


const LandingPage = () => {
  const [articles, setArticles] = useState([])

  const close = () => {
  
        document.getElementById('PopUp').style.display='none';
  };
  const Save = () => {
    let general = false, business = false, entertainment= false, health =false, science = false, sports =false, technology = false
    if(document.getElementById('chkBusiness').checked == true)
    {
      business = true;
    }
    if(document.getElementById('chkGeneral').checked == true)
    {
      general = true;
    }
    if(document.getElementById('chkScience').checked == true)
    {
      science = true;
    }
    if(document.getElementById('chkEntertainment').checked == true)
    {
      entertainment = true;
    }
    if(document.getElementById('chkHealth').checked == true)
    {
      health = true;
    }
    if(document.getElementById('chksports').checked == true)
    {
      sports = true;
    }
    if(document.getElementById('chkTechnology').checked == true)
    {
      technology = true;
    }
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ business: business,
        entertainment: entertainment,
        general: general,
        health: health,
        science: science,
        sports: sports,
        technology: technology})
  };
    fetch("http://127.0.0.1:5000/Categories/"+document.getElementById('hdnUserName').textContent,requestOptions)
    .then(res => res.json())
    .then(
      (result) => {

        console.log(result)
        if(result.Code == 401)
        {
          window.alert(result.Message);
        }
        else if(result.Code == 200)
        {
         
          window.alert("Categories Updated Successfully");
          document.getElementById('PopUp').style.display='none';
      }
    },
      (error) => {

        console.log(error)
      }
    )
    
    
};

  useEffect(() => {
      const getArticles = async () => {
          const response = await axios.get("http://127.0.0.1:5000/News/noUser")
          setArticles(response.data.articles)
          console.log(response)
      }

      getArticles()
  }, [])
  return (
      <div>
       <div style={{height: '8300px'}}>

      </div>
      <div>
          {articles.map(article => {
              return(
                  <NewsItem 
                      title={article.title}
                      description={article.description}
                      url={article.url}
                      urlToImage={article.urlToImage} 
                  />
              )
          })}
          </div>
      <div id='PopUp' style={{display: 'none'}}>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div>
      <input
          type="checkbox"
          id="chkGeneral"
          name="General"
          value="general"
        />
        <label>General</label>
        </div>
        <div>
      <input
          type="checkbox"
          id="chkScience"
          name="Science"
          value="science"
        />
        <label>General</label>
        </div>
        <div>
         <input
          type="checkbox"
          id="chkBusiness"
          name="Business"
          value="business"
        />
        <label>Business</label>
        </div>
        <div>
         <input
          type="checkbox"
          id="chkEntertainment"
          name="Entertainment"
          value="entertainment"
        />
        <label>Entertainment</label>
        </div>
        <div>
         <input
          type="checkbox"
          id="chkHealth"
          name="Health"
          value="health"
        />
        <label>Health</label>
        </div>
        <div>
         <input
          type="checkbox"
          id="chksports"
          name="Sports"
          value="sports"
        />
        <label>Sports</label>
        </div>
        <div>
         <input
          type="checkbox"
          id="chkTechnology"
          name="Technology"
          value="technology"
        />
        <label>Technology</label>
        </div>
     <div>
      <div>
        <p style={{height: '10px'}}> </p>
      </div>
      <button onClick={Save} style={{margin: '5px'}}>
          Save
      </button>

      <button onClick={close} style={{margin: '15px'}}>
          Close
      </button>
      </div>   
      </div>
      </div>
      </div>
  )
}

export default LandingPage