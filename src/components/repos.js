import React, { useEffect, useState } from "react";
// import repos from "../data/repos";

import REPO from "./repo";
export default ()=>{

    const [repos,setRepos]= useState([]);
    const [reposCount,setReposCount]= useState([]);
   

    useEffect(async()=>{
        let myRepos;
        const data= sessionStorage.getItem("repos");
        if(data){
            myRepos= JSON.parse(data);
            setReposCount(myRepos.length);

            myRepos = myRepos.slice(1,13);
            return setRepos(myRepos);
        }
        
        
       async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/uppy19d0%20/repos");
             myRepos= await response.json();
            setReposCount(myRepos.length);
            sessionStorage.setItem("repos",JSON.stringify(myRepos));
            myRepos = myRepos.slice(1,13);
            setRepos(myRepos);
         }
         fetchRepos();
 
    },[])

    return (
        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center"> 
            <h2 className="text-3xl font-bold">Mi proyecto en Open Source</h2>
            <p>Colaboracion y contribuccion de codigo</p>
            </header>
        <ul className="repos-list">
            {
                repos.map((repo)=>{
                    return <REPO repo={repo} key={repo.id}/>
                })
            }
        </ul>
        <div className="mt-8 text-center">
                <a href="https://github.com/uppy19d0" className="btn" target="_blank" rel="noopener noreferrer">
                    Ver mas en Github({reposCount})
                </a>
        </div>
        </div>
    );
};