import React from 'react'
import { TiTick } from "react-icons/ti";
import { SlOptionsVertical } from "react-icons/sl";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'


function Projects() {
      
    return (
        <div className='project py-3  bg-white rounded-2xl my-3 overflow-hidden'>
            <div className='flex items-center justify-between p-5'>
                <div>
                    <h1 className='text-slate-700 font-bold'>Projects</h1>
                    <p className="text-center mt-3">
                        <TiTick className="text-blue-600 text-2xl align-middle inline-block" />
                        <span className="align-middle inline-block ml-1 text-slate-700">30 done <span className='text-slate-500'>this month</span></span>
                    </p>

                </div>
                <SlOptionsVertical />
            </div>
            <div className='overflow-x-auto px-5'>
                <table className='text-left w-auto '>
                    <thead className='w-auto'>
                        <tr className='border-b border-b-gray-300 w-auto text-slate-400 text-sm'>
                            <th className='pl-[24px] pr-[150px] py-[16px] w-auto lg:pr-[24px]'>COMPANIES</th>
                            <th className='px-[24px] py-2 w-[10%] table-cell'>MEMBERS</th>
                            <th className='px-4 py-2 w-[150px] table-cell'>BUDGET</th>
                            <th className='px-4 py-2 w-[150px] table-cell'>COMPLETION</th>
                        </tr>
                    </thead >
                    <tbody className='text-slate-700'>
                        <tr className='border-b border-b-gray-300'>
                            <td className='px-[24px] py-[12px] w-auto whitespace-nowrap flex items-center gap-3 lg:pr-[24px]'><img className='w-[2.25rem] h-[2.25rem]' src='https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg' /> Material UI XD Version</td>
                            <td className='px-[24px] py-5'><div className='flex items-center justify-baseline  max-w-fit'>
                                <div data-tooltip-id="image1" data-tooltip-content="Sophia" data-tooltip-place="bottom" className='ring-2 ring-white relative w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center z-10 hover:z-50'>
                                    <img className=' bg-center bg-cover w-full h-full ' src='	https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg' />
                                </div>
                                <ReactTooltip id="image1" />
                                <div data-tooltip-id="image2" data-tooltip-content="Alexander" data-tooltip-place="bottom" className='ring-2 ring-white relative w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center -ml-2 z-20 hover:z-50'>
                                    <img className=' bg-center bg-cover w-full h-full' src='https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg' />
                                </div>
                                <ReactTooltip id="image2" />
                                <div data-tooltip-id="image3" data-tooltip-content="Lucy" data-tooltip-place="bottom" className='ring-2 ring-white relative w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center -ml-2 z-30 hover:z-50'>
                                    <img className='bg-center bg-cover w-full h-full' src='	https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg' />
                                </div>
                                <ReactTooltip id="image3" />
                                <div data-tooltip-id="image4" data-tooltip-content="Ajay" data-tooltip-place="bottom" className='ring-2 ring-white w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center -m-2 z-40 hover:z-50'>
                                    <img className='bg-center bg-cover w-full h-full' src='	https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg' />
                                </div>
                                <ReactTooltip id="image4" />
                            </div></td>
                            <td className='px-4 py-5'>$14,000</td>
                            <td className=' py-5'>
                                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: "60%" }}></div>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-b border-b-gray-300'>
                            <td className='px-[24px] py-[12px] w-auto whitespace-nowrap  flex items-center gap-3 lg:pr-[24px]'><img className='w-[2.25rem] h-[2.25rem]' src='https://demos.creative-tim.com/material-dashboard-react/static/media/logo-atlassian.f2b0e8570a4b4ce768854ff3dad1a6e1.svg' />Add Progress Track</td>
                            <td className='px-[24px] py-5'><div className='flex items-center justify-center max-w-fit'>
                                <div data-tooltip-id="image3" data-tooltip-content="Lucy" data-tooltip-place="bottom" className='ring-2 ring-white relative w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center -ml-2 z-30 hover:z-50'>
                                    <img className='bg-center bg-cover w-full h-full' src='	https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg' />
                                </div>
                                <ReactTooltip id="image3" />
                                <div data-tooltip-id="image4" data-tooltip-content="Ajay" data-tooltip-place="bottom" className='ring-2 ring-white w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center -m-2 z-40 hover:z-50'>
                                    <img className='bg-center bg-cover w-full h-full' src='	https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg' />
                                </div>
                                <ReactTooltip id="image4" />
                            </div></td>
                            <td className='px-4 py-5'>$3,000</td>
                            <td className=' py-5'>
                                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: "20%" }}></div>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-b border-b-gray-300'>
                            <td className='px-[24px] py-[12px] w-auto whitespace-nowrap  flex items-center gap-3 lg:pr-[24px]'><img className='w-[2.25rem] h-[2.25rem]' src='https://demos.creative-tim.com/material-dashboard-react/static/media/logo-slack.7c47c5aa474b5c4fb39fcf05ffb8e4e7.svg' />Add Progress Track</td>
                            <td className='px-[24px] py-5'><div className='flex items-center justify-baseline max-w-fit'>
                                <div data-tooltip-id="image3" data-tooltip-content="Lucy" data-tooltip-place="bottom" className='ring-2 ring-white relative w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center -ml-2 z-30 hover:z-50'>
                                    <img className='bg-center bg-cover w-full h-full' src='	https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg' />
                                </div>
                                <ReactTooltip id="image3" />
                                <div data-tooltip-id="image4" data-tooltip-content="Ajay" data-tooltip-place="bottom" className='ring-2 ring-white w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center -m-2 z-40 hover:z-50'>
                                    <img className='bg-center bg-cover w-full h-full' src='	https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg' />
                                </div>
                                <ReactTooltip id="image4" />
                            </div></td>
                            <td className='px-4 py-5'>Not set</td>
                            <td className=' py-5'>
                                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: "0%" }}></div>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-b border-b-gray-300'>
                            <td className='px-[24px] py-[12px] w-auto whitespace-nowrap flex items-center gap-3 lg:pr-[24px]'><img className='w-[2.25rem] h-[2.25rem]' src='https://demos.creative-tim.com/material-dashboard-react/static/media/logo-spotify.e83cf56c9d99a1fdf59e8deb58bbe470.svg' />Add Progress Track</td>
                             <td className='px-[24px] py-5'><div className='flex items-center justify-baseline max-w-fit'>
                                <div data-tooltip-id="image1" data-tooltip-content="Sophia" data-tooltip-place="bottom" className='ring-2 ring-white relative w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center z-10 hover:z-50'>
                                    <img className=' bg-center bg-cover w-full h-full ' src='	https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg' />
                                </div>
                                <ReactTooltip id="image1" />
                                <div data-tooltip-id="image2" data-tooltip-content="Alexander" data-tooltip-place="bottom" className='ring-2 ring-white relative w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center -ml-2 z-20 hover:z-50'>
                                    <img className=' bg-center bg-cover w-full h-full' src='https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg' />
                                </div>
                                <ReactTooltip id="image2" />
                                <div data-tooltip-id="image3" data-tooltip-content="Lucy" data-tooltip-place="bottom" className='ring-2 ring-white relative w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center -ml-2 z-30 hover:z-50'>
                                    <img className='bg-center bg-cover w-full h-full' src='	https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg' />
                                </div>
                                <ReactTooltip id="image3" />
                                <div data-tooltip-id="image4" data-tooltip-content="Ajay" data-tooltip-place="bottom" className='ring-2 ring-white w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center -m-2 z-40 hover:z-50'>
                                    <img className='bg-center bg-cover w-full h-full' src='	https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg' />
                                </div>
                                <ReactTooltip id="image4" />
                            </div></td>
                            <td className='px-4 py-5'>$20,500</td>
                            <td className=' py-5'>
                                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: "40%" }}></div>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-b border-b-gray-300'>
                            <td className='px-[24px] py-[12px] w-auto whitespace-nowrap flex items-center gap-3 lg:pr-[24px]'><img className='w-[2.25rem] h-[2.25rem]' src='https://demos.creative-tim.com/material-dashboard-react/static/media/logo-jira.c19fd4e416babfbd0fdb0a794188c601.svg' />Add Progress Track</td>
                            <td className='px-[24px] py-5'><div className='flex items-center justify-baseline max-w-fit'>
                                <div data-tooltip-id="image3" data-tooltip-content="Lucy" data-tooltip-place="bottom" className='ring-2 ring-white relative w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center -ml-2 z-30 hover:z-50'>
                                    <img className='bg-center bg-cover w-full h-full' src='	https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg' />
                                </div>
                                <ReactTooltip id="image3" />
                            
                            </div></td>
                            <td className='px-4 py-5'>$500</td>
                            <td className=' py-5'>
                                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: "5%" }}></div>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-b border-b-gray-300'>
                            <td className='pl-[24px] pr-[150px] py-[12px] w-max whitespace-nowrap  flex items-center gap-3 lg:pr-[24px]'><img className='w-[2.25rem] h-[2.25rem]' src='https://demos.creative-tim.com/material-dashboard-react/static/media/logo-invision.a1062115730dcd10e1c4f4abe7b9ab33.svg' />Add Progress Track</td>
                           <td className='px-[24px] py-5'><div className='flex items-center justify-baseline max-w-fit'>
                                <div data-tooltip-id="image3" data-tooltip-content="Lucy" data-tooltip-place="bottom" className='ring-2 ring-white relative w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center -ml-2 z-30 hover:z-50'>
                                    <img className='bg-center bg-cover w-full h-full' src='	https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg' />
                                </div>
                                <ReactTooltip id="image3" />
                                <div data-tooltip-id="image4" data-tooltip-content="Ajay" data-tooltip-place="bottom" className='ring-2 ring-white w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden flex justify-center items-center -m-2 z-40 hover:z-50'>
                                    <img className='bg-center bg-cover w-full h-full' src='	https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg' />
                                </div>
                                <ReactTooltip id="image4" />
                            </div></td>
                            <td className='px-4 py-5'>$2,000</td>
                            <td className=' py-5'>
                                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: "30%" }}></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Projects
