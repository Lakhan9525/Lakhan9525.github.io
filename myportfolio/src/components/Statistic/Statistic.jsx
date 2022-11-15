import React from 'react'
import "./Statistic.css"

const Statistic = () => {
  return (
    <div>
        <br /><br />
        <div className='main-stats' style={{color:"rgb(255, 0, 179)"}}>
            <div>
            <div className='circle-even'><p>1200+</p></div>
            <h5 className='text_font'>Hours</h5>
            <h6>Of Coding</h6>
            </div>
            <div>
            <div className='circle-even'><p>320+</p></div>
            <h5 className='text_font'>HackerRank</h5>
            <h6>Points</h6>
            </div>
            <div>
            <div className='circle-even'><p>400+</p> </div>
            <h5 className='text_font'>GitHub</h5>
            <h6>Commits</h6>
            </div>
            <div>
            <div className='circle-even'><p>5</p></div>
            <h5 className='text_font'>Projects</h5>
            <h6>Done</h6>
            </div>
            <div>
            <div className='circle-even'><p>100+</p></div>
            <h5 className='text_font'>Hours</h5>
            <h6>Of Soft Skills</h6>
            </div>
            
        </div>
    </div>
  )
}

export default Statistic