import React from 'react'
import Window from './Window'
import githubdata from "../../assets/github.json"
import "./github.scss"
const GitCard=({data={id:1,image:"",title: "Kanban Task Manager",description:"",tags:[],repoLink:"",demoLink:"" }})=>{
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div className="tags">
    {
                data.tags.map(tag=><p className='tag'>{tag}</p>)
            }
        </div>
        <div className="urls">
            <a href={data.repoLink}>Repositery</a>
            <a href={data.demoLink}>Demo link</a>
        </div>
    </div>
}

const Github = () => {
  return (
    <Window name={"github"}>
        <div className="cards">
            {githubdata.map((project)=>{
                return <GitCard data={project}/>
            })}
        </div>
    </Window>
  )
}

export default Github