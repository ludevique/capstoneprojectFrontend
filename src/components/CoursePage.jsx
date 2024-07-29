import React from 'react'
import { useEffect, useState } from 'react'
//-----------------import axios that will help me to get my data----------
import axios from 'axios'

const CoursePage = () => {
    const [courses, setCourses] = useState([]);

    //use our useEffect hook to perform side effect in our components
    useEffect(() => {
      const myData = async () => {
        try {
          const result = await axios.get('http://localhost:3000/catalog');
          //
          setCourses(result.data)
          
        }catch (error) {
            console.error('ran into an error while fectching course data',error)
        };
      };
      //call my function
      myData();
    }, [])

    //contain to be display with logic,
    
  return ( 
    <div>
        <h1>COURSES MATERIALS</h1>
        <div className="course-list">
        {/* using the map() to render the data in my database */}
            {courses.map(course => (
              <div key={course._id} className='course-item'>
                <h2>{course.name}</h2>
                <p>{course.Description}</p>
                <iframe
                    width="570"
                    height="315"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
                    allowFullScreen
                    src={course.url}
                    title={course.name}></iframe>
              </div>
            ))}
        </div>
    </div>
  )
}

export default CoursePage