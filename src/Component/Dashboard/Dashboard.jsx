import React from 'react'

import carStaticsData from "../../assets/dummy-data/carStatics.js"
import mileStatics from "../../assets/dummy-data/mileStatics.js"
import recommendCars from "../../assets/dummy-data/recommendCars.js"
import { XAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
import {
  VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip,
  VictoryTheme
} from 'victory';


export default function Dashboard() {
 
  return <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <ResponsiveContainer width="100%" >
        <VictoryChart
            
            // adding the material theme provided with Victory
            // theme={VictoryTheme.material}
            domainPadding={20}
          >
            <VictoryAxis
              tickValues={[1, 2, 3, 4, 5, 6, 7]}
              tickFormat={["1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]}
            />

            <VictoryBar
              data={mileStatics}
              x="name"
              y="mileStats"
            />


          </VictoryChart>

    </ResponsiveContainer>
          
        </div>
        <div className="col-md-6">
        <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart data={carStaticsData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke='#ddd' />
        <YAxis />
        <CartesianGrid strokeDasharray="0" stroke='#b7ffe913' />
        <Tooltip />
        <Area type="monotone" dataKey="week" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="prevWeek" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>

    </ResponsiveContainer>
        </div>
        {recommendCars.map((item,index)=>{
          return<>
           <div className='col-md-4 my-5 ' key={index}>
          <div className="content excolor rounded-2 p-3">
            <div className="contenttop ">
            <span><i className="fa-solid fa-arrows-rotate"></i>  {item.percentage} % recommended</span> 
            </div>
            <div className="contentcenter">
            <img src={item.imgUrl} alt="" />
            <h4>{item.carName}</h4>
            </div>
            <div className="contentbottom d-flex justify-content-between align-items-center">
              <div className="bottomleft  d-flex justify-content-evenly align-items-center ">
              <p className='mx-2'><span><i className="fa-solid fa-arrows-rotate"></i>  {item.retweet}  </span>K </p>
            <p className='mx-2'><span><i className="fa-solid fa-bolt"></i></span></p>
            <p className='mx-2'><span><i className="fa-solid fa-clock-rotate-left"></i></span> </p>
              </div>
              <div className="bottomright ">
              <p><span><i className="fa-solid fa-dollar-sign"></i> {item.rentPrice} </span> /h</p>
            
              </div>
            
             
             
            </div>
          </div>
        </div>
          </>
        })
        
        
        
        
        
        
        }
        {/* <div className='col-md-4'>
          <div className="content">
            <div className="contenttop">
            <span><i class="fa-solid fa-arrows-rotate"></i> 64% recommended</span> 
            </div>
            <div className="contentcenter">
            <img src="" alt="" />
            <h4>Name</h4>
            </div>
            <div className="contentbottom d-flex justify-content-between align-items-center">
              <div className="bottomleft  d-flex justify-content-evenly align-items-center ">
              <p className='mx-2'><span><i class="fa-solid fa-arrows-rotate"></i> 32 </span>K </p>
            <p className='mx-2'><span><i class="fa-solid fa-bolt"></i></span></p>
            <p className='mx-2'><span><i class="fa-solid fa-clock-rotate-left"></i></span> </p>
              </div>
              <div className="bottomright ">
              <p><span><i class="fa-solid fa-dollar-sign"></i> 32 </span> /h</p>
            
              </div>
            
             
             
            </div>
          </div>
        </div> */}
        
      </div>
    </div>





   















  </>
}
