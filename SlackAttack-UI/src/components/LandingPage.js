import React, { Component ,useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem  from './NewsItem'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './sidebar.css'
import Pagination from './Pagination';



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

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const close = () => {
  
        document.getElementById('PopUp').style.display='none';
  };
  const Save = () => {
    let general = false, business = false, entertainment= false, health =false, science = false, sports =false, technology = false, flag = false
    if(document.getElementById('chkBusiness').checked == true)
    {
      business = true;
      flag = true;
    }
    if(document.getElementById('chkGeneral').checked == true)
    {
      general = true;
      flag = true;
    }
    if(document.getElementById('chkScience').checked == true)
    {
      science = true;
      flag = true;
    }
    if(document.getElementById('chkEntertainment').checked == true)
    {
      entertainment = true;
      flag = true;
    }
    if(document.getElementById('chkHealth').checked == true)
    {
      health = true;
      flag = true;
    }
    if(document.getElementById('chksports').checked == true)
    {
      sports = true;
      flag = true;
    }
    if(document.getElementById('chkTechnology').checked == true)
    {
      technology = true;
      flag = true;
    }
    if(flag == false){
      window.alert("select atleast one category");
    }
    else{
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
    
    }
};

const homelNews =  () => {
  fetch("http://127.0.0.1:5000/News/"+document.getElementById('hdnUserName').textContent)
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
       
        setArticles(result.NewsData.articles)
        document.getElementById('miHome').style.backgroundColor= '#2a5fe8'
        document.getElementById('miGeneral').style.backgroundColor= '#f9f9f9'
        document.getElementById('miBusiness').style.backgroundColor= '#f9f9f9'
        document.getElementById('miEntertainment').style.backgroundColor= '#f9f9f9'
        document.getElementById('miHealth').style.backgroundColor= '#f9f9f9'
        document.getElementById('miScience').style.backgroundColor= '#f9f9f9'
        document.getElementById('miSport').style.backgroundColor= '#f9f9f9'
        document.getElementById('miTech').style.backgroundColor= '#f9f9f9'
        document.getElementById('txtSearch').value = ""
        setCurrentPage(1)
        
    }
  },
    (error) => {

      console.log(error)
    }
  )
 
};

const generalNews =  () => {
  fetch("http://127.0.0.1:5000/News/category/general")
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
       
        setArticles(result.NewsData.articles)
        document.getElementById('miGeneral').style.backgroundColor= '#2a5fe8'
        document.getElementById('miHome').style.backgroundColor= '#f9f9f9'
        document.getElementById('miBusiness').style.backgroundColor= '#f9f9f9'
        document.getElementById('miEntertainment').style.backgroundColor= '#f9f9f9'
        document.getElementById('miHealth').style.backgroundColor= '#f9f9f9'
        document.getElementById('miScience').style.backgroundColor= '#f9f9f9'
        document.getElementById('miSport').style.backgroundColor= '#f9f9f9'
        document.getElementById('miTech').style.backgroundColor= '#f9f9f9'
        document.getElementById('txtSearch').value = ""
        setCurrentPage(1)
    }
  },
    (error) => {

      console.log(error)
    }
  )
 
};
const businessNews =  () => {
  fetch("http://127.0.0.1:5000/News/category/business")
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
       
        setArticles(result.NewsData.articles)
        document.getElementById('miBusiness').style.backgroundColor= '#2a5fe8'
        document.getElementById('miGeneral').style.backgroundColor= '#f9f9f9'
        document.getElementById('miHome').style.backgroundColor= '#f9f9f9'
        document.getElementById('miEntertainment').style.backgroundColor= '#f9f9f9'
        document.getElementById('miHealth').style.backgroundColor= '#f9f9f9'
        document.getElementById('miScience').style.backgroundColor= '#f9f9f9'
        document.getElementById('miSport').style.backgroundColor= '#f9f9f9'
        document.getElementById('miTech').style.backgroundColor= '#f9f9f9'
        document.getElementById('txtSearch').value = ""
        setCurrentPage(1)
    }
  },
    (error) => {

      console.log(error)
    }
  )
 
};
const entertainmentNews =  () => {
  fetch("http://127.0.0.1:5000/News/category/entertainment")
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
       
        setArticles(result.NewsData.articles)
        document.getElementById('miEntertainment').style.backgroundColor= '#2a5fe8'
        document.getElementById('miHome').style.backgroundColor= '#f9f9f9'
        document.getElementById('miGeneral').style.backgroundColor= '#f9f9f9'
        document.getElementById('miBusiness').style.backgroundColor= '#f9f9f9'
        document.getElementById('miHealth').style.backgroundColor= '#f9f9f9'
        document.getElementById('miScience').style.backgroundColor= '#f9f9f9'
        document.getElementById('miSport').style.backgroundColor= '#f9f9f9'
        document.getElementById('miTech').style.backgroundColor= '#f9f9f9'
        document.getElementById('txtSearch').value = ""
        setCurrentPage(1)
    }
  },
    (error) => {

      console.log(error)
    }
  )
 
};
const healthNews =  () => {
  fetch("http://127.0.0.1:5000/News/category/health")
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
       
        setArticles(result.NewsData.articles)
        document.getElementById('miHealth').style.backgroundColor= '#2a5fe8'
        document.getElementById('miHome').style.backgroundColor= '#f9f9f9'
        document.getElementById('miGeneral').style.backgroundColor= '#f9f9f9'
        document.getElementById('miBusiness').style.backgroundColor= '#f9f9f9'
        document.getElementById('miEntertainment').style.backgroundColor= '#f9f9f9'
        document.getElementById('miScience').style.backgroundColor= '#f9f9f9'
        document.getElementById('miSport').style.backgroundColor= '#f9f9f9'
        document.getElementById('miTech').style.backgroundColor= '#f9f9f9'
        document.getElementById('txtSearch').value = ""
        setCurrentPage(1)
    }
  },
    (error) => {

      console.log(error)
    }
  )
 
};
const scienceNews =  () => {
  debugger;
  fetch("http://127.0.0.1:5000/News/category/science")
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
       
        setArticles(result.NewsData.articles)
        document.getElementById('miScience').style.backgroundColor= '#2a5fe8'
        document.getElementById('miHome').style.backgroundColor= '#f9f9f9'
        document.getElementById('miGeneral').style.backgroundColor= '#f9f9f9'
        document.getElementById('miBusiness').style.backgroundColor= '#f9f9f9'
        document.getElementById('miEntertainment').style.backgroundColor= '#f9f9f9'
        document.getElementById('miHealth').style.backgroundColor= '#f9f9f9'
        document.getElementById('miSport').style.backgroundColor= '#f9f9f9'
        document.getElementById('miTech').style.backgroundColor= '#f9f9f9'
        document.getElementById('txtSearch').value = ""
        setCurrentPage(1)
    }
  },
    (error) => {

      console.log(error)
    }
  )
 
};
const sportsNews =  () => {
  fetch("http://127.0.0.1:5000/News/category/sports")
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
       
        setArticles(result.NewsData.articles)
        document.getElementById('miSport').style.backgroundColor= '#2a5fe8'
        document.getElementById('miHome').style.backgroundColor= '#f9f9f9'
        document.getElementById('miGeneral').style.backgroundColor= '#f9f9f9'
        document.getElementById('miBusiness').style.backgroundColor= '#f9f9f9'
        document.getElementById('miEntertainment').style.backgroundColor= '#f9f9f9'
        document.getElementById('miHealth').style.backgroundColor= '#f9f9f9'
        document.getElementById('miScience').style.backgroundColor= '#f9f9f9'
        document.getElementById('miTech').style.backgroundColor= '#f9f9f9'
        document.getElementById('txtSearch').value = ""
        setCurrentPage(1)
    }
  },
    (error) => {

      console.log(error)
    }
  )
 
};
const technologyNews =  () => {
 
  fetch("http://127.0.0.1:5000/News/category/technology")
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
       
        setArticles(result.NewsData.articles)
        document.getElementById('miTech').style.backgroundColor= '#2a5fe8'
        document.getElementById('miHome').style.backgroundColor= '#f9f9f9'
        document.getElementById('miGeneral').style.backgroundColor= '#f9f9f9'
        document.getElementById('miBusiness').style.backgroundColor= '#f9f9f9'
        document.getElementById('miEntertainment').style.backgroundColor= '#f9f9f9'
        document.getElementById('miHealth').style.backgroundColor= '#f9f9f9'
        document.getElementById('miScience').style.backgroundColor= '#f9f9f9'
        document.getElementById('miSport').style.backgroundColor= '#f9f9f9'
        document.getElementById('txtSearch').value = ""
        setCurrentPage(1)
    }
  },
    (error) => {

      console.log(error)
    }
  )
 
  
};
const searchNews =  () => {
 
  fetch("http://127.0.0.1:5000/News/search/"+document.getElementById('txtSearch').value)
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
       
        setArticles(result.NewsData.articles)
        document.getElementById('miHome').style.backgroundColor= '#2a5fe8'
        document.getElementById('miGeneral').style.backgroundColor= '#f9f9f9'
        document.getElementById('miBusiness').style.backgroundColor= '#f9f9f9'
        document.getElementById('miEntertainment').style.backgroundColor= '#f9f9f9'
        document.getElementById('miHealth').style.backgroundColor= '#f9f9f9'
        document.getElementById('miScience').style.backgroundColor= '#f9f9f9'
        document.getElementById('miSport').style.backgroundColor= '#f9f9f9'
        document.getElementById('miTech').style.backgroundColor= '#f9f9f9'
        setCurrentPage(1)
    }
  },
    (error) => {

      console.log(error)
    }
  )
 
  
};
  
const sidebar = <Sidebar>
  <Menu iconShape="square" backgroundColor= 'black'>
    
      <MenuItem id='miHome' onClick={homelNews} style={{backgroundColor: '#2a5fe8'}}>Home</MenuItem>
      <MenuItem id='miGeneral' onClick={generalNews} style={{backgroundColor: '#f9f9f9'}}>General</MenuItem>
      <MenuItem id='miBusiness' onClick={businessNews} style={{backgroundColor: '#f9f9f9'}}>Business</MenuItem>
      <MenuItem id='miEntertainment' onClick={entertainmentNews} style={{backgroundColor: '#f9f9f9'}}>Entertainment</MenuItem>
      <MenuItem id='miHealth' onClick={healthNews} style={{backgroundColor: '#f9f9f9'}}>Health</MenuItem>
      <MenuItem id='miScience' onClick={scienceNews} style={{backgroundColor: '#f9f9f9'}}>Science</MenuItem>
      <MenuItem id='miSport' onClick={sportsNews} style={{backgroundColor: '#f9f9f9'}}>Sports</MenuItem>
      <MenuItem id='miTech' onClick={technologyNews} style={{backgroundColor: '#f9f9f9'}}>Technology</MenuItem>

  </Menu>
</Sidebar>;



  useEffect(() => {
      const getArticles = async () => {
          const response = await axios.get("http://127.0.0.1:5000/News/"+document.getElementById('hdnUserName').textContent)
          setArticles(response.data.NewsData.articles)
          console.log(response)
      }

      getArticles()
  }, [])
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = articles.slice(firstPostIndex, lastPostIndex);
  return (
 
      <div className="landingPage" style={{ display: 'flex'}}>
       <div class='Sidebar' >
        <div style={{height:'100px'}}> 

        </div>
      {sidebar}
      </div>
      <div>
      <div style={{ margin: '200px'}}>
        <input type='text' id='txtSearch' style={ {width: '600px'}}></input>
        <button id='btnSearch' onClick={searchNews}>Search</button>
      </div>
          {currentPosts.map(article => {
              return(
                  <NewsItem 
                      title={article.title}
                      description={article.description}
                      url={article.url}
                      urlToImage={article.urlToImage} 
                  />
              )
          })}
          <Pagination totalPosts={articles.length} postsPerPage = {postPerPage} setCurrentPage ={setCurrentPage} currentPage ={currentPage}></Pagination>
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
        <label>Science</label>
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